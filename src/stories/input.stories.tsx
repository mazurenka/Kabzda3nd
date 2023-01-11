import {ChangeEvent, useRef, useState} from "react";

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
    debugger
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }
    debugger
    return <input value={parentValue} onChange={onChange}/>

}

export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(true)
    debugger
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }
    debugger
    return <input type={'checkbox'} checked={parentValue} onChange={onChange}/>

}

export const ControlledSelect = () => {

    const [parentValue, setParentValue] = useState<string | undefined>("2")
    debugger
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }
    debugger
    return <select value={parentValue} onChange={onChange}>
        <option>none</option>
        <option value={"1"}>London</option>
        <option value={"2"}>NewYork</option>
        <option value={"3"}>Sydney</option>
    </select>

}


export const ControlledInputWithFixedValue = () => <input value={"type here"}/>











