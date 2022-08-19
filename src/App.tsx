import React from 'react';
import './App.css';

function Hello() {
    alert('Hello')
}

Hello()

function App() {
    console.log('App rendering')

    return (
        <div>
            <AppTitle/>
            <Rating/>
            <Accordion/>
            <Rating/>
        </div>
    );
}

function AppTitle() {
    return (
        <>This is App component</>
    )
}

function Rating() {
    console.log('Rating rendering')
    return (
        <div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>
    )
}

function Star() {
    console.log('Star rendering')
    return (
        <div>star</div>
    )
}

function Accordion() {
    console.log('Accordion rendering')
    return (
        <div>
            <AccordionTitle/>
            <AccordionBody/>
        </div>
    )
}

function AccordionTitle() {
    return (
        <h3>Menu</h3>
    )
}

function AccordionBody() {
    return (
        <div>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </div>

    )
}

export default App;
