import { Button } from "primereact/button";
import "./App.css";

import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css

function App() {
  return (
    <div>
      <Button label="Danger" severity="danger" />
    </div>
  );
}

export default App;
