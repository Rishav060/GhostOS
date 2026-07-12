import { askAI } from "./chat";
import { RetrievedChunk } from "./types";

import { buildIndex } from "../retrieval/index";
import { retrieve } from "../retrieval/search";

async function main() {

    // Step 1: Build the vector index
    await buildIndex("./sample-data");

    const question = "What is my salary?";

    // Step 2: Retrieve relevant chunks
    const chunks = await retrieve(question);

    // Step 3: Ask the LLM
    const response = await askAI(
        question,
        chunks as RetrievedChunk[]
    );

    console.log("\n===== AI Response =====");
    console.log(response);
}

main();