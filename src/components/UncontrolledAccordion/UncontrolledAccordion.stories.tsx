import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import {UncontrolledAccordion} from "./UncontrolledAccordion";

export default {
    title: "UncontrolledAccordion stories",
    component: UncontrolledAccordion,
}

const callback = action("UncontrolledAccordion clicked")

export const AccordionModeChanging = () => {
    return <UncontrolledAccordion titleValue={"Menu"}/>
}















