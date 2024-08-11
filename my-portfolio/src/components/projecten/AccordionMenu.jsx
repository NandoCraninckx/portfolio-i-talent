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
                                content="Dit is mijn portfolio website. Hier kan je al mijn projecten bekijken en meer te weten komen over mij."
                                isActive={isActive === 1}
                                onClick={() => handleClick(1)}/>
                                
                                <AccordionItem title="Project 2: Game ontwikkeld met Godot"
                                content="Hier wordt nog hard aan gewerkt."
                                isActive={isActive === 2}
                                onClick={() => handleClick(2)}/>

                                <AccordionItem title="Project 3: Certified MuleSoft Developer"
                                content= {
                                    <div>
                                        <p>BLablalbla</p>
                                        <button>test</button>
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