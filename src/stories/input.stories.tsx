import {ChangeEvent, useRef, useState} from "react";
import {action} from "@storybook/addon-actions";

export default {
    title: "input",
    //component: Input
}

export const UncontrolledInput = () => <input/>

export const TrackValueUncontrolledInput = () => {
    const [value, setValue] = useState("")
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const actualValue = event.currentTarget.value
        setValue(actualValue)
    }
    return <><input onChange={onChange}/> - {value}</>
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)
    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return <> <input ref={inputRef}/>
        <button onClick={save}>save</button>
        - actual value: {value} </>
}

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')

return <input value={parentValue} onChange={action('want to change')} />

}

export const ControlledCheckbox = () => {

}

export const ControlledSelect = () => {

}


export const ControlledInputWithFixedValue = () => <input value={"type here"}/>











