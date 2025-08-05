import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CalcProvider } from "../context/CalcContext.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <CalcProvider>
            <App />
        </CalcProvider>
    </StrictMode>
);
