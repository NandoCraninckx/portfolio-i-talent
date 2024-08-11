import React from "react";
import "./About.css";
import pictureNando from "../../assets/PictureNando.jpg";

const About = () => {
    return(
        <section className="about section" id="about">
            <div className="about-container container grid">
                <div className="about-content grid">
                    <h1 className="section-title">Over</h1>
                    <img src={pictureNando} alt="foto Nando" className="about-pictureNando" />
                    <p className="about-paragraph">
                        Mijn naam is Nando Craninckx en momenteel ben ik bezig aan het laatste jaar van een professionele bachelor in de Toegepaste Informatica (Switch2IT) aan PXL Hasselt. 
                        Dit is een traject dat specifiek ontworpen is voor mensen die werken en studeren willen combineren. Hierdoor ging ik de afgelopen drie jaar elke donderdag naar de les en 
                        werkte in de andere dagen als commercieel medewerker bij Bpost. Ondertussen mag ik mij na een succesvolle stageperdiode bij de integratie-experten van Dots & Arrows,
                        Integration Developer noemen.
                    </p>
                    <p className="about-paragraph">
                        In mijn vrije tijd maak ik graag hiketochten en ontdek ik de wereld door te reizen, wat jammer genoeg de laatste jaren op een laag pitje is gevallen. Verder kan je me ook altijd 
                        warm maken voor een padel en squash wedstrijd of een fietstocht met de koersfiets. Sinds enkel maanden mag ik me een trotse papa noemen van een dochter, Pauline. Voor uitstapjes
                        met haar en mijn vriendin, Ine ben ik natuurlijk ook altijd te vinden.
                    </p>
                    <p className="about-paragraph">
                        Waarom de stap maken om terug te gaan studeren, vraagt u zich wellicht af. Wel dit heeft twee redenen. De meest voor de hand liggende is natuurlijk 
                        omdat mijn interesses altijd al in de IT-sector lagen. Tot op heden heb ik hiermee nooit iets gedaan maar “de goesting” hiervoor werd steeds groter. De tweede reden, 
                        die mij helemaal over de streep heeft getrokken, is het besef die ik tijdens de corona pandemie heb gekregen. Het besef dat mijn huidige job niet datgene is wat 
                        ik wil doen tot het einde van mijn carrière. Ook het besef en de spijt dat ik vroeger als jong volwassene mijn studies aan het hoger onderwijs niet heb afgemaakt. 
                        Dit zorgt voor een grote stimulans en motivatie voor mij om met mijn professionele en persoonlijke ontwikkeling een andere weg in te slaan. 
                    </p>
                    <p className="about-paragraph">
                        Ondertussen heb ik me reeds heb kunnen verdiepen in allerhande programmeertalen zoals HTML, CSS, Javascript (Vue.js en Angular), PHP, Java, C#, Flutter, Python en SQL.
                        Ook heb ik al ervaring opgedaan met de besturingssystemen Linux en Windows. Natuurlijk zijn MS Office, Docker en Git mij ook niet vreemd. 
                    </p>
                    <p className="about-paragraph">
                        Mij continu blijven bijscholen en het kunnen verbeteren van mijn vaardigheden schrikt mij zeker niet af. Daarom is het vak I-Talent dat een student aanzet en motiveert om zichzelf
                        verder te ontplooien een fijn iets. In dat kader ben ik dan op zoek gegaan naar drie projecten die mij enderzijds een nieuwe uitdagen geven en anderzijds bijdragen aan 
                        mijn verdere ontplooiing in de IT-wereld.
                    </p>
                </div> 
            </div>
        </section>  
    );
};

export default About;