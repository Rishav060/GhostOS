import ollama from "ollama";

export class OllamaService {
  private readonly model = "llama3.2:3b";

  async generate(prompt: string): Promise<string> {
    try {
      const response = await ollama.chat({
        model: this.model,
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
      });

      return response.message.content;
    } catch (error) {
      console.error("Ollama Error:", error);
      throw new Error("Failed to generate response.");
    }
  }
}