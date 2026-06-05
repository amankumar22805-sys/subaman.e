import {useState} from "react";

export default function Login(){

const [email,setEmail]=useState("");
const [password,setPassword]=useState("");

function login(){
 alert("Login successful");
}

return(
<div className="p-5">

<h1 className="text-3xl font-bold">
SabAman.e Login
</h1>

<div className="shadow p-5 rounded mt-5">

<input
className="border p-2 w-full"
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
/>


<input
className="border p-2 w-full mt-3"
placeholder="Password"
type="password"
onChange={(e)=>setPassword(e.target.value)}
/>


<button
onClick={login}
className="bg-pink-600 text-white p-3 rounded mt-5 w-full"
>
Login
</button>

</div>

</div>
)

}
