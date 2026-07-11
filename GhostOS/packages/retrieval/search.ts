import { getIndex } from "./index";
import { generateEmbedding } from "./embedding";
import { SearchResult } from "./types";

function cosineSimilarity(a: number[], b: number[]) {
  let dot = 0;
  let normA = 0;
  let normB = 0;

  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    normA += a[i] * a[i];
    normB += b[i] * b[i];
  }

  return dot / (Math.sqrt(normA) * Math.sqrt(normB));
}

export async function retrieve(
  query: string,
  topK = 5
): Promise<SearchResult[]> {
  const queryEmbedding = await generateEmbedding(query);

  const index = getIndex();

  const results = index.map((chunk) => ({
    ...chunk,
    score: cosineSimilarity(queryEmbedding, chunk.embedding),
  }));

  results.sort((a, b) => b.score - a.score);

  return results.slice(0, topK);
}