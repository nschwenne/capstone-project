import React from "react";
import { Link } from "react-router-dom";

function NavBar({ user, setUser }) {

    function handleLogout() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null);
          }
        });
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
            <h1>Welcome {user.username}!</h1>
            <h2>Character App</h2>
            
              <div>
                <Link to="/">Character List</Link>
                &nbsp;&nbsp;&nbsp;
                  <Link to="/new">New Character</Link>
                  <br></br>
                  <br></br>
                  <button onClick={handleLogout}>Logout</button>
                  &nbsp;&nbsp;&nbsp;
                  <button onClick={handleDelete}>Delete Account</button>
              </div>
          </div>
      )
}

export default NavBar;