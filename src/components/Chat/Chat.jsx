import { useState } from "react";
import { Send } from "lucide-react";
import "./Chat.css";
import { motion } from "framer-motion";

import Message from "../Message/Message";

function Chat() {
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "👋 Welcome to GhostOS! Ask me anything about your indexed documents.",
      sources: [],
    },
  ]);

  const [question, setQuestion] = useState("");

  const sendMessage = () => {
    if (!question.trim()) return;

    const userMessage = {
      sender: "user",
      text: question,
    };

    const aiMessage = {
      sender: "ai",
      text: `Here's a sample answer for "${question}". Later, this response will come from the backend AI.`,
      sources: ["MachineLearning.pdf", "LectureNotes.docx"],
    };

    setMessages((prev) => [...prev, userMessage, aiMessage]);
    setQuestion("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <motion.div
      className="chat"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="chat-top">
        <div>
          <h2>GhostOS Assistant</h2>
          <p>Ask questions about your documents</p>
        </div>

        <span className="status-badge">✓ Indexed</span>
      </div>

      <div className="messages">
        {messages.map((msg, index) => (
          <Message
            key={index}
            sender={msg.sender}
            text={msg.text}
            sources={msg.sources}
          />
        ))}
      </div>

      <div className="chat-input">
        <input
          type="text"
          placeholder="Ask GhostOS anything..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        <button onClick={sendMessage}>
          <Send size={18} />
        </button>
      </div>
    </motion.div>
  );
}

export default Chat;
