import React, { useState } from "react"
import GuessBox from "./GuessBox"
import Combobox from "react-widgets/Combobox";


function Form({ items }) {
    const [searchedItem, setSearchedItem] = useState("")
    const [selectedItem, setSelectedItem] = useState("")


    const handleChange = (e) => {
        setSearchedItem(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setSelectedItem(searchedItem)
    }

    const filteredItems = (items === undefined ? "Loading" : items.filter(item => { return item.name ? (item.name.toLowerCase().includes(searchedItem.toLowerCase())) : false }))


    console.log(filteredItems)

    return (
        <div>
            <Combobox
                hideCaret
                hideEmptyPopup
                filter='contains' />
            <form onSubmit={handleSubmit}>
                <input type="text" value={searchedItem} onChange={handleChange} />
                {filteredItems.map(item => {
                    return <GuessBox key={item.id} image={item.image} name={item.name} />
                })}
                <button type="submit">Submit</button>

            </form>

        </div>
    )
}
export default Form