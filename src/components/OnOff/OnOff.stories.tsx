import React, {useState} from "react";
import {OnOff} from "./OnOff";
import {action} from "@storybook/addon-actions";

export default {
    title: "OnOff stories",
    component: OnOff,
}

const callback = action("on or off clicked")

export const OnMode = () => <OnOff on={true} onChange={callback}/>
export const OffMode = () => <OnOff on={false} onChange={callback}/>

export const OnOffModeChanging = () => {
    const [value, setValue] = useState<boolean>(false)
    return <OnOff on={value} onChange={setValue}/>
}















