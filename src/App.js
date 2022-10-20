import { HashRouter } from "react-router-dom";

import "./scss/app.scss";
import { Header, Contents, Footer } from "./components";

function App() {
  fetch("https://reqres.in/api/users/2")
    .then((response) => response.json())
    .then((data) => console.log("Data:", data));

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
