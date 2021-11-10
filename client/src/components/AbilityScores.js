import React, { useState, useEffect } from "react"
import AbilityScoreModifier from "./AbilityScoreModifier"

function AbilityScores({ character }) {
    const [abilityScores, setAbilityScores] = useState({
        strength: "",
        dexterity: "",
        constitution: "",
        intelligence: "",
        wisdom: "",
        charisma: ""
        })
    const [id, setId] = useState("")

    useEffect(() => {
            setAbilityScores({
                    strength: character.strength,
                    dexterity: character.dexterity,
                    constitution: character.constitution,
                    intelligence: character.intelligence,
                    wisdom: character.wisdom,
                    charisma: character.charisma
            })
            setId(character.id)
    }, [character])
    
    function handleSave(e) {
        e.preventDefault()
        fetch(("/characters/" + id), 
    {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
     strength: abilityScores.strength,
     dexterity: abilityScores.dexterity,
     constitution: abilityScores.constitution,
     intelligence: abilityScores.intelligence,
     wisdom: abilityScores.wisdom,
     charisma: abilityScores.charisma
    }),
    }).then(response => response.json())
    }
return (
    <div id="AbilityScores">
        <form>
                    <div id="strength">
                    <AbilityScoreModifier score={abilityScores.strength} id={"str"} />
                    <label htmlFor="strength">Strength: </label>
                    <input 
                    type="number"
                    id="strength"
                    value={abilityScores.strength}
                    onChange ={(e) => setAbilityScores({...abilityScores, strength:(e.target.value)})}
                    /> 
                    </div>
                    <br></br>
                    <div id="dexterity">
                    <AbilityScoreModifier score={abilityScores.dexterity} id={"dex"} />
                    <label htmlFor="dexterity">Dexterity: </label>
                    <input 
                    type="number"
                    id="dexterity"
                    value={abilityScores.dexterity}
                    onChange ={(e) => setAbilityScores({...abilityScores, dexterity:(e.target.value)})}
                    />
                    </div>
                    <br></br>
                    <div id="constitution">   
                    <AbilityScoreModifier score={abilityScores.constitution} id={"con"} />
                    <label htmlFor="constitution">Constitution: </label>
                    <input 
                    type="number"
                    id="constitution"
                    value={abilityScores.constitution}
                    onChange ={(e) => setAbilityScores({...abilityScores, constitution:(e.target.value)})}
                    
                    
                    />
                    </div>
                    <br></br>
                    <div id="intelligence">
                    <AbilityScoreModifier score={abilityScores.intelligence} id={"int"} />
                    <label htmlFor="intelligence">Intelligence: </label>
                    <input 
                    type="number"
                    id="intelligence"
                    value={abilityScores.intelligence}
                    onChange ={(e) => setAbilityScores({...abilityScores, intelligence:(e.target.value)})}
                    
                    
                    />
                    </div>
                    <br></br>
                    <div id="wisdom">
                    <AbilityScoreModifier score={abilityScores.wisdom} id={"wis"} />
                    <label htmlFor="wisdom">Wisdom: </label>
                    <input 
                    type="number"
                    id="wisdom"
                    value={abilityScores.wisdom}
                    onChange ={(e) => setAbilityScores({...abilityScores, wisdom:(e.target.value)})}
                    
                    
                    />
                    </div>
                    <br></br>
                    <div id="charisma">
                    <AbilityScoreModifier score={abilityScores.charisma} id={"cha"} />
                    <label htmlFor="charisma">Charisma: </label>
                    <input 
                    type="number"
                    id="charisma"
                    value={abilityScores.charisma}
                    onChange ={(e) => setAbilityScores({...abilityScores, charisma:(e.target.value)})}
                    
                    
                    />
                    </div>
                    <br></br>
                  <button onClick={handleSave}>Save</button>
                </form>
    </div>
)


}

export default AbilityScores