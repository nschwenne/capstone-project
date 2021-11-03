import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom"
import AbilityScores from './AbilityScores';
import CharacterBackground from './CharacterBackground';

function Character(charid) {
    const [character, setCharacter] = useState();
    const [id, setID] = useState();
    const [name, setName] = useState();
    const [klass, setKlass] = useState();
    const [level, setLevel] = useState();
    
    
    

    useEffect(() => {
            fetch("/characters" + {charid})
              .then((r) => r.json())
              .then(setCharacter);
          }, []); 

const history = useHistory()

function handleUpdate(e) {
    e.preventDefault();
fetch(("/characters/" + id), 
{
method: "PUT",
headers: {
  "Content-Type": "application/json",
},
body: JSON.stringify({
  name,
  klass,
  level,
}),
}).then(response => response.json())
history.goBack();
}

    return(
            <div>
                <form onSubmit={handleUpdate}>
                    <div id="name">
                    <label htmlFor="name">Character Name: </label>
                    <input 
                    type="text"
                    id="name"
                    value={name}
                    onChange ={(e) => setName(e.target.value)}/>
                    </div>
                  <CharacterBackground/>
                  <AbilityScores character={character}/>
                  <button type="submit">Save</button>
                </form>
                
            </div>
        )
      
    
}

export default Character;