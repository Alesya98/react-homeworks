import { NavLink, Route, Routes } from "react-router";
import "./App.css";
import Props from "./Props";
import State from "./State";
import Home from "./Home";
import LifeCycle from "./LifeCycle";
import Events from "./Events";
import Refs from "./Refs";
import Memo from "./Memo";
import Context from "./Context";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import ThemeToggle from "./ThemeToogle";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`app ${theme}`}>
      <div className="upp">
        <a href="#" className="logo" >
          <img src="../public/logo.png" alt="Logo" width="50px" height="50px" loading="lazy"/>
        </a>
        
        <nav>
          <NavLink to="/home">Home</NavLink> \
          <NavLink to="/props">Props</NavLink>\
          <NavLink to="/state">State</NavLink> \
          <NavLink to="/life">LifeCycle</NavLink> \
          <NavLink to="/events">Events</NavLink> \
          <NavLink to="/refs">Key,Refs</NavLink> \
          <NavLink to="/memo">Оптимизация</NavLink> \
          <NavLink to="/context">Context</NavLink>
        </nav>
        <ThemeToggle />
      </div>
      <div className="down">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/props" element={<Props />} />
          <Route path="/state" element={<State />} />
          <Route path="/life" element={<LifeCycle />} />
          <Route path="/events" element={<Events />} />
          <Route path="/refs" element={<Refs />} />
          <Route path="/memo" element={<Memo />} />
          <Route path="/context" element={<Context />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
