import React from "react";
import { Link, useHistory } from "react-router-dom";

function NavBar({ user, setUser }) {

  const history = useHistory();

    function handleLogout() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null);
          }
        });
        localStorage.clear()
        history.push("/")
      }

     function handleDelete() {
       fetch("/users", {
         method: "DELETE",
       })
       .then((r) => r.json())
       window.location.reload()
     }
       
      
      return (
          <div>
              <nav>
                <Link to="/">Character List</Link>
                &nbsp;&nbsp;&nbsp;
                  <Link to="/newcharacter">New Character</Link>
                  &nbsp;&nbsp;&nbsp;
                  <Link to="/newcampaign">New Campaign</Link>
                  &nbsp;&nbsp;&nbsp;
                  <Link to="/campaignlist">Campaign List</Link>
                  <br></br>
                  <br></br>
                  <button onClick={handleLogout}>Logout</button>
                  &nbsp;&nbsp;&nbsp;
                  <button onClick={handleDelete}>Delete Account</button>
              </nav>
          <div>
            <br></br>
          <h1 className="header">Welcome {user.username}!</h1>
          </div>
          </div>
      )
}

export default NavBar;