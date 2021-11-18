import React, { useState } from "react";
import { useHistory } from "react-router";

function NewCampaign() {
    const [name, setName] = useState("");
    const [setting, setSetting] = useState("");

    const history = useHistory();

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/campaigns", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            setting
          }),
        }).then((r) => {
          history.push("/campaignlist");
          
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
        <button type="submit">Create Campaign!</button>
    </form>
</div>
)

}

export default NewCampaign;