import { buildIndex } from "../retrieval";
import { retrieve } from "../retrieval/search";
import { askAI } from "../llm/chat";

let indexed = false;

export async function answerQuestion(question: string) {

    if (!indexed) {
        await buildIndex("./sample-data");
        indexed = true;
    }

    const chunks = await retrieve(question);

    return askAI(question, chunks);
}