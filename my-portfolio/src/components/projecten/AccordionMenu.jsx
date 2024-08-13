import React, { useState } from "react";
import "./AccordionMenu.css";
import AccordionItem from "./AccordionItem";

const AccordionMenu = () => {
    const [isActive, setIsActive] = useState(0);

    const handleClick = (accordionClick) => {
        setIsActive(accordionClick === isActive ? null : accordionClick);
    };

    return(
        <section className="accordionMenu section" id="accordionMenu">
            <div className="accordionMenu-container container grid">
                <div className="accordionMenu-content grid">
                    <h1 className="accordion-title">Projecten </h1>
                    <div className="accordion-items-container">
                        <div className="accordion-items">
                            <AccordionItem title="Project 1: Portfolio Website"
                                content= {
                                    <div>
                                        <h2 className="accordion-subtitle">Kern</h2>
                                        <p className= "content-paragraph">
                                        Als eerste project is ervoor gekozen om het vereiste portfolio van dit opleidingsonderdeel te maken in de vorm van een website. 
                                        Omdat er tijdens de opleiding geen aandacht wordt gelegd op React, wilde ik met dit de website maken en ontdekken waarom het een zo populaire gekozen programmeertaal is.  
                                        </p>
                                        <p className= "content-paragraph">
                                        Omdat ik deze website op termijn misschien ook wil gebruiken voor persoonlijk gebruik is er goed gedacht over de uitstraling en feeling van de site.
                                        
                                        Maar ook dat deze doorheen de jaren makkelijk uitbreidbaar is. 
                                        Het persoonlijke karakter van de site wordt versterkt door het zelf ontworpen logo op de homepagina van de website. Deze is gebaseerd op mijn eigen initialen. 
                                        </p>
                                        <h2 className="accordion-subtitle">Reflectie</h2>
                                        <button className="content-button">
                                            <a className="a-link" href="https://github.com/NandoCraninckx/portfolio-i-talent" target="_blank" rel="noopener noreferrer">
                                                Code Github
                                            </a>
                                        </button>
                                    </div>
                                }
                                isActive={isActive === 1}
                                onClick={() => handleClick(1)}/>
                                
                                <AccordionItem title="Project 2: Game ontwikkeld met Godot"
                                content= {
                                    <div>
                                        <p className="content-paragraph">

                                        </p>
                                        <button className="content-button">
                                            <a className="a-link" href="https://github.com/NandoCraninckx/rpg-game-godot" target="_blank" rel="noopener noreferrer">
                                                Code Github
                                            </a>
                                        </button>
                                    </div>
                                }
                                isActive={isActive === 2}
                                onClick={() => handleClick(2)}/>

                                <AccordionItem title="Project 3: Certified MuleSoft Developer"
                                content= {
                                    <div>
                                        <p className="content-paragraph">

                                        </p>
                                        <button className="content-button" >
                                            <a className="a-link" href="https://github.com/NandoCraninckx/exercises-mulesoft" target="_blank" rel="noopener noreferrer">
                                                Code GitHub
                                            </a>
                                        </button>
                                    </div> 
                                }
                                isActive={isActive === 3}
                                onClick={() => handleClick(3)}/>
                        </div>                        
                    </div>
                </div> 
            </div>
        </section> 
    );
};

export default AccordionMenu;