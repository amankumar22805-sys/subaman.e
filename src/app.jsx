const products=[
{
name:"Custom T-Shirt",
price:"₹499",
img:"https://via.placeholder.com/200"
},
{
name:"Custom Mug",
price:"₹299",
img:"https://via.placeholder.com/200"
},
{
name:"Custom Cap",
price:"₹399",
img:"https://via.placeholder.com/200"
},
{
name:"Custom Cushion",
price:"₹599",
img:"https://via.placeholder.com/200"
}
]


export default function Home(){

return(
<div className="p-5">

<h2 className="text-3xl font-bold">
Create Your Custom Product
</h2>

<div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-5">

{products.map(p=>(
<div className="shadow p-4 rounded">

<img src={p.img}/>

<h3>{p.name}</h3>

<p>{p.price}</p>

<button className="bg-pink-600 text-white p-2 rounded">
Customize
</button>

</div>
)}

</div>

</div>
)

}
