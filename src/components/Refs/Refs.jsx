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
      <h1 className="refs-title">useRef() in Action 🍳</h1>

      <div className="refs-info">
        <h2>Understanding Refs & Side Effects</h2>
        <p>
          The <code>useRef()</code> hook gives us a way to reference and
          interact with DOM elements directly without triggering re-renders. In
          this demo, it’s used to smoothly scroll to the generated recipe.
        </p>

        {/* 🧠 useState */}
        <div className="concept">
          <h4>🧠 useState</h4>
          <p>Manages the list of ingredients and the recipe text.</p>
          <pre className="mini-code">
            <code>{`const [ingredients, setIngredients] = useState([
  "chicken",
  "all the main spices",
  "corn",
  "heavy cream",
  "pasta"
]);

const [recipe, setRecipe] = useState("");`}</code>
          </pre>
        </div>

        {/* ⚙️ useRef */}
        <div className="concept">
          <h4>⚙️ useRef</h4>
          <p>Creates a reference to the recipe section for direct DOM access.</p>
          <pre className="mini-code">
            <code>{`const recipeSection = useRef(null);`}</code>
          </pre>
        </div>

        {/* 📜 scrollIntoView */}
        <div className="concept">
          <h4>📜 scrollIntoView()</h4>
          <p>
            Scrolls smoothly to the recipe section when a new recipe is
            generated.
          </p>
          <pre className="mini-code">
            <code>{`recipeSection.current?.scrollIntoView({
  behavior: "smooth"
});`}</code>
          </pre>
        </div>
      </div>

      {/* FORM SECTION */}
      <form onSubmit={addIngredient} className="add-ingredient-form">
        <input
          type="text"
          placeholder="Add an ingredient..."
          name="ingredient"
          aria-label="Add ingredient"
        />
        <button type="submit">Add Ingredient ➕</button>
      </form>

      {/* MAIN LAYOUT */}
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
