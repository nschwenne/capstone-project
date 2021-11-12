import React, { useState, useEffect } from "react";




function Skills( {character} ) {
const [skills, setSkills] = useState({
    str_saving: "", 
    athletics: "",
    dex_saving: "",
    acrobatics: "",
    sleight_of_hand: "",
    stealth: "",
    con_saving: "",
    int_saving: "",
    arcana: "",
    history: "",
    investigation: "",
    nature: "",
    religion: "",
    wis_saving: "",
    animal_handling: "",
    insight: "",
    medicine: "",
    perception: "",
    survival: "",
    cha_saving: "",
    deception: "",
    intimidation: "",
    performance: "",
    persuasion: ""
});
const [id, setId] = useState("")

useEffect(() => {
    if (character.id) {
    setSkills({
        str_saving: character.str_saving || "",
        athletics: character.athletics || "",
        dex_saving: character.dex_saving || "",
        acrobatics: character.acrobatics || "",
        sleight_of_hand: character.sleight_of_hand || "",
        stealth: character.stealth || "",
        con_saving: character.con_saving || "",
        int_saving: character.int_saving || "",
        arcana: character.arcana || "",
        history: character.history || "",
        investigation: character.investigation || "", 
        nature: character.nature || "",
        religion: character.religion || "",
        wis_saving: character.wis_saving || "",
        animal_handling: character.animal_handling || "",
        insight: character.insight || "",
        medicine: character.medicine || "",
        perception: character.perception || "",
        survival: character.survival || "",
        cha_saving: character.cha_saving || "",
        deception: character.deception || "",
        intimidation: character.intimidation || "",
        performance: character.performance || "",
        persuasion: character.persuasion || ""
           
    })
    setId(character.id) }
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
    str_saving: skills.str_saving,
    athletics: skills.athletics,
    dex_saving: skills.dex_saving,
    acrobatics: skills.acrobatics,
    sleight_of_hand: skills.sleight_of_hand,
    stealth: skills.stealth,
    con_saving: skills.con_saving,
    int_saving: skills.int_saving,
    arcana: skills.arcana,
    history: skills.history,
    investigation: skills.investigation,
    nature: skills.nature,
    religion: skills.religion,
    wis_saving: skills.wis_saving,
    animal_handling: skills.animal_handling,
    insight: skills.insight,
    medicine: skills.medicine,
    perception: skills.perception,
    survival: skills.survival,
    cha_saving: skills.cha_saving,
    deception: skills.deception,
    intimidation: skills.intimidation,
    performance: skills.performance,
    persuasion: skills.persuasion,
}),
}).then(response => response.json())
}

    return (
        <div>
            <h2>Skills</h2>
            <div>
                <form>
                    <div>
                    <label htmlFor="str_saving">Strength Saving Throw: </label>
                    <input 
                    type="number"
                    id="str_saving"
                    value={skills.str_saving}
                    onChange ={(e) => setSkills({...skills, str_saving:(e.target.value)})}
                    /> 
                    <br></br>
                    <label htmlFor="athletics">Athletics: </label>
                    <input 
                    type="number"
                    id="athletics"
                    value={skills.athletics}
                    onChange ={(e) => setSkills({...skills, athletics:(e.target.value)})}
                    /> 
                    </div>
                    <div>
                    <br></br>
                    <label htmlFor="dex_saving">Dexterity Saving Throw: </label>
                    <input 
                    type="number"
                    id="dex_saving"
                    value={skills.dex_saving}
                    onChange ={(e) => setSkills({...skills, dex_saving:(e.target.value)})}
                    /> 
                    <br></br>
                    <label htmlFor="acrobatics">Acrobatics: </label>
                    <input 
                    type="number"
                    id="acrobatics"
                    value={skills.acrobatics}
                    onChange ={(e) => setSkills({...skills, acrobatics:(e.target.value)})}
                    /> 
                    <br></br>
                    <label htmlFor="sleight_of_hand">Sleight of Hand: </label>
                    <input 
                    type="number"
                    id="sleight_of_hand"
                    value={skills.sleight_of_hand}
                    onChange ={(e) => setSkills({...skills, sleight_of_hand:(e.target.value)})}
                    /> 
                    <br></br>
                    <label htmlFor="stealth">Stealth: </label>
                    <input 
                    type="number"
                    id="stealth"
                    value={skills.stealth}
                    onChange ={(e) => setSkills({...skills, stealth:(e.target.value)})}
                    /> 
                    </div>
                    <br></br>
                    <div>
                    <label htmlFor="con_saving">Constitution Saving Throw: </label>
                    <input 
                    type="number"
                    id="con_saving"
                    value={skills.con_saving}
                    onChange ={(e) => setSkills({...skills, con_saving:(e.target.value)})}
                    /> 
                    </div>
                    <br></br>
                    <div>
                    <label htmlFor="int_saving">Intelligence Saving Throw: </label>
                    <input 
                    type="number"
                    id="int_saving"
                    value={skills.int_saving}
                    onChange ={(e) => setSkills({...skills, int_saving:(e.target.value)})}
                    /> 
                    <br></br>
                    <label htmlFor="arcana">Arcana: </label>
                    <input 
                    type="number"
                    id="arcana"
                    value={skills.arcana}
                    onChange ={(e) => setSkills({...skills, arcana:(e.target.value)})}
                    /> 
                    <br></br>
                    <label htmlFor="history">History: </label>
                    <input 
                    type="number"
                    id="history"
                    value={skills.history}
                    onChange ={(e) => setSkills({...skills, history:(e.target.value)})}
                    /> 
                    <br></br>
                    <label htmlFor="investigation">Investigation: </label>
                    <input 
                    type="number"
                    id="investigation"
                    value={skills.investigation}
                    onChange ={(e) => setSkills({...skills, investigation:(e.target.value)})}
                    /> 
                    <br></br>
                    <label htmlFor="nature">Nature: </label>
                    <input 
                    type="number"
                    id="nature"
                    value={skills.nature}
                    onChange ={(e) => setSkills({...skills, nature:(e.target.value)})}
                    /> 
                    <br></br>
                    <label htmlFor="religion">Religion: </label>
                    <input 
                    type="number"
                    id="religion"
                    value={skills.religion}
                    onChange ={(e) => setSkills({...skills, religion:(e.target.value)})}
                    /> 
                    </div>
                    <br></br>
                    <div>
                    <label htmlFor="wis_saving">Wisdom Saving Throw: </label>
                    <input 
                    type="number"
                    id="wis_saving"
                    value={skills.wis_saving}
                    onChange ={(e) => setSkills({...skills, wis_saving:(e.target.value)})}
                    /> 
                    <br></br>
                    <label htmlFor="animal_handling">Animal Handling: </label>
                    <input 
                    type="number"
                    id="animal_handling"
                    value={skills.animal_handling}
                    onChange ={(e) => setSkills({...skills, animal_handling:(e.target.value)})}
                    /> 
                    <br></br>
                    <label htmlFor="insight">Insight: </label>
                    <input 
                    type="number"
                    id="insight"
                    value={skills.insight}
                    onChange ={(e) => setSkills({...skills, insight:(e.target.value)})}
                    /> 
                    <br></br>
                    <label htmlFor="medicine">Medicine: </label>
                    <input 
                    type="number"
                    id="medicine"
                    value={skills.medicine}
                    onChange ={(e) => setSkills({...skills, medicine:(e.target.value)})}
                    /> 
                    <br></br>
                    <label htmlFor="perception">Perception: </label>
                    <input 
                    type="number"
                    id="perception"
                    value={skills.perception}
                    onChange ={(e) => setSkills({...skills, perception:(e.target.value)})}
                    /> 
                    <br></br>
                    <label htmlFor="survival">survival: </label>
                    <input 
                    type="number"
                    id="survival"
                    value={skills.survival}
                    onChange ={(e) => setSkills({...skills, survival:(e.target.value)})}
                    /> 
                    </div>
                    <br></br>
                    <div>
                    <label htmlFor="cha_saving">Charisma Saving Throw: </label>
                    <input 
                    type="number"
                    id="cha_saving"
                    value={skills.cha_saving}
                    onChange ={(e) => setSkills({...skills, cha_saving:(e.target.value)})}
                    /> 
                    <br></br>
                    <label htmlFor="deception">Deception: </label>
                    <input 
                    type="number"
                    id="deception"
                    value={skills.deception}
                    onChange ={(e) => setSkills({...skills, deception:(e.target.value)})}
                    /> 
                    <br></br>
                    <label htmlFor="intimidation">Intimidation: </label>
                    <input 
                    type="number"
                    id="intimidation"
                    value={skills.intimidation}
                    onChange ={(e) => setSkills({...skills, intimidation:(e.target.value)})}
                    /> 
                    <br></br>
                    <label htmlFor="performance">Performance: </label>
                    <input 
                    type="number"
                    id="performance"
                    value={skills.performance}
                    onChange ={(e) => setSkills({...skills, performance:(e.target.value)})}
                    /> 
                    <br></br>
                    <label htmlFor="persuasion">Persuasion: </label>
                    <input 
                    type="number"
                    id="persuasion"
                    value={skills.persuasion}
                    onChange ={(e) => setSkills({...skills, persuasion:(e.target.value)})}
                    /> 
                    <br></br>
                    </div>
                   
                    <button onClick={handleSave}>Save</button>
                </form>
            </div>
            
        </div>
    )
}

export default Skills;