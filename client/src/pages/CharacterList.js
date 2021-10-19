import { useEffect, useState } from "react";
import { Link } from "react-router-dom"


function CharacterList() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch("/characters")
          .then((r) => r.json())
          .then(setCharacters);
      }, []);

      return (
          <div>
              {characters.length > 0 ? (
                  characters.map((character) => (
                      <div key={character.id}>
                          <div>
                            
                              <p>
                                  Name: {character.name}
                                  Class: {character.klass}
                                  Level: {character.level}
                              </p>
                          </div>
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