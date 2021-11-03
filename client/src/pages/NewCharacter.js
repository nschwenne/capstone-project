import React, { useState } from "react";
import { useHistory } from "react-router";

function NewCharacter({ user }) {
 const [name, setName] = useState("");
 const [klass, setKlass] = useState("");
 const [level, setLevel] = useState("");
 const [strength, setStrength] = useState("")
 const [dexterity, setDexterity] = useState("")
 const [constitution, setConstitution] = useState("")
 const [intelligence, setIntelligence] = useState("")
 const [wisdom, setWisdom] = useState("")
 const [charisma, setCharisma] = useState("")
 const [errors, setErrors] = useState([]);
 const [isLoading, setIsLoading] = useState(false);
 const history = useHistory();

 function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/characters", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        klass,
        level,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        history.push("/");
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }


  return (
      <div>
          <h2>Create Character</h2>
          <form onSubmit={handleSubmit}>
              <label htmlFor="name">Name: </label>
              <input 
              type="text"
              id="name"
             
              value={name}
              onChange ={(e) => setName(e.target.value)}/>
              <br></br>
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
              <button type="submit">Create Character!</button>
          </form>
      </div>
  )


}

export default NewCharacter;