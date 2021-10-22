import React, {useEffect, useState} from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom"
import NavBar from "./NavBar";
import Login from "../pages/Login";
import NewCharacter from "../pages/NewCharacter";
import CharacterList from "../pages/CharacterList";
import UpdateCharacter from "./UpdateCharacter";


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
    <NavBar user={user} setUser={setUser}/>
    <Switch>
        <Route path='/new'>
        <NewCharacter user={user}/>
        </Route>
        <Route path='/update'>
            <UpdateCharacter />
        </Route>
        <Route path="/">
            <CharacterList/>
        </Route>
       

    </Switch>
    </BrowserRouter>
)
}
export default App;