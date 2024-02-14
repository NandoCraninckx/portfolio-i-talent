import React from "react";

const AccordionItem = ({title, content, isActive, onClick}) => {
    return(
        <div className={`accordion-item ${isActive ? "active" : ""}`} onClick={onClick}>
            <div className={`icon-container ${isActive ? "active" : ""}`}>
                <div className={`stroke-one ${isActive ? "active" : ""}`}></div>
                <div className="stroke-two"></div>
            </div>
            <h2 className="accordion-tile">{title}</h2>
            <p className={`accordion-content ${isActive ? "active" : ""}`}>{content}</p>
        </div>
    );
};

export default AccordionItem;