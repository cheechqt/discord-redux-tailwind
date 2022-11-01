import { Route, Routes } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
    </Routes>
  );
}

export default App;
