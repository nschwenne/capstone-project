import React, { useState } from "react"

function AbilityScores(character) {
    const [strength, setStrength] = useState()
    const [dexterity, setDexterity] = useState()
    const [constitution, setConstitution] = useState()
    const [intelligence, setIntelligence] = useState()
    const [wisdom, setWisdom] = useState()
    const [charisma, setCharisma] = useState()

return (
    <div id="abilityscores">
        <label htmlFor="strength">Strength: </label>
            <input 
                type="number"
                id="strength"
                value={strength}
                onChange={(e) => setStrength(e.target.value)}
                />
        <br></br>
        <label htmlFor="dexterity">Dexterity: </label>
        <input 
                type="number"
                id="dexterity"
                value={dexterity}
                onChange={(e) => setDexterity(e.target.value)}
                />
        <br></br>
        <label htmlFor="constitution">Constitution: </label>
        <input 
                type="number"
                id="constitution"
                value={constitution}
                onChange={(e) => setConstitution(e.target.value)}
                />
        <br></br>
        <label htmlFor="intelligence">Intelligence: </label>
        <input 
                type="number"
                id="intelligence"
                value={intelligence}
                onChange={(e) => setIntelligence(e.target.value)}
                />
        <br></br>
        <label htmlFor="wisdom">Wisdom: </label>
        <input 
                type="number"
                id="wisdom"
                value={wisdom}
                onChange={(e) => setWisdom(e.target.value)}
                />
        <br></br>
        <label htmlFor="charisma">Charisma: </label>
        <input 
                type="number"
                id="charisma"
                value={charisma}
                onChange={(e) => setCharisma(e.target.value)}
                />

    </div>
)


}

export default AbilityScores