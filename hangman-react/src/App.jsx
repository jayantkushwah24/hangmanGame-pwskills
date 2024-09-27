import { NavLink, Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home";
import { PlayGame } from "./Components/PlayGame";

function App() {
  return (
    <>
      <nav>
        <NavLink to="/"></NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/playgame" element={<PlayGame />} />
      </Routes>
    </>
  );
}

export default App;
