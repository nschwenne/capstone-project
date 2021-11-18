import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"


function CharacterList() {
    const [characters, setCharacters] = useState([]);

function setData(character) {
    let {id} = character;
    localStorage.setItem("ID", id);
}

    useEffect(() => {
        fetch("/characters")
        .then((res) => res.json())
        .then((json) => (setCharacters(json)))
      }, []);

      
      function deleteFunction(id) {
        fetch(("/characters/" + id), 
        {
            method: "DELETE"
        })
       const newCharArray = characters.filter((character) => character.id !==id);
       setCharacters(newCharArray);
      }

      return (
          <div>
              
              {characters.length > 0 ? (
                  characters.map((character) => (
                    <div key={character.id}>
                          <div>
                              <p>
                                  <br></br>
                                  Name: {character.name}
                                  <br></br>
                                  Campaign: {character.campaign_id}
                                  <br></br>
                                  Level: {character.level}
                                  <br></br>
                              </p>
                          </div>
                          <button onClick={() => {
                            deleteFunction(character.id)
                            }}>DELETE</button>  
                        <Link 
                            to='/character'
                            onClick={() => setData(character)}
                        >
                            View
                        </Link>
                    </div>
                  ))
              ) : (
                  <div>
                      <h2>No Characters Found</h2> 
                      <Link to="/newcharacter">Create New Character!</Link>
                  </div>    
              )}
          </div>
      )
}

export default CharacterList;