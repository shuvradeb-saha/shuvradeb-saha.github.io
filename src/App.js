import { HashRouter } from "react-router-dom";
import "./scss/app.scss";
import { Header, Contents, Footer, ThemeToggle, TechEffects } from "./components";

function App() {
  return (
    <div className="App">
      {/* Tech-inspired animated dots for dark theme */}
      <div className="tech-dots"></div>
      
      <Header />
      <HashRouter>
        <Contents />
      </HashRouter>
      <Footer />
      <ThemeToggle />
      <TechEffects />
    </div>
  );
}

export default App;
