import "./App.css";
import { BrowserRouter } from "react-router-dom";
import NavSection from "./components/navbar/NavSection";
import BodySection from "./components/BodySection";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavSection />
        <BodySection />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
