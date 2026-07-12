import "./Sidebar.css";
import {
  Sparkles,
  BookOpen,
  GitCompare,
  FileText,
  Settings,
  CheckCircle2,
} from "lucide-react";

import { motion } from "framer-motion";

function Sidebar() {
  return (
    <motion.aside
      className="sidebar"
      initial={{ x: -80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <div className="logo">
          <h1>👻 GhostOS</h1>

          <p>Your AI Document Assistant</p>
        </div>

        <div className="section">
          <h3>Status</h3>

          <div className="status">
            <CheckCircle2 size={18} color="#22c55e" />

            <span>Indexed</span>
          </div>
        </div>

        <div className="section">
          <h3>Documents</h3>

          <div className="status">
            <FileText size={18} />

            <span>34 Files</span>
          </div>
        </div>

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
            Compare
          </button>
        </div>
      </div>

      <button className="settings">
        <Settings size={18} />
        Settings
      </button>
    </motion.aside>
  );
}

export default Sidebar;
