function Cat({name}) {
    return (
        <>
            <h1>The cat's name is {name}</h1>
            <p>He's good.</p>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Cat name="Jungle"/>);
