import React, { useState } from "react"

function CharacterBackground() {
    const [klass, setKlass] = useState();
    const [level, setLevel] = useState();
    const [race, setRace] = useState();
    const [alignment, setAlignment] = useState();
    const [background, setBackground] = useState();
    const [experience, setExperience] = useState();

    return(
        <div>
           <form>
           <div id="char-info-1">
                    <label htmlFor="klass">Class: </label>
                    <input 
                    type="text"
                    id="klass"
                    value={klass}
                    onChange={(e) => setKlass(e.target.value)}/>
                    <br></br>
                    <label htmlFor="level">Level: </label>
                    <input 
                    type="number"
                    id="level"
                    value={level}
                    onChange={(e) => setLevel(e.target.value)}/>
                    <br></br>
                    <label htmlFor="race">Race: </label>
                    <input 
                    type="text"
                    id="race"
                    value={race}
                    onChange={(e) => setRace(e.target.value)}/>
                    <br></br>
                    </div>
                    <div id="char-info-2">
                    <label htmlFor="alignment">Alignment: </label>
                    <input 
                    type="text"
                    id="alignment"
                    value={alignment}
                    onChange={(e) => setAlignment(e.target.value)}/>
                    <br></br>
                    <label htmlFor="background">Background: </label>
                    <input 
                    type="text"
                    id="background"
                    value={background}
                    onChange={(e) => setBackground(e.target.value)}/>
                    <br></br>
                    <label htmlFor="experience">Experience: </label>
                    <input 
                    type="text"
                    id="experience"
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}/>
                    </div>
                    
           </form>
        </div>
    )
}

export default CharacterBackground