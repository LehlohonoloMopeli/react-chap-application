import React from "react";
import ReactDom from "react-dom";

import App from "./App"

ReactDom.render(<App />, document.getElementById("root"))   // Render our entire application <App />

// Index.js only renders App (that's its only job)
