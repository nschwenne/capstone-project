import { useState } from "react";
import LoginForm from "../components/LoginForm";

function Login({ onLogin }) {
    const [showLogin, setShowLogin] = useState(true);

    return (

        <div>
            <h1>Character App</h1>
            <LoginForm onLogin={onLogin}/>
        </div>
    )

}

export default Login;