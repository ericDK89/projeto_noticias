import Header from "../../components/Header";
import Home from "../../components/Home";
import Add from "../../components/Add";
import Edit from "../../components/Edit";
import Footer from "../../components/Footer";
import { Routes, Route } from "react-router-dom";
import "./global.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
