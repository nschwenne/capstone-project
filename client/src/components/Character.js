import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom"
import AbilityScores from './AbilityScores';
import CharacterBackground from './CharacterBackground';


function Character() {
    const [character, setCharacter] = useState({name: "", campaign_id: ""});
    const [id, setID] = useState("");
 
    useEffect(() => {
      setID(localStorage.getItem('ID'))
          }, []); 
    
    useEffect(() => {
    fetch("/characters/" + id)
    .then((res) => res.json())
    .then((json) => {
      setCharacter(json)
      })
   }, [id]); 
   
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
 name: character.name,
 campaign_id: character.campaign_id
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
                    value={character.name}
                    onChange ={(e) => setCharacter({...character, name:(e.target.value)})}/>
                    </div>
                    <br></br>
                    <div id="campaign_id">
                    <label htmlFor="campaign_id">Campaign: </label>
                    <input 
                    type="number"
                    id="campaign_id"
                    value={character.campaign_id}
                    onChange ={(e) => setCharacter({...character, campaign_id:(e.target.value)})}/>
                    </div>
                   
                  <button type="submit">Save</button>
                </form>
                <CharacterBackground character={character} />
                <AbilityScores character={character}/>
            </div>
        )
      
    
}

export default Character;