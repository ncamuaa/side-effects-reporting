import React, { useRef } from "react";
import "./ScrollIntoView.css";

export default function ScrollIntoViewDemo() {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="scroll-page">
      <h1 className="scroll-title">useRef() + scrollIntoView() Demo 🚀</h1>

      <div className="scroll-info">
        <h2>Understanding scrollIntoView()</h2>
        <p>
          The <code>scrollIntoView()</code> method allows smooth navigation to
          specific page sections using <code>useRef()</code> to target DOM
          elements directly.
        </p>

        {/* 🎯 useRef */}
        <div className="concept">
          <h4>🎯 useRef</h4>
          <p>References a specific DOM element for direct manipulation.</p>
          <pre className="mini-code">
            <code>{`const section1Ref = useRef(null);`}</code>
          </pre>
        </div>

        
        <div className="concept">
          <h4>🚀 scrollIntoView</h4>
          <p>Scrolls smoothly to the element referenced by useRef().</p>
          <pre className="mini-code">
            <code>{`section1Ref.current.scrollIntoView({
  behavior: "smooth"
});`}</code>
          </pre>
        </div>

        {/* 💡 Use it for */}
        <div className="concept">
          <h4>💡 Use it for</h4>
          <p>
            Great for interactive pages — like tutorials, onboarding, or
            navigation menus.
          </p>
          <pre className="mini-code">
            <code>{`<button onClick={() => scrollToSection(section1Ref)}>
  Go to Section 1
</button>`}</code>
          </pre>
        </div>

        <div className="scroll-buttons">
          <button onClick={() => scrollToSection(section1Ref)}>
            Go to Section 1
          </button>
          <button onClick={() => scrollToSection(section2Ref)}>
            Go to Section 2
          </button>
          <button onClick={() => scrollToSection(section3Ref)}>
            Go to Section 3
          </button>
        </div>
      </div>

   
      <section ref={section1Ref} className="scroll-section section1">
        <h3>🌅 Section 1: Introduction</h3>
        <p>
          The <b>useRef()</b> hook creates a persistent reference to a DOM
          element — even across re-renders.
        </p>
      </section>

      <section ref={section2Ref} className="scroll-section section2">
        <h3>⚙️ Section 2: Mechanics</h3>
        <p>
          When the button is clicked, <b>scrollIntoView()</b> scrolls smoothly
          to the element tied to that ref.
        </p>
      </section>

      <section ref={section3Ref} className="scroll-section section3">
        <h3>🎯 Section 3: Application</h3>
        <p>
          Perfect for interactive UIs, docs, or pages where users can jump to
          sections instantly.
        </p>
      </section>
    </div>
  );
}
