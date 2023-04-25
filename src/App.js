import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Home } from "./screens/Home/Home";
import { About } from "./screens/About/About";
import { useEffect } from "react";
import { Skills } from "./screens/Skills/Skills";
import { ContactMe } from "./screens/ContactMe/ContactMe";
import { FirstScreen } from "./screens/FirstScreen/FirstScreen";
import {
  ProjectsScreen,
  SecoundScreen,
} from "./screens/ProjectsScreen/ProjectsScreen";
import { Navigation } from "./navigation/navigation";
import { VariantsBox } from "./components/variantsBox/VariantsBox";

function App() {
  const scroll = () => {
    let pixelsFromTop = window.scrollY;
    let documentHeight = document.body.clientHeight;
    let windowHeight = window.innerHeight;
    let difference = documentHeight - windowHeight;
    let percentage = (100 * pixelsFromTop) / difference;
    document.getElementById("bar").style.width = `${percentage}%`;
  };

  useEffect(() => {
    window.addEventListener("scroll", scroll);
    return () => window.removeEventListener("scroll", scroll);
  });
  return (
    <>
      <div className="progress_wrapper">
        <div className="progress_bar" id="bar" />
      </div>
      <Header />
      <Navigation />
    </>
  );
}

export default App;
