import React, { useState, useEffect } from "react";

function CharacterInfo({ character }) {
  const [info, setInfo] = useState({
    level: "",
    armor_class: "",
    initiative: "",
    speed: "",
    hit_point_maximum: "",
    current_hit_points: "",
    temporary_hit_points: "",
    hit_dice: "",
  });
  const [id, setId] = useState("");

  useEffect(() => {
    if (character.id) {
      setInfo({
        level: character.level || "",
        armor_class: character.armor_class || "",
        initiative: character.initiative || "",
        speed: character.speed || "",
        hit_point_maximum: character.hit_point_maximum || "",
        current_hit_points: character.current_hit_points || "",
        temporary_hit_points: character.temporary_hit_points || "",
        hit_dice: character.hit_dice || "",
      });
      setId(character.id);
    }
  }, [character]);

  function handleUpdate(e) {
    e.preventDefault();
    fetch("/characters/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        armor_class: info.armor_class,
        initiative: info.initiative,
        speed: info.speed,
        hit_point_maximum: info.hit_point_maximum,
        current_hit_points: info.current_hit_points,
        temporary_hit_points: info.temporary_hit_points,
        hit_dice: info.hit_dice,
      }),
    }).then((response) => response.json());
  }

  return (
    <div>
      <form>
        <div id="char-info-1">
          <div id="armor_class">
            <label htmlFor="armor_class">Armor Class:</label>
            <input
              type="number"
              id="armor_class"
              value={info.armor_class}
              onChange={(e) =>
                setInfo({
                  ...info,
                  armor_class: e.target.value,
                })
              }
            />
          </div>
          <br></br>
          <div id="initiative">
            <label htmlFor="initiative">Initiative</label>
            <input
              type="number"
              id="initiative"
              value={info.initiative}
              onChange={(e) =>
                setInfo({
                  ...info,
                  initiative: e.target.value,
                })
              }
            />
          </div>
          <br></br>
          <div id="speed">
            <label htmlFor="speed">Speed</label>
            <input
              type="number"
              id="speed"
              value={info.speed}
              onChange={(e) =>
                setInfo({
                  ...info,
                  speed: e.target.value,
                })
              }
            />
          </div>
          <br></br>
          <div id="hit_point_maximum">
            <label htmlFor="hit_point_maximum">HP Max</label>
            <input
              type="number"
              id="hit_point_maximum"
              value={info.hit_point_maximum}
              onChange={(e) =>
                setInfo({
                  ...info,
                  hit_point_maximum: e.target.value,
                })
              }
            />
          </div>
          <br></br>
          <div id="current_hit_points">
            <label htmlFor="current_hit_points">Current HP</label>
            <input
              type="number"
              id="current_hit_points"
              value={info.current_hit_points}
              onChange={(e) =>
                setInfo({
                  ...info,
                  current_hit_points: e.target.value,
                })
              }
            />
          </div>
          <br></br>
          <div id="temporary_hit_points">
            <label htmlFor="temporary_hit_points">Temp HP</label>
            <input
              type="temporary_hit_points"
              id="temporary_hit_points"
              value={info.temporary_hit_points}
              onChange={(e) =>
                setInfo({
                  ...info,
                  temporary_hit_points: e.target.value,
                })
              }
            />
          </div>
          <br></br>
          <div id="hit_dice">
            <label htmlFor="hit_dice">Hit Dice</label>
            <input
              type="number"
              id="hit_dice"
              value={info.hit_dice}
              onChange={(e) =>
                setInfo({
                  ...info,
                  hit_dice: e.target.value,
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

export default CharacterInfo;
