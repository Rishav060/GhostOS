export interface RetrievedChunk {
  id: string;
  file: string;
  page?: number;
  text: string;
  score?: number;
}

export interface AIResponse {
  answer: string;
  sources: string[];
}