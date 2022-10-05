import React, { useEffect, useState } from "react";
import Form from "../components/Form";

function Game() {
    const [items, setItems] = useState([])


    useEffect(() => {
        fetch("/items")
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])





    return (
        <div>
            <Form items={items} />
            <h1>I am the game page</h1>


        </div>
    )
}

export default Game