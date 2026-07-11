export interface Chunk {
  id: string;
  text: string;
  file: string;
  page: number;
}

export interface EmbeddedChunk extends Chunk {
  embedding: number[];
}

export interface SearchResult {
  id: string;
  file: string;
  page: number;
  score: number;
  text: string;
  preview: string;
}