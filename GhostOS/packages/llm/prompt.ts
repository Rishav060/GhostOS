import { RetrievedChunk } from "./types";

export function buildPrompt(
  question: string,
  chunks: RetrievedChunk[]
): string {

  const context = chunks
    .map(
      chunk => `
FILE: ${chunk.file}

${chunk.text}
`
    )
    .join("\n------------------\n");

  return `
You are GhostOS, a private offline AI assistant.

You must answer the user's question ONLY using the context below.

Instructions:
- If the answer exists in the context, answer naturally in one or two sentences.
- Do not use outside knowledge.
- Do not guess.
- If the answer does not exist anywhere in the context, reply exactly:
"I couldn't find this in your indexed files."

Context:

${context}

Question:
${question}

Answer:
`;
}