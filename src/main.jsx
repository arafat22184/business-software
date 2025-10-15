import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import HomeLayout from "./layout/HomeLayout.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HomeLayout />
  </StrictMode>
);
