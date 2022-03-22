import { BrowserRouter } from "react-router-dom";

import "./scss/app.scss";
import { Header, Contents, Footer } from "./components";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Contents />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
