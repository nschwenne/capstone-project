import React, { useState } from "react";

function SkillModifier( {name, score, level} ) {
    const [isChecked, setIsChecked] = useState(false);

    const x = Math.floor((score-10)/2)

    function addProf() {
        const x = (Math.floor((score-10)/2) + (Math.ceil(level/4) + 1))
    }

    const handleOnChange= () => {
        setIsChecked(!isChecked);
        console.log(isChecked)
    }

    return (
        <div>
            
            <label htmlFor={name}>{name}</label>
            <input 
            id={name}
            type="checkbox"
            onChange={addProf()}
            value={name}
            checked={isChecked}
            onChange={handleOnChange}
            >
            </input>
            
            <label htmlFor="expertise:">(X2)</label>
            <input 
            className="expertise"
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

export default SkillModifier;

