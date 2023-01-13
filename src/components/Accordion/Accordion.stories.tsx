import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";

export default {
    title: "Accordion stories",
    component: Accordion,
}

const callback = action("accordion clicked")
const onClickCallback = action("some item was clicked")

export const CollapsedMode = () => <Accordion
    collapsed={true}
    onChange={callback}
    titleValue={"Menu"}
    items={[]}
    onClick={onClickCallback}
/>

export const UncollapsedMode = () => <Accordion
    collapsed={false}
    onChange={callback}
    titleValue={"Menu"}
    items={[
        {title: "Victor", value: 1},
        {title: "Valera", value: 2},
        {title: "James", value: 3},
        {title: "Marta", value: 4}
    ]}
    onClick={onClickCallback}
/>

export const AccordionModeChanging = () => {
    const [value, setValue] = useState<boolean>(false)
    return <Accordion
        collapsed={value}
        onChange={() => setValue(!value)}
        titleValue={"Menu"}
        items={[
            {title: "Victor", value: 1},
            {title: "Valera", value: 2},
            {title: "James", value: 3},
            {title: "Marta", value: 4}
        ]}
        onClick={onClickCallback}
    />
}















