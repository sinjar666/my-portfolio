
import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import "./styles/index.css";
import "./styles/inline-fixes.scss";
import "./styles/sections.scss";

createRoot(document.getElementById("root")!).render(<App />);
  