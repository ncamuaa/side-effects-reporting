import React, { useRef, useState } from "react";
import "./Refs.css";

async function getRecipeFromChefClaude(ingredients) {
  return `# 🍝 Chef Claude's Custom Recipe

**Ingredients:**
${ingredients.map((ing) => `- ${ing}`).join("\n")}

**Instructions:**
1. Combine all ingredients with love ❤️
2. Simmer for 20 minutes.
3. Garnish and serve hot.`;
}

export default function Refs() {
  const [ingredients, setIngredients] = useState([
    "chicken",
    "all the main spices",
    "corn",
    "heavy cream",
    "pasta",
  ]);

  const [recipe, setRecipe] = useState("");
  const recipeSection = useRef(null);

  async function getRecipe() {
    const recipeMarkdown = await getRecipeFromChefClaude(ingredients);
    setRecipe(recipeMarkdown);
    recipeSection.current?.scrollIntoView({ behavior: "smooth" });
  }

  function addIngredient(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newIngredient = formData.get("ingredient");
    if (newIngredient.trim()) {
      setIngredients((prev) => [...prev, newIngredient]);
      event.target.reset();
    }
  }

  return (
    <div className="refs-page">
    
      <div className="refs-header">
        <h1 className="refs-title">useRef() in Action 🍳</h1>

        <div className="refs-explanation">
        
          <div className="refs-concepts">
            <h2>Understanding Refs & Side Effects</h2>
            <p>
              The <code>useRef()</code> hook lets you access and manipulate DOM
              elements directly — without re-rendering your component. Here’s
              what’s happening in this demo:
            </p>

            <div className="concept-list">
              <div className="concept-box">
                <h4>🧠 useState</h4>
                <p>Manages the ingredient list and recipe text.</p>
              </div>

              <div className="concept-box">
                <h4>⚙️ useRef</h4>
                <p>Stores a reference to the recipe section DOM element.</p>
              </div>

              <div className="concept-box">
                <h4>📜 scrollIntoView()</h4>
                <p>
                  Smoothly scrolls to the recipe section after generating the
                  recipe.
                </p>
              </div>
            </div>
          </div>

         
          <div className="refs-flow">
            <h3>How it works 🔁</h3>
            <ol>
              <li>👩‍🍳 Add ingredients using <code>useState()</code></li>
              <li>🎯 Click “Generate Recipe”</li>
              <li>🧾 AI creates a new recipe dynamically</li>
              <li>🪄 <code>scrollIntoView()</code> moves to the recipe area</li>
            </ol>
          </div>
        </div>
      </div>

      
      <form onSubmit={addIngredient} className="add-ingredient-form">
        <input
          type="text"
          placeholder="Add an ingredient..."
          name="ingredient"
          aria-label="Add ingredient"
        />
        <button type="submit">Add Ingredient ➕</button>
      </form>

     
      <div className="recipe-layout">
       
        <div className="ingredient-list">
          <h3>🧂 Current Ingredients</h3>
          <ul>
            {ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <button onClick={getRecipe} className="generate-btn">
            Generate Recipe 🍲
          </button>
        </div>

       
        {recipe && (
          <div ref={recipeSection} className="recipe-section">
            <h3>👨‍🍳 Chef Claude’s Recipe</h3>
            <pre>{recipe}</pre>
          </div>
        )}
      </div>
    </div>
  );
}

