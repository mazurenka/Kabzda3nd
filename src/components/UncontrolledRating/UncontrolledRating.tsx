import React, {useState} from "react";

type RatingPropsType = {
    //value: 0 | 1 | 2 | 3 | 4 | 5
}

export function UncontrolledRating(props: RatingPropsType) {
    console.log('Rating rendering')

    let [value, setValue] = useState(0)

    return <div>
        <Star selected={value > 0} setValue={() => { setValue(1) }}/>
        <Star selected={value > 1} setValue={() => { setValue(2) }}/>
        <Star selected={value > 2} setValue={() => { setValue(3) }}/>
        <Star selected={value > 3} setValue={() => { setValue(4) }}/>
        <Star selected={value > 4} setValue={() => { setValue(5) }}/>
    </div>
}

type ValueType = {
    value: 1 | 2 | 3 | 4 | 5
}

type StarPropsType = {
    selected: boolean
    setValue: () => void
}

function Star(props: StarPropsType) {

    /* if (props.selected) {
         return <span><b>star</b> </span>
     } else {
         return <span>star </span>
     }*/

    /*return props.selected ? <span><b>star</b> </span> : <span>star </span>*/

    return <span onClick={() => {props.setValue()}}>
        {props.selected ? <b>star </b> : "star "}
    </span>
}
