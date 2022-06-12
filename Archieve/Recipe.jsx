const data = [
    {
        name: "김치찌개",
        ingredients: [
            { name: "김치", amount: 1, measurement: "포기 kg"}
        ],
        steps: [
            "김치를 넣고 끓인다"
        ]
    }
];
function Menu({title, recipes}) {
    return (
        <article>
            <header>
                <h1>{title}</h1>
            </header>
            <div className="recipes">
                {recipes.map((recipe, i) => (
                    <Recipe
                        key={i}
                        name={recipe.name}
                        ingredients={recipe.ingredients}
                        steps={recipe.steps}
                    />
                ))}
            </div>
        </article>
    );
}
function Recipe({name, ingredients, steps}) {
    return (
        <section id={name.toLowerCase().replace(/ /g, "-")}>
            <h1>{name}</h1>
            <ul className="ingredients">
                {ingredients.map((ingredient, i) => (
                    <li key={i}>{ingredient.name}</li>
                ))}
            </ul>
            <section className="instructions">
                <h2>조리법</h2>
                {steps.map((step, i) => 
                    <p key={i}>{step}</p>
                )}
            </section>
        </section>
    );
}
ReactDOM.render(
    <Menu recipes={data} title="맛있는거"/>,
    document.getElementById("root")
);