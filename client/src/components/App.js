import React, {useEffect, useState} from "react";
import { Switch, Route, BrowserRouter} from "react-router-dom"
import NavBar from "./NavBar";
import Login from "../pages/Login";
import NewCharacter from "../pages/NewCharacter";
import CharacterList from "../pages/CharacterList";
import Character from "./Character";
import NewCampaign from "../pages/NewCampaign";
import CampaignList from "../pages/CampaignList";
import Inventory from "./Inventory";
import ItemPage from "./ItemPage";



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
        <Route path='/newcharacter'>
            <NewCharacter user={user}/>
        </Route>
        <Route path='/character'>
            <Character />
        </Route>
        <Route path='/inventory'>
            <Inventory />
        </Route>
        <Route path="/newcampaign">
            <NewCampaign />
        </Route>
        <Route path="/campaignlist">
            <CampaignList />
        </Route>
        <Route path="/items">
            <ItemPage />
        </Route>
        <Route path="/">
            <CharacterList/>
        </Route>
    </Switch>
    </BrowserRouter>
)
}
export default App;