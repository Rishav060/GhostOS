import fs from "fs";
import path from "path";

import { chunkText } from "./chunk";
import { generateEmbedding } from "./embedding";
import { EmbeddedChunk } from "./types";
import { retrieve } from "./search";
import { readFileContent } from "./fileReader";

const index: EmbeddedChunk[] = [];

export async function buildIndex(folderPath: string) {
  const files = fs.readdirSync(folderPath);

  for (const file of files) {
    const filePath = path.join(folderPath, file);

    try {
      const text = await readFileContent(filePath);

      const chunks = chunkText(text, file, 1);

      for (const chunk of chunks) {
        const embedding = await generateEmbedding(chunk.text);

        index.push({
          ...chunk,
          embedding,
        });
      }
    } catch (error) {
      console.log(`Skipping unsupported file: ${file}`);
    }
  }

  console.log(`Indexed ${index.length} chunks`);
}

export function getIndex() {
  return index;
}

