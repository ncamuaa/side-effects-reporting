import React, { useState, useEffect } from "react";
import "./StateAndEffects.css";

export default function StateAndEffects() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showTracker, setShowTracker] = useState(true);


  useEffect(() => {
    if (!showTracker) return;

    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    console.log("✅ Tracking window width...");

    
    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("🧹 Tracker stopped (Cleanup Function).");
    };
  }, [showTracker]);

  return (
    <div className="statefx-container">
      <h1 className="title">useState & useEffect in Action ⚡</h1>

      <div className="statefx-grid">
     
        <div className="info-card">
          <h2>Understanding State & Effects</h2>
          <p>
            React’s <code>useState</code> and <code>useEffect</code> hooks let
            components respond to changes — like window resizing, API calls, or
            user actions.
          </p>

          <div className="concept-list">
           
            <div className="concept">
              <h4>🧠 useState</h4>
              <p>
                Manages dynamic values — like the <b>window width</b> that
                updates as you resize the screen.
              </p>
              <pre className="mini-code">
                <code>{`const [windowWidth, setWindowWidth] = useState(window.innerWidth)`}</code>
              </pre>
            </div>

         
            <div className="concept">
              <h4>⚙️ useEffect</h4>
              <p>
                Handles side effects — like adding and removing{" "}
                <b>event listeners</b>.
              </p>
              <pre className="mini-code">
                <code>{`useEffect(() => {
  function handleResize() {
    setWindowWidth(window.innerWidth);
  }
  window.addEventListener("resize", handleResize);
}, []);`}</code>
              </pre>
            </div>

            
            <div className="concept">
              <h4>🧹 Cleanup Function</h4>
              <p>
                Removes event listeners when the component unmounts or the
                tracker stops — preventing memory leaks.
              </p>
              <pre className="mini-code">
                <code>{`return () => {
  window.removeEventListener("resize", handleResize);
}`}</code>
              </pre>
            </div>
          </div>

          <div className="tip">
            💡 Try toggling the tracker and resizing your browser window below!
          </div>
        </div>

        <div className="demo-card">
          <button
            className="toggle-simple"
            onClick={() => setShowTracker((prev) => !prev)}
          >
            Toggle Window Tracker
          </button>

          <h2>Live Example</h2>
          <div className="demo-box">
            {showTracker ? (
              <>
                <p className="demo-text">Window width:</p>
                <h1>{windowWidth}px</h1>
              </>
            ) : (
              <p className="demo-text">Tracking paused </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
