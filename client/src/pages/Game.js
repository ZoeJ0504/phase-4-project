import React, { useEffect, useState } from "react";
import { Form } from "react-router-dom";

function Game() {
    const [items, setItems] = useState([])
    const [searchedItem, setSearchedItem] = useState()
    const [selectedItem, setSelectedItem] = useState({})

    useEffect(() => {
        fetch("/items")
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    const handleChange = (e) => {
        const value = e.target.value
        setSearchedItem(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setSelectedItem(searchedItem)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={searchedItem} onChange={handleChange} />
                <button type="submit">Submit</button>
            </form>

            <h1>I am the game page</h1>
        </div>
    )
}

export default Game