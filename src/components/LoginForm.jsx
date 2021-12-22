import axios from "axios";
import { useState } from "react";

const LoginForm=()=>{
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const [error,setError]=useState("");


    const loginSubmitHandler=async (e)=>{
        e.preventDefault();

        const authObject={"Project-ID":"f458f918-d3fd-4eed-9de1-1f7c09c5648c","User-Name":username, "User-Secret":password};

        try {
            await axios.get("https://api.chatengine.io/chats",{headers:authObject}).then((res)=>{
                console.log(res.data);
            });
            localStorage.setItem("username",username);
            localStorage.setItem("password",password);
            window.location.reload();
        } catch (error) {
            setError("Oops, incorrect username or password!");
        }

    }

    return(
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Let's Chat</h1>
                <form onSubmit={loginSubmitHandler}>
                    <input type="text" value={username} onChange={(e)=>{setUsername(e.target.value)}} className="input" placeholder="Enter username" required/>
                    <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} className="input" placeholder="Enter password" required/>
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>
            </div>
        </div>

    );
















}

export default LoginForm;