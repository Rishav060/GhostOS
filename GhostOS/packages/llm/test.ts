import ollama from "ollama";

async function main() {

    const prompt = `
Context

Resume

Current CGPA: 9.42

Question

What is my current CGPA?

Answer:
`;

    const response = await ollama.chat({
        model: "gemma3:1b",
        messages: [
            {
                role: "user",
                content: prompt,
            },
        ],
    });

    console.log(response.message.content);

}

main();