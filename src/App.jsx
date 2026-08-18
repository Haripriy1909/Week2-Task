import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import TodoPage from "./pages/TodoPage.jsx";
import About from "./pages/About.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/todo" element={<TodoPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
