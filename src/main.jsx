import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { DataProvider } from "./components/DataProvider/DataProvider.jsx";
import { initializeState,reducer } from "../src/components/Utility/reducer.js";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
    <DataProvider reducer={reducer} initialState={initializeState}>
      <App />
    </DataProvider>
  // </StrictMode>
);
