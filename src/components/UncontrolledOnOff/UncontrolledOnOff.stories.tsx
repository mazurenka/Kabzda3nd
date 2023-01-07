import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import {UncontrolledOnOff} from "./UncontrolledOnOff";

export default {
    title: "UncontrolledOnOff stories",
    component: UncontrolledOnOff,
}

const callback = action("on or off clicked")

export const OnMode = () => <UncontrolledOnOff />
export const OffMode = () => <UncontrolledOnOff />

export const OnOffModeChanging = () => {
    const [value, setValue] = useState<boolean>(false)
    return <UncontrolledOnOff />
}















