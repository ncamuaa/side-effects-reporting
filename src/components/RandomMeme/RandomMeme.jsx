import { useState, useEffect } from "react";
import "./RandomMeme.css";

export default function RandomMeme() {
  const [meme, setMeme] = useState({
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
    imageUrl: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const newMemeUrl = allMemes[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      imageUrl: newMemeUrl,
    }));
  }

  function handleChange(event) {
    const { value, name } = event.currentTarget;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <div className="meme-page">
      <h1 className="meme-title">Random Meme Generator 😆</h1>

      <div className="meme-info">
        <h2>Understanding Hooks in This Component 🧩</h2>
        <p>
          This meme generator demonstrates how <code>useState</code> and{" "}
          <code>useEffect</code> work together with randomization logic to fetch
          and render memes dynamically.
        </p>

   
        <div className="concept">
          <h4>🧠 useState</h4>
          <p>
            Tracks meme text (top and bottom captions) and current image being
            displayed.
          </p>
          <pre className="mini-code">
            <code>{`const [meme, setMeme] = useState({
  topText: "One does not simply",
  bottomText: "Walk into Mordor",
  imageUrl: "http://i.imgflip.com/1bij.jpg",
});`}</code>
          </pre>
        </div>

       
        <div className="concept">
          <h4>⚙️ useEffect</h4>
          <p>
            Fetches meme templates from the <b>ImgFlip API</b> once when the
            component first loads.
          </p>
          <pre className="mini-code">
            <code>{`useEffect(() => {
  fetch("https://api.imgflip.com/get_memes")
    .then(res => res.json())
    .then(data => setAllMemes(data.data.memes));
}, []);`}</code>
          </pre>
        </div>

        
        <div className="concept">
          <h4>🎲 Randomization</h4>
          <p>
            Picks a random meme from the fetched list each time you click the
            button.
          </p>
          <pre className="mini-code">
            <code>{`function getMemeImage() {
  const randomNumber = Math.floor(Math.random() * allMemes.length);
  const newMemeUrl = allMemes[randomNumber].url;
  setMeme(prev => ({
    ...prev,
    imageUrl: newMemeUrl
  }));
}`}</code>
          </pre>
        </div>
      </div>

     
      <div className="meme-container">
        <div className="form">
          <div className="input-group">
            <label>Top Text</label>
            <input
              type="text"
              placeholder="One does not simply"
              name="topText"
              onChange={handleChange}
              value={meme.topText}
            />
          </div>

          <div className="input-group">
            <label>Bottom Text</label>
            <input
              type="text"
              placeholder="Walk into Mordor"
              name="bottomText"
              onChange={handleChange}
              value={meme.bottomText}
            />
          </div>

          <button onClick={getMemeImage}>Get a new meme image 🖼</button>
        </div>

        <div className="meme">
          <img src={meme.imageUrl} alt="Meme" />
          <h2 className="top">{meme.topText}</h2>
          <h2 className="bottom">{meme.bottomText}</h2>
        </div>
      </div>
    </div>
  );
}

