import React, { useState } from "react";

function SavingThrows( {name, score, level} ) {

const x = Math.floor((score-10)/2)

function addProf() {
    const x = (Math.floor((score-10)/2) + (Math.ceil(level/4) + 1))
}

    return (
        <div>
            
            <label htmlFor={name}>{name}</label>
            <input 
            id={name}
            type="checkbox"
            onChange={addProf()}
            value="yes"
            isSelected
            >
            </input>
            <span id="skillvalue">
                {x}
            </span>
            
            
        </div>
    )
}

export default SavingThrows;