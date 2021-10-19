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
              <div>
              <Link to="/">Character App</Link>
              </div>
              <div>
                  <Link to="/new">New Character</Link>
                  <button onClick={handleLogout}>Logout</button>
                  <button onClick={handleDelete}>Delete Account</button>
              </div>
          </div>
      )
}

export default NavBar;