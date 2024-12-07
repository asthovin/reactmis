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
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(cont);
// console.log("Hello ");

const h1 = React.createElement("h1", {}, "Heading1");
const h2 = React.createElement("h1", {}, "Heading2");
const h3 = React.createElement("h1", {}, "Heading3");

const jx = (
  <div>
    <h1>Heading1 of jsx</h1>
    <h1>Heading2 of jsx</h1>
    <h1>Heading3 of jsx</h1>
  </div>
);

const Fc = () => {
  return (
    <div>
      <h1>Heading1 of jsxx</h1>
      <h1>Heading2 of jsxx</h1>
      <h1>Heading3 of jsxx</h1>
    </div>
  );
};


const Fcv = () => {
  return (
    <div>
      <Fc/>
      <h2>Heading1 of jsxx</h2>
      <h2>Heading2 of jsxx</h2>
      <h2>Heading3 of jsxx</h2>
    </div>
  );
};





const cdiv = React.createElement("div", {}, [h1, h2, h3]);

const root = ReactDOM.createRoot(document.getElementById("k"));
root.render([cdiv, jx, <Fcv />]);
