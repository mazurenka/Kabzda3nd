import s from "./UncontrolledOnOff.module.css"
import {useState} from "react";

type OnOffPropsType = {
    //on: boolean
}

export const UncontrolledOnOff = (props: OnOffPropsType) => {

    let [on, setOn] = useState(false)

    let onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "5px",
        backgroundColor: on ? "green" : "white"
    }
    let offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "5px",
        marginLeft: "2px",
        backgroundColor: on ? "white" : "red"
    }
    let indicator = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: on ? "green" : "red"
    }

    return (
        <div>
            <div style={onStyle} onClick={() => {
                setOn(true)
            }}>On
            </div>
            <div style={offStyle} onClick={() => {
                setOn(false)
            }}>Off
            </div>
            <div style={indicator}></div>
        </div>
    )
}


