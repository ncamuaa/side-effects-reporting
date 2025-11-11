import React, { useEffect, useState } from "react";
import "./App.css";
import StateAndEffects from "./components/StateAndEffects/StateAndEffects";
import RandomMeme from "./components/RandomMeme/RandomMeme";
import Refs from "./components/Refs/Refs";
import ScrollIntoView from "./components/ScrollIntoView/ScrollIntoView";

function App() {
  const [time, setTime] = useState("");
  const [activeComponent, setActiveComponent] = useState("state");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);


  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

 
  const renderComponent = () => {
    switch (activeComponent) {
      case "state":
        return <StateAndEffects />;
      case "meme":
        return <RandomMeme />;
      case "refs":
        return <Refs />;
      case "scroll":
        return <ScrollIntoView />;
      default:
        return <StateAndEffects />;
    }
  };

  return (
    <div className="app">
      
      <header className="header">
        <div className="hamburger" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          <div className={`bar ${isSidebarOpen ? "open" : ""}`}></div>
          <div className={`bar ${isSidebarOpen ? "open" : ""}`}></div>
          <div className={`bar ${isSidebarOpen ? "open" : ""}`}></div>
        </div>
        <h1>SIDE EFFECTS</h1>
        <p>{time}</p>
      </header>

      
      <aside className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
        <button
          className={activeComponent === "state" ? "active-btn" : ""}
          onClick={() => setActiveComponent("state")}
        >
          State and Effects
        </button>

        <button
          className={activeComponent === "meme" ? "active-btn" : ""}
          onClick={() => setActiveComponent("meme")}
        >
          Random Meme
        </button>

        <button
          className={activeComponent === "refs" ? "active-btn" : ""}
          onClick={() => setActiveComponent("refs")}
        >
          Refs
        </button>

        <button
          className={activeComponent === "scroll" ? "active-btn" : ""}
          onClick={() => setActiveComponent("scroll")}
        >
          scrollIntoView()
        </button>
      </aside>

      <main className={`content ${isSidebarOpen ? "shifted" : ""}`}>
        {renderComponent()}
      </main>
    </div>
  );
}

export default App;
