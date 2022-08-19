import React from 'react';
import './App.css';

function Hello() {
    alert('Hello')
}

Hello()

function App() {
    debugger
    return (
        <div>
            <AppTitle/>
            <Rating/>
            <Accordion/>
        </div>
    );
}

function AppTitle() {
    return (
        <>This is App component</>
    )
}

function Rating() {
    debugger
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
    return (
        <div>star</div>
    )
}

function Accordion() {
    debugger
    return (
        <div>
            <h3>Menu</h3>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </div>
    )
}

export default App;
