import {  useState } from "react"
import axios from "axios";
export default function Signup(){
  const [name,setUsername] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  async function handleSubmit(){
      const response = await axios.post('http://localhost:3000/signup',{
          name,
          email,
          password
        });
        console.log(response)
  }
  return <div>
    <input type="text" placeholder="Username" onChange={(e)=>{
      setUsername(e.target.value)
      {console.log(name)}
    }} />
    <input type="text" placeholder="email" onChange={(e)=>{setEmail(e.target.value)}}/>
    <br />
    <input type="passwords"  placeholder="Password" onChange={(e)=>{
      setPassword(e.target.value)
    }} />
    <br />
    <button onClick={handleSubmit}>Submit</button>
    
  </div>
}