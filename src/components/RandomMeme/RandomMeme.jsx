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
        <h2>What’s happening here?</h2>
        <p>
          This meme generator uses <code>useState</code> to manage meme data and{" "}
          <code>useEffect</code> to fetch meme templates from an API only once
          when the component loads.
        </p>
        <ul>
          <li>
            🧠 <strong>useState:</strong> Tracks meme text and image
          </li>
          <li>
            ⚙️ <strong>useEffect:</strong> Fetches memes from the API
          </li>
          <li>
            🎲 <strong>Randomization:</strong> Picks a random meme image on click
          </li>
        </ul>
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
