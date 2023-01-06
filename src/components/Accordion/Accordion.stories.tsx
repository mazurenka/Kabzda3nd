import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";

export default {
    title: "Accordion stories",
    component: Accordion,
}

const callback = action("accordion clicked")

export const CollapsedMode = () => <Accordion
    collapsed={true}
    onChange={callback}
    titleValue={"Menu"}/>
export const UncollapsedMode = () => <Accordion
    collapsed={false}
    onChange={callback}
    titleValue={"Menu"}/>
export const AccordionModeChanging = () => {
    const [value, setValue] = useState<boolean>(false)
    return <Accordion
        collapsed={value}
        onChange={() => setValue(!value)}
        titleValue={"Menu"}
    />
}















