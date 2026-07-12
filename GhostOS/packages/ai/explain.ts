import { retrieve } from "../retrieval/search";
import { askAI } from "../llm/chat";

export async function explainDocument(topic: string) {

    const chunks = await retrieve(topic);

    return askAI(
        `Explain the following document in simple language for a beginner:\n\n${topic}`,
        chunks
    );
}