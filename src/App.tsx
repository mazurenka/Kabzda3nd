import React from 'react';
import './App.css';
import { Accordion } from './components/Accordion/Accordion';

function hello() {
    alert('Hello')
}

hello()

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





export default App;
