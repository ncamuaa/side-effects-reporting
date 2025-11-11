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
          <code>scrollIntoView()</code> lets you scroll smoothly to any section on the page
          using <code>useRef()</code>. It’s great for page navigation or guided tutorials.
        </p>

        <ul>
          <li>🎯 <b>useRef:</b> References a DOM element.</li>
          <li>🚀 <b>scrollIntoView:</b> Scrolls smoothly to that element.</li>
          <li>💡 <b>Use it for:</b> Navigation menus or “Jump to section”.</li>
        </ul>

        <div className="scroll-buttons">
          <button onClick={() => scrollToSection(section1Ref)}>Go to Section 1</button>
          <button onClick={() => scrollToSection(section2Ref)}>Go to Section 2</button>
          <button onClick={() => scrollToSection(section3Ref)}>Go to Section 3</button>
        </div>
      </div>

      <section ref={section1Ref} className="scroll-section section1">
        <h3>🌅 Section 1: Introduction</h3>
        <p>This is the first section — useRef() helps React remember this part of the page.</p>
      </section>

      <section ref={section2Ref} className="scroll-section section2">
        <h3>⚙️ Section 2: Mechanics</h3>
        <p>
          scrollIntoView() automatically scrolls this section into view smoothly when
          triggered.
        </p>
      </section>

      <section ref={section3Ref} className="scroll-section section3">
        <h3>🎯 Section 3: Application</h3>
        <p>
          You can use this for tutorials, onboarding screens, or navigation shortcuts.
        </p>
      </section>
    </div>
  );
}
