import React from "react";

export function Accordion() {
    console.log('Accordion rendering')
    return (
        <div>
            <AccordionTitle/>
            <AccordionBody/>
        </div>
    )
}

function AccordionTitle() {
    console.log('AccordionTitle rendering')
    return (
        <h3>Menu</h3>
    )
}

function AccordionBody() {
    console.log('AccordionBody rendering')
    return (
        <div>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </div>

    )
}