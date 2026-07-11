import fs from "fs";
import path from "path";
import pdf from "pdf-parse";
import mammoth from "mammoth";

export async function readFileContent(filePath: string): Promise<string> {
  const ext = path.extname(filePath).toLowerCase();

  switch (ext) {
    case ".txt":
    case ".md":
      return fs.readFileSync(filePath, "utf-8");

    case ".pdf": {
      const buffer = fs.readFileSync(filePath);
      const data = await pdf(buffer);

      return data.text.trim();
    }

    case ".docx": {
      const result = await mammoth.extractRawText({
        path: filePath,
      });

      return result.value.trim();
    }

    default:
      throw new Error(`Unsupported file type: ${ext}`);
  }
}