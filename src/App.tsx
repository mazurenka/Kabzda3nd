import React from 'react';
import './App.css';
import {Accordion} from './components/Accordion/Accordion';
import {OnOff} from './components/OnOff/OnOff';
import {Rating} from "./components/Rating/Rating";

function hello() {
    alert('Hello')
}

hello()

function App() {
    console.log('App rendering')

    return (
        <div>
            <PageTitle title={"This is App component"}/>
            <PageTitle title={"Users"}/>

            <Accordion titleValue={"Menu"} collapsed={false}/>
            <Accordion titleValue={"Users"} collapsed={true}/>

            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>

            <OnOff />
            {/*<OnOff on={true}/>
            <OnOff on={false}/>*/}


        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    debugger
    return (
        <h1>{props.title}</h1>
    )
}


export default App;
