import React from "react";
import ReactDOM from "react-dom/client";

// React element
const heading = React.createElement("h1", {}, "Namaste");

// Non-React DOM manipulation (optional, separate from React)
const m = document.createElement("h1");
m.innerHTML = "Hello";
document.getElementById("k").appendChild(m); // Works outside React

// Combine React children correctly
const cont = React.createElement("div", {}, [
  heading,
  React.createElement("h1", {}, "Hello (React)"),
]);

// Render React elements
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(cont);
console.log("Hello ");