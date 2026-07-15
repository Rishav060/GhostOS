import { OllamaService } from "./model";
import { buildPrompt } from "./prompt";
import { RetrievedChunk, AIResponse } from "./types";

const llm = new OllamaService();

export async function askAI(
  question: string,
  chunks: RetrievedChunk[]
): Promise<AIResponse> {

  if (chunks.length === 0) {
    return {
      answer: "I couldn't find this in your indexed files.",
      sources: [],
    };
  }

  const prompt = buildPrompt(question, chunks);

  const answer = await llm.generate(prompt);

 return {
    answer: answer.trim(),
    sources: [...new Set(chunks.map(c => c.file))]
};
}