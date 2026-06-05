import {useState} from "react";


export default function Admin(){

const [name,setName]=useState("");
const [price,setPrice]=useState("");

const addProduct=()=>{

if(!name || !price){
alert("Fill product details");
return;
}

alert(
"Product Added: "+name+" ₹"+price
);

};


return(

<div className="p-5 bg-gray-100 min-h-screen">


<h1 className="text-3xl font-bold">
SabAman.e Admin Panel
</h1>


<div className="bg-white shadow p-5 rounded mt-5">


<input

className="border p-3 w-full"

placeholder="Product Name"

onChange={(e)=>setName(e.target.value)}

/>


<input

className="border p-3 w-full mt-3"

placeholder="Product Price"

onChange={(e)=>setPrice(e.target.value)}

/>


<button

onClick={addProduct}

className="bg-pink-600 text-white p-3 rounded mt-5 w-full"

>
Add Product
</button>


</div>


</div>

)

}
