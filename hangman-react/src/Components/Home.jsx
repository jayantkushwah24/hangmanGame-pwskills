import { NavLink } from "react-router-dom";
import home from "../assets/home.png";

export function Home() {
  return (
    <div>
      <NavLink to="/playgame">
        <img
          style={{ height: "100vh", width: "90vw" }}
          src={home}
          alt="home page img"
        ></img>
      </NavLink>
    </div>
  );
}
