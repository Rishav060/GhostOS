import "./Sidebar.css";

import {
  Sparkles,
  BookOpen,
  GitCompare,
  FileText,
  CheckCircle2,
} from "lucide-react";

import { motion } from "framer-motion";

function Sidebar() {
  return (
    <motion.aside
      className="sidebar"
      initial={{ x: -80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* LOGO */}

      <div className="sidebar-top">
        <h1>👻 GhostOS</h1>

        <p>AI Document Assistant</p>
      </div>

      {/* STATISTICS */}

      <div className="statistics">
        <div className="indexed">
          <CheckCircle2 size={18} />
          Indexed Successfully
        </div>

        <div className="stat-card">
          <h2>54</h2>
          <p>Documents</p>
        </div>

        <div className="stat-card">
          <h2>1234</h2>
          <p>Pages</p>
        </div>

        <div className="stat-card">
          <h2>54 MB</h2>
          <p>Total Size</p>
        </div>
      </div>

      {/* ACTION BUTTONS */}

      <div className="actions">
        <button>
          <Sparkles size={18} />
          Summarize
        </button>

        <button>
          <BookOpen size={18} />
          Explain
        </button>

        <button>
          <GitCompare size={18} />
          Compare Docs
        </button>
      </div>

      {/* FOOTER */}

      <div className="footer">
        <FileText size={18} />

        <p>GhostOS v1.0</p>

        <span>Powered by AI</span>
      </div>
    </motion.aside>
  );
}

export default Sidebar;
