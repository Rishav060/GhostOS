export interface Chunk {
  id: string;
  text: string;
  file: string;
  page: number;
}

export interface EmbeddedChunk extends Chunk {
  embedding: number[];
}

export interface SearchResult extends Chunk {
  score: number;
}