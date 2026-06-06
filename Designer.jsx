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

<div className="p-5 bg-gray-100 min-h-screen">


<h1 className="text-3xl font-bold">
Custom Design
</h1>


<div className="bg-white shadow rounded p-5 mt-5">


<h2 className="text-xl font-bold">
Upload Your Photo
</h2>


<input

type="file"

accept="image/*"

onChange={upload}

className="mt-4"

/>



{image &&

<img

src={image}

className="w-64 mt-5 rounded"

/>

}



<button

className="bg-pink-600 text-white p-3 rounded mt-5 w-full"

>
Create My Product
</button>


</div>


</div>

)

}
