import { HashRouter } from "react-router-dom";

import "./scss/app.scss";
import { Header, Contents, Footer } from "./components";

function App() {
  return (
    <div className="App">
      <Header />
      <HashRouter>
        <Contents />
      </HashRouter>
      <Footer />
    </div>
  );
}

export default App;
