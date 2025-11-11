import React, { useState, useEffect } from "react";
import "./StateAndEffects.css";

export default function StateAndEffects() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    console.log("✅ Event listener added");

    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("🧹 Cleanup: listener removed");
    };
  }, []);

  return (
    <div className="statefx-container">
      <h1 className="title">useState & useEffect in Action ⚡</h1>

      <div className="statefx-grid">
       
        <div className="info-card">
          <h2>Understanding State & Effects</h2>
          <p>
            React’s <code>useState</code> and <code>useEffect</code> hooks allow
            components to respond to user actions, time, and system events.
          </p>

          <div className="concept-list">

           
            <div className="concept">
              <h4>🧠 useState</h4>
              <p>
                Manages dynamic values — like the <b>window width</b> that
                updates when you resize your screen.
              </p>
              <pre className="mini-code">
                <code>{`const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)`}</code>
              </pre>
            </div>

            
            <div className="concept">
              <h4>⚙️ useEffect</h4>
              <p>
                Handles side effects — like <b>event listeners</b>, data
                fetching, or timers.
              </p>
              <pre className="mini-code">
                <code>{`React.useEffect(() => {
  function handleResize() {
    setWindowWidth(window.innerWidth)
  }

  window.addEventListener("resize", handleResize)
}, [])`}</code>
              </pre>
            </div>

            
            <div className="concept">
              <h4>🧹 Cleanup Function</h4>
              <p>
                Ensures that old effects (like event listeners) are properly
                removed when the component unmounts.
              </p>
              <pre className="mini-code">
                <code>{`return () => {
  window.removeEventListener("resize", handleResize)
}`}</code>
              </pre>
            </div>
          </div>

          <div className="tip">
            💡 Try resizing your browser window to see the live example update!
          </div>
        </div>

        
        <div className="demo-card">
          <h2>Live Example</h2>
          <div className="demo-box">
            <p className="demo-text">Window width:</p>
            <h1>{windowWidth}px</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
