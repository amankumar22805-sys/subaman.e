import {useState} from "react";

export default function Designer(){

const [image,setImage]=useState(null);

function upload(e){
 const file=e.target.files[0];
 if(file){
  setImage(URL.createObjectURL(file));
 }
}

return(
<div className="p-5">

<h1 className="text-3xl font-bold">
Custom Design
</h1>

<input 
type="file"
onChange={upload}
className="mt-5"
/>

<div className="mt-5">

{image && 
<img 
src={image}
className="w-60"
/>
}

</div>

<button className="bg-pink-600 text-white p-3 rounded mt-5">
Add To Cart (Prepaid)
</button>

</div>
)

}
