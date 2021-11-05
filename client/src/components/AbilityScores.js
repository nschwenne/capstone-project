import React, { useState } from "react"

function AbilityScores(character) {
    const [strength, setStrength] = useState("")
    const [dexterity, setDexterity] = useState("")
    const [constitution, setConstitution] = useState("")
    const [intelligence, setIntelligence] = useState("")
    const [wisdom, setWisdom] = useState("")
    const [charisma, setCharisma] = useState("")

return (
    <div>
        <div className="abilityscores">
        
            <input 
                type="number"
                id="strength"
                value={strength}
                onChange={(e) => setStrength(e.target.value)}
                />
                <label htmlFor="strength">Strength </label>
        </div>
        
        <div className="abilityscores">
       
        <input 
                type="number"
                id="dexterity"
                value={dexterity}
                onChange={(e) => setDexterity(e.target.value)}
                />
                 <label htmlFor="dexterity">Dexterity </label>
        </div>
        
        <div className="abilityscores">
        
        <input 
                type="number"
                id="constitution"
                value={constitution}
                onChange={(e) => setConstitution(e.target.value)}
                />
                <label htmlFor="constitution">Constitution </label>
        </div>
        
        <div className="abilityscores">
        
        <input 
                type="number"
                id="intelligence"
                value={intelligence}
                onChange={(e) => setIntelligence(e.target.value)}
                />
                <label htmlFor="intelligence">Intelligence </label>
        </div>
        
        <div className="abilityscores">
        
        <input 
                type="number"
                id="wisdom"
                value={wisdom}
                onChange={(e) => setWisdom(e.target.value)}
                />
                <label htmlFor="wisdom">Wisdom </label>
        </div>
       <div className="abilityscores">
       
        <input 
                type="number"
                id="charisma"
                value={charisma}
                onChange={(e) => setCharisma(e.target.value)}
                />
                <label htmlFor="charisma">Charisma </label>
       </div>

    </div>
)


}

export default AbilityScores