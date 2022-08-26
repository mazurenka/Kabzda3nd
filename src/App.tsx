import React from 'react';
import './App.css';
import {Accordion} from './components/Accordion/Accordion';
import {Rating} from "./components/Rating/Rating";

function hello() {
    alert('Hello')
}

hello()

function App() {
    console.log('App rendering')

    return (
        <div>
            <AppTitle/>
            <Rating value={3}/>
            <Accordion/>
            <Rating value={4}/>
        </div>
    );
}

function AppTitle() {
    return (
        <div>This is App component</div>
    )
}





export default App;
