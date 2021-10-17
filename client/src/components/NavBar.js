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

      return (
          <div>
              <div>
              <Link to="/">Character App</Link>
              </div>
              <div>
                  <button as={Link} to="/new">New Character</button>
                  <button onClick={handleLogout}>Logout</button>
              </div>
          </div>
      )
}

export default NavBar;