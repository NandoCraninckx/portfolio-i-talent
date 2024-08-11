/*import React from "react";

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

export default AccordionItem;*/

import React, { useRef, useEffect } from "react";

const AccordionItem = ({ title, content, isActive, onClick }) => {
    const contentRef = useRef(null);

    useEffect(() => {
        const updateMaxHeight = () => {
            if (isActive && contentRef.current) {
                contentRef.current.style.maxHeight = contentRef.current.scrollHeight + "px";
            } else {
                contentRef.current.style.maxHeight = "0px";
            }
        };

        window.addEventListener('resize', updateMaxHeight);

        updateMaxHeight();

        return () => {
            window.removeEventListener('resize', updateMaxHeight);
        };
    }, [isActive]);

    return (
        <div className={`accordion-item ${isActive ? "active" : ""}`} onClick={onClick}>
            <div className="accordion-tile">{title}</div>
            <div ref={contentRef} className={`accordion-content ${isActive ? "active" : ""}`}>
                {content}
            </div>
        </div>
    );
};

export default AccordionItem;