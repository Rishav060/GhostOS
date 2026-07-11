import fs from "fs";
import path from "path";

import { chunkText } from "./chunk";
import { generateEmbedding } from "./embedding";
import { EmbeddedChunk } from "./types";
import { retrieve } from "./search";

const index: EmbeddedChunk[] = [];

export async function buildIndex(folderPath: string) {
  const files = fs.readdirSync(folderPath);

  for (const file of files) {
    const filePath = path.join(folderPath, file);

    const text = fs.readFileSync(filePath, "utf-8");

    const chunks = chunkText(text, file, 1);

    for (const chunk of chunks) {
      const embedding = await generateEmbedding(chunk.text);

      index.push({
        ...chunk,
        embedding,
      });
    }
  }

  console.log(`Indexed ${index.length} chunks`);
}

export function getIndex() {
  return index;
}

(async () => {
  await buildIndex("./sample-data");

  const results = await retrieve("Where is my internship offer?");

  console.log(results);
})();