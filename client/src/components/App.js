import React, {useEffect, useState} from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom"
import NavBar from "./NavBar";
import Login from "../pages/Login";


function App() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch("/me").then((r) => {
            if (r.ok) {
                r.json().then((user) => setUser(user))
            }
        });
    }, []);
    if (!user) return <Login onLogin={setUser} />

return (
    <BrowserRouter>
    <NavBar />
    <Switch>
        <Route path='/new'>

        </Route>
        <Route>

        </Route>

    </Switch>
    </BrowserRouter>
)
}
export default App;