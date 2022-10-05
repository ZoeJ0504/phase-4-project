import React from "react";
import styled from "styled-components"

function GuessBox({ image, name }) {

    console.log(image)

    return (
        <div>
            <span><ItemImg src={image} alt={name} /> {name}</span>

        </div>
    )
}

export default GuessBox

const ItemImg = styled.img`
width: 40px;
height: 40px;
`