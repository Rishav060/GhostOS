GhostOS
GhostOS is an AI-powered operating system project built during a hackathon. It aims to provide intelligent document understanding and retrieval using semantic search.

Features
Read documents from multiple formats
TXT
Markdown (.md)
PDF
DOCX
Split documents into chunks
Generate embeddings using Hugging Face MiniLM
Perform semantic search using cosine similarity
Project Structure
packages/
└── retrieval/
    ├── chunk.ts
    ├── demo.ts
    ├── embedding.ts
    ├── fileReader.ts
    ├── index.ts
    ├── search.ts
    └── types.ts
Installation
npm install
Run
npm run start
Tech Stack
TypeScript
Node.js
Hugging Face Transformers
pdf-parse
mammoth
Status
🚧 Hackathon Project (Work in Progress)
