import React, { useState } from 'react'
import DrinkCards from './DrinkCards'
import NavBar from "./NavBar"

const Drinks = () => {
    const [text, setText] = useState("")

    return (
        <>
        <NavBar text={text} setText={setText}/>
        <DrinkCards text={text}/>
        </>
    )
}

export default Drinks