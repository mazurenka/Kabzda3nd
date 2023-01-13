import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import {Select} from "./Select";


export default {
    title: "Select stories",
    component: Select,
}

export const WithValue = () =>
    <>
        <Select
            value={"2"}
            onChange={action("value changed")}
            items={[
                {value: "1", title: "New York"},
                {value: "2", title: "London"},
                {value: "3", title: "Sidney"},
            ]}
        />
    </>

export const WithoutValue = () =>
    <>
        <Select
            onChange={action("value changed")}
            items={[
                {value: "1", title: "New York"},
                {value: "2", title: "London"},
                {value: "3", title: "Sidney"},
            ]}
        />
    </>










