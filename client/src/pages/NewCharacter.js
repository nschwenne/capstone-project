import React, { useState } from "react";
import { useHistory } from "react-router";

function NewCharacter({ user }) {
 const [name, setName] = useState("");
 const [campaign_id, setCampaign_id] = useState("");
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
      campaign_id
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

              <label htmlFor="campaign_id">Campaign: </label>
              <input 
              type="number"
              id="campaign_id"
              value={campaign_id}
              onChange={(e) => setCampaign_id(e.target.value)}/>
              <br></br>
              <button type="submit">Create Character!</button>
          </form>
      </div>
  )


}

export default NewCharacter;