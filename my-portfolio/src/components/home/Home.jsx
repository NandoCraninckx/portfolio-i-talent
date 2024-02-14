import React from "react";
import "./Home.css";
import logo from "../../assets/output-onlinepngtools.png"

const Home = () => {
  return (
    <section className="home section" id="home">
        <div className="home-container container grid">
            <div className="home-content grid">
                <img className="home-logo" src={logo} alt="logo"/>
                <h1 className="home-title">Nando Craninckx</h1>
                <p className="home-line"></p>
                <h3 className="home-subtitle">Student Bachelor Toegepaste Informatica (Switch2IT)</h3>
            </div>
        </div>
    </section>
  );
};
export default Home;