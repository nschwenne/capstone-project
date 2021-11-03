import { useEffect, useState } from "react";
import { Link } from "react-router-dom"


function CharacterList() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch("/characters")
          .then((r) => r.json())
          .then(setCharacters);
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
                                  Class: {character.klass}
                                  <br></br>
                                  Level: {character.level}
                                  <br></br>
                              </p>
                          </div>
                          <button onClick={() => {
                     deleteFunction(character.id)
                    }}>DELETE</button>  <Link to="/character" charid={character.id}>View</Link>
                      </div>
                  ))
              ) : (
                  <div>
                      <h2>No Characters Found</h2> 
                      <Link to="/new">Create New Character!</Link>
                  </div>    
              )}
          </div>
      )
}

export default CharacterList;