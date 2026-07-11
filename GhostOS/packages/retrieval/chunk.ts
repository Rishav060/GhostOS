import { v4 as uuidv4 } from "uuid";
import { Chunk } from "./types";

const CHUNK_SIZE = 400;
const CHUNK_OVERLAP = 100;

export function chunkText(
  text: string,
  file: string,
  page: number
): Chunk[] {
  const words = text.trim().split(/\s+/);

  if (words.length === 0) {
    return [];
  }

  const chunks: Chunk[] = [];
  let start = 0;

  while (start < words.length) {
    const end = Math.min(start + CHUNK_SIZE, words.length);

    const chunkText = words.slice(start, end).join(" ");

    chunks.push({
      id: uuidv4(),
      text: chunkText,
      file,
      page,
    });

    start += CHUNK_SIZE - CHUNK_OVERLAP;
  }

  return chunks;
}