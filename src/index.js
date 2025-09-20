// import React from "react";
// import { createRoot } from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
// import App from "./App";
// import "./styles/variables.css";
// import "./styles/styles.css";

// const root = createRoot(document.getElementById("root"));
// root.render(
//     <BrowserRouter>
//         <App />
//     </BrowserRouter>
// );

import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/variables.css";
import "./styles/styles.css";
import "swiper/css"; /* Swiper base css */
import "aos/dist/aos.css";

const root = createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
