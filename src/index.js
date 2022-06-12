import React from "react";
import { createRoot, render } from "react-dom";
import Menu from "./components/Menu";
import data from "./data/recipes.json"

// WebPack 전에는 일단 안되는데 뭘까
const root = createRoot(document.getElementById("root"));
root.render(<Menu recipes={data} />);
