import React from "react";
import "./Home.css";
import logo from "../../assets/output-onlinepngtools.png"

const Home = () => {
  return (
    <section className="home section" id="home">
        <div className="home__container container grid">
            <div className="home__content grid">
                <img className="home__logo" src={logo} alt="logo"/>
                <h1 className="home__title">Nando Craninckx</h1>
                <p className="home__line"></p>
                <h3 className="home__subtitle">Student Bachelor Toegepaste Informatica</h3>
            </div>
        </div>
    </section>
  );
};
export default Home;