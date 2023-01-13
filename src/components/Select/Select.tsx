type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}

export const Select = (props: SelectPropsType) => {

    const selectedItem = props.items.find(i => i.value === props.value)

    return (
        <div>
            <select>
                <option value="">New York</option>
                <option value="">London</option>
                <option value="">Sidney</option>
            </select>
            <h3>{selectedItem && selectedItem.title}</h3>
            {props.items.map(i => <div key={i.value}>{i.title}</div>)}
        </div>
    )

}