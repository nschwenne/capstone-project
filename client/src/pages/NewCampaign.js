import React, { useState } from "react";
import { useHistory } from "react-router";

function NewCampaign() {
    const [name, setName] = useState("");
    const [setting, setSetting] = useState("");
    const [id, setId] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        fetch("/campaigns", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            setting,
            id
          }),
        }).then((r) => {
          setIsLoading(false);
          if (r.ok) {
            history.push("/campaignlist");
          } else {
            r.json().then((err) => setErrors(err.errors));
          }
        });
      }
    


return (
    <div>
    <h2>Create Campaign</h2>
    <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input 
        type="text"
        id="name"
        value={name}
        onChange ={(e) => setName(e.target.value)}/>
         <br></br>
        <label htmlFor="setting">setting: </label>
        <input 
        type="text"
        id="setting"
        value={setting}
        onChange={(e) => setSetting(e.target.value)}/>
       <br></br>
       <label htmlFor="id">Campaign ID: </label>
        <input 
        type="text"
        id="id"
        value={id}
        onChange={(e) => setId(e.target.value)}/>
       <br></br>
        <button type="submit">Create Campaign!</button>
    </form>
</div>
)

}

export default NewCampaign;