import "./Message.css";
import { motion } from "framer-motion";

function Message({ sender, text, sources = [] }) {
  return (
    <motion.div
      className={`message-wrapper ${sender}`}
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      <div className="avatar">{sender === "user" ? "👤" : "🤖"}</div>

      <div className="message-content">
        <div className={`bubble ${sender}`}>{text}</div>

        {sender === "ai" && sources.length > 0 && (
          <motion.div
            className="sources"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <p className="source-title">Sources</p>

            {sources.map((source, index) => (
              <div key={index} className="source-card">
                📄 {source}
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

export default Message;
