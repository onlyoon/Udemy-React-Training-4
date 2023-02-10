import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ReactModal from 'react-modal';
import App from "./App";

ReactModal.setAppElement('#root');

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
