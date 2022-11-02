import { Route, Routes } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import Main from "components/Main/Main";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/channels" element={<Main />}>
        <Route path=":id" element={<Main />} />
      </Route>
    </Routes>
  );
}

export default App;
