import { getIndex } from "./index";
import { generateEmbedding } from "./embedding";
import { SearchResult } from "./types";

function cosineSimilarity(a: number[], b: number[]): number {
  let dot = 0;
  let normA = 0;
  let normB = 0;

  const length = Math.min(a.length, b.length);

  for (let i = 0; i < length; i++) {
    dot += a[i] * b[i];
    normA += a[i] * a[i];
    normB += b[i] * b[i];
  }

  if (normA === 0 || normB === 0) {
    return 0;
  }

  return dot / (Math.sqrt(normA) * Math.sqrt(normB));
}

export async function retrieve(
  query: string,
  topK: number = 5
): Promise<SearchResult[]> {
  const queryEmbedding = await generateEmbedding(query);

  const index = getIndex();

  const results: SearchResult[] = index.map((chunk) => ({
    id: chunk.id,
    file: chunk.file,
    page: chunk.page,
    text: chunk.text,
    preview:
      chunk.text.length > 150
        ? chunk.text.substring(0, 150) + "..."
        : chunk.text,
    score: cosineSimilarity(queryEmbedding, chunk.embedding),
  }));

  results.sort((a, b) => b.score - a.score);

  return results.slice(0, topK);
}