import { useState } from "react"
import axios from "axios";
export default function Login (){
    const [email,setEmail] = useState("");
    const [password,setPassword ] = useState("");
    async function handleLogin(){
        const responce = await axios.post("http://localhost:3000/signin",{
            email,
            password,
        });
        console.log(responce);

    }
    return <div>
        <input type="text" placeholder="email" onChange={(e)=>{setEmail(e.target.value)}} />
        <input type="password" placeholder="password" onChange={(e)=>{setPassword(e.target.value)}}/>
        <button onClick={handleLogin}>Login</button>
    </div>
}