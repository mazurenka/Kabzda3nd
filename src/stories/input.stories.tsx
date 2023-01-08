import {useState} from "react";

export default {
    title: "input",
    //component: Input
}

export const UncontrolledInput = () => <input/>

export const TrackValueUncontrolledInput = () => {
    const [value, setValue] = useState("")
    return <><input onChange={(event) => {
        const actualValue = event.currentTarget.value
        setValue(actualValue)
    }}/> - {value}</>
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState("")

    return <> <input/> <button>save</button> - actual value {value} </>
}


export const ControlledInputWithFixedValue = () => <input value={"type here"}/>











