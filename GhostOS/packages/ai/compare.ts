import { retrieve } from "../retrieval/search";
import { askAI } from "../llm/chat";

export async function compareDocuments(
    first: string,
    second: string
) {

    const chunks = [
        ...(await retrieve(first)),
        ...(await retrieve(second))
    ];

    return askAI(
        `Compare these two documents.
Highlight similarities and differences.

Document A:
${first}

Document B:
${second}`,
        chunks
    );
}