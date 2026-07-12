import { RetrievedChunk } from "./types";
export function buildPrompt(
  question: string,
  chunks: RetrievedChunk[]
): string {

  const context = chunks
    .map(chunk =>

`FILE: ${chunk.file}

${chunk.text}`

)
    .join("\n\n");

  return `
Answer the question using ONLY the context below.

If the answer is present,
answer directly.

If the answer cannot be found,
reply exactly:

I couldn't find this in your indexed files.

Context:

${context}

Question:

${question}
`;
}