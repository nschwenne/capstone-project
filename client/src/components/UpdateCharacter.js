import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom"

function UpdateCharacter() {
    const [id, setID] = useState();
    const [name, setName] = useState();
    const [klass, setKlass] = useState();
    const [level, setLevel] = useState();

    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setName(localStorage.getItem('Name'));
        setKlass(localStorage.getItem('Class'));
        setLevel(localStorage.getItem('Level'))
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
                <h1>Update Character</h1>
                <form onSubmit={handleUpdate}>
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
                    <button type="submit">Update</button>
                </form>
            </div>
        )
      
    
}

export default UpdateCharacter;