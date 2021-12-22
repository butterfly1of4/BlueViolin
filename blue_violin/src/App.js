import './App.css';
import ViolnLanding from "./components/ViolinLanding/ViolinLanding";
import DevLanding from "./components/DevLanding/DevLanding";
import LandingNavbar from "./components/LandingNavbar/LandingNavbar"
import LandingPage from "./components/LandingPage/LandingPage"
import {Route, Link, Switch } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <LandingNavbar />
      <LandingPage />
        <ViolnLanding />
        <DevLanding />

    </div>
  );
}

export default App;
