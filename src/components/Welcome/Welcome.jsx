import "./Welcome.css";
import { FolderOpen, ShieldCheck, Zap, Bot } from "lucide-react";
import { motion } from "framer-motion";

function Welcome({ indexing, onFolderSelect }) {
  return (
    <div className="welcome-page">
      <motion.div
        className="welcome-card"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {" "}
        <div className="ghost-icon">👻</div>
        <h1>GhostOS</h1>
        <p className="subtitle">Your AI Document Assistant</p>
        <p className="description">
          Ask questions about PDFs, DOCX, TXT files, research papers and notes
          using AI.
        </p>
        {!indexing ? (
          <button className="folder-btn" onClick={onFolderSelect}>
            <FolderOpen size={20} />
            Select Folder
          </button>
        ) : (
          <>
            <div className="spinner"></div>

            <h3>Indexing Documents...</h3>

            <p>Please wait while GhostOS prepares your files.</p>
          </>
        )}
        <div className="features">
          <div className="feature">
            <ShieldCheck />
            Secure
          </div>

          <div className="feature">
            <Zap />
            Fast Indexing
          </div>

          <div className="feature">
            <Bot />
            AI Powered
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Welcome;
