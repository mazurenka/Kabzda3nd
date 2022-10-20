import React, {useState} from "react";

type RatingPropsType = {
    //value: 0 | 1 | 2 | 3 | 4 | 5
}

export function UncontrolledRating(props: RatingPropsType) {
    console.log('Rating rendering')

    let [star, setStar] = useState(false)

    return <div>
        <Star /><button onClick={() => { setStar(true) }}>1</button>
        <Star /><button onClick={() => { setStar(true) }}>2</button>
        <Star /><button onClick={() => { setStar(true) }}>3</button>
        <Star /><button onClick={() => { setStar(true) }}>4</button>
        <Star /><button onClick={() => { setStar(true) }}>5</button>
    </div>
}


type StarPropsType = {
    //selected: boolean
}

function Star(props: StarPropsType) {

    let star = false

    if (star) {
        return <span><b>star</b> </span>
    } else {
        return <span>star </span>
    }
}
