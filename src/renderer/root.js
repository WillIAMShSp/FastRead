import { createRoot } from "react-dom/client";
import App from "./App";

const domNode = document.getElementById("react-root");
const root = createRoot(domNode);

root.render(<App createNotebook={filesystem.createNotebook} />);
