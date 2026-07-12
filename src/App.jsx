import { useState } from "react";
import "./App.css";

import Sidebar from "./components/Sidebar/Sidebar";
import Welcome from "./components/Welcome/Welcome";
import Chat from "./components/Chat/Chat";

function App() {
  const [screen, setScreen] = useState("welcome");
  const [indexing, setIndexing] = useState(false);

  const handleFolderSelect = () => {
    setIndexing(true);

    // Later this will call the backend API
    setTimeout(() => {
      setIndexing(false);
      setScreen("chat");
    }, 3000);
  };

  return (
    <div className="app">
      {screen === "welcome" ? (
        <Welcome indexing={indexing} onFolderSelect={handleFolderSelect} />
      ) : (
        <div className="dashboard">
          <Sidebar />

          <div className="main-content">
            <Chat />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
