import { useEffect, useState } from "react";
import { Link } from "react-router-dom"


function CharacterList() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch("/characters")
          .then((r) => r.json())
          .then(setCharacters);
      }, []);


      function deleteFunction(character) {
        fetch(("/characters" + character.id), 
        {
            method: "DELETE"
        })
        
      }
      return (
          <div>
              {characters.length > 0 ? (
                  characters.map((character) => (
                      <div key={character.id}>
                          <div>
                              <p>
                                  Character Number: {character.id}
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
                     deleteFunction(character)
                    }}>DELETE</button>
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