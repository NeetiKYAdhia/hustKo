import React, { useState } from 'react';
import "./Header.css";
import "./signin.css";
import { useNavigate } from "react-router-dom";
import { SignpostOutlined } from "@mui/icons-material";

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const navigate = useNavigate();

    const onLoginClick = () => {
        // You'll update this function later...
    }

    const onRegisterClick = () => {
        navigate('/Registerpage'); // Replace '/registration' with the path to your registration page
    }

    return (
        <div className="signinBackground">
            <div className={"mainContainer"}>
                <div className="loginBox">
                    <div className={"titleContainer"}>
                        <div>Login</div>
                    </div>
                    <br />
                    <div className={"inputContainer"}>
                        <input
                            value={email}
                            placeholder="Enter your email here"
                            onChange={ev => setEmail(ev.target.value)}
                            className={"inputBox"} />
                        <label className="errorLabel">{emailError}</label>
                    </div>
                    <br />
                    <div className={"inputContainer"}>
                        <input
                            value={password}
                            placeholder="Enter your password here"
                            onChange={ev => setPassword(ev.target.value)}
                            className={"inputBox"} />
                        <label className="errorLabel">{passwordError}</label>
                    </div>
                    <br />
                    <div className={"buttonContainer"}>
                        <input
                            className={"inputButton"}
                            type="button"
                            onClick={onLoginClick}
                            value={"Log in"} />
                        <input
                            className={"inputButton"}
                            type="button"
                            onClick={onRegisterClick}
                            value={"Register"} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;