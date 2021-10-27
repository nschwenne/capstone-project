import { useState } from "react";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";

function Login({ onLogin }) {
    const [showLogin, setShowLogin] = useState(true);

    return (

        <div>
            <h1>Character App</h1>
            {showLogin ? (
            <div> 
            <LoginForm onLogin={onLogin}/>
            <p>
                Don't have an account? 
                <br/>
                <button onClick={() => setShowLogin(false)}>Sign up!</button>
            </p>
            </div>
            ) : (
            <div>
                <SignUpForm  onLogin={onLogin}/>
                <p>
                    Already have an account?
                    <br></br>
                    <button onClick={() => setShowLogin(true)}>Log in!</button>
                </p>
            </div>
            )}
        </div>
    )

}

export default Login;