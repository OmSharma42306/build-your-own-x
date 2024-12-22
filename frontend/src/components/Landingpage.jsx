import { useNavigate } from "react-router-dom"

export default function Landingpage(){
    const navigate = useNavigate();
    function handleSignin(){
        navigate("/login")

    }
    function handleSignup(){
        navigate("/signup")
    }
return <div>
        Hi i am from landing page
        <br />


        <button  onClick={handleSignin}>Signin</button>
        <br />
        <button onClick={handleSignup}>Signup</button>
    </div>
}