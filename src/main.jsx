import { PrimeReactProvider } from "primereact/api";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <PrimeReactProvider
    value={{
      unstyled: false,
    }}
  >
    <App />
  </PrimeReactProvider>
);
