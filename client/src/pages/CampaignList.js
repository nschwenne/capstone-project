import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"

function CampaignList() {
    const [campaigns, setCampaigns] = useState([])
    

    useEffect(() => {
        fetch("/campaigns")
        .then((res) => res.json())
        .then((json) => (setCampaigns(json)))
      }, []);




      function deleteFunction(id) {
        fetch(("/campaigns/" + id), 
        {
            method: "DELETE"
        })
       const newCampArray = campaigns.filter((campaign) => campaign.id !==id);
       setCampaigns(newCampArray);
      }

      return(
        <div>
              
        {campaigns.length > 0 ? (
            campaigns.map((campaign) => (
              <div key={campaign.id}>
                    <div>
                        <p>
                            <br></br>
                            Name: {campaign.name}
                            <br></br>
                            Setting: {campaign.setting}
                            <br></br>
                            ID: {campaign.id}
                            <br></br>
                            Characters: {(campaign.characters.map((character) => (
                              <div>
                                {character.name}
                              </div>
                              
                            )))}
                        </p>
                    </div>
                    <button onClick={() => {
                      deleteFunction(campaign.id)
                      }}>DELETE</button>
              </div>
            ))
        ) : (
            <div>
                <h2>No Campaigns Found</h2> 
                <Link to="/newcampaign">Create New Campaign!</Link>
            </div>    
        )}
    </div>
)
      




}






export default CampaignList;