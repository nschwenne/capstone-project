import React, { useState, useEffect } from "react";

function CharacterBackground({ character }) {
  const [background, setBackground] = useState({
    klass: "",
    level: "",
    race: "",
    alignment: "",
    experience: "",
    background: "",
  });
  const [id, setId] = useState("");

  useEffect(() => {
    if (character.id) {
      setBackground({
        klass: character.klass || "",
        level: character.level || "",
        race: character.race || "",
        alignment: character.alignment || "",
        experience: character.experience || "",
        background: character.background || "",
      });
      setId(character.id);
    }
  }, [character]);

  const proficiency = character.level
    ? Math.ceil(character.level / 4 + 1)
    : null;

 
  function handleUpdate(e) {
    e.preventDefault();
    fetch("/characters/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        klass: background.klass,
        level: background.level,
        race: background.race,
        background: background.background,
        alignment: background.alignment,
        experience: background.experience,
      }),
    }).then((response) => response.json());
  }

  return (
    <div>
      <p>proficiency</p>
      <p id="prof">{proficiency}</p>
      <form>
        <div id="char-info-1">
          <div id="klass">
            <label htmlFor="klass">Class</label>
            <input
              type="text"
              id="klass"
              value={background.klass}
              onChange={(e) =>
                setBackground({
                  ...background,
                  klass: e.target.value,
                })
              }
            />
          </div>
          <br></br>
          <div id="level">
            <label htmlFor="level">Level</label>
            <input
              type="number"
              id="level"
              value={background.level}
              onChange={(e) =>
                setBackground({
                  ...background,
                  level: e.target.value,
                })
              }
            />
          </div>
          <br></br>
          <div id="race">
            <label htmlFor="race">Race</label>
            <input
              type="text"
              id="race"
              value={background.race}
              onChange={(e) =>
                setBackground({
                  ...background,
                  race: e.target.value,
                })
              }
            />
          </div>
          <br></br>
          <div id="background">
            <label htmlFor="background">Background</label>
            <input
              type="text"
              id="background"
              value={background.background}
              onChange={(e) =>
                setBackground({
                  ...background,
                  background: e.target.value,
                })
              }
            />
          </div>
          <br></br>
          <div id="alignment">
            <label htmlFor="alignment">Alignment</label>
            <input
              type="text"
              id="alignment"
              value={background.alignment}
              onChange={(e) =>
                setBackground({
                  ...background,
                  alignment: e.target.value,
                })
              }
            />
          </div>
          <br></br>
          <div id="experience">
            <label htmlFor="experience">Experience</label>
            <input
              type="text"
              id="experience"
              value={background.experience}
              onChange={(e) =>
                setBackground({
                  ...background,
                  experience: e.target.value,
                })
              }
            />
          </div>
          <button onClick={handleUpdate}>save</button>
        </div>
      </form>
    </div>
  );
}

export default CharacterBackground;

/*

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
                    <button onClick={show}></button>
           </form>
        </div>
         */
