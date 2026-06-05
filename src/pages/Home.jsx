const products=[
{
name:"Custom T-Shirt",
price:"₹499",
image:"https://via.placeholder.com/300x300?text=T-Shirt"
},
{
name:"Custom Mug",
price:"₹299",
image:"https://via.placeholder.com/300x300?text=Mug"
},
{
name:"Custom Cap",
price:"₹399",
image:"https://via.placeholder.com/300x300?text=Cap"
},
{
name:"Custom Cushion",
price:"₹599",
image:"https://via.placeholder.com/300x300?text=Cushion"
}
]


export default function Home(){

return(

<div className="p-5 bg-gray-100 min-h-screen">


<div className="bg-pink-600 text-white rounded p-8">

<h1 className="text-3xl font-bold">
SabAman.e Custom Store
</h1>

<p>
Create your own design
</p>

</div>


<h2 className="text-2xl font-bold mt-6">
Trending Products
</h2>


<div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-5">


{products.map((p)=>(

<div className="bg-white shadow rounded p-4">


<img 
src={p.image}
className="w-full"
/>


<h3 className="font-bold mt-3">
{p.name}
</h3>


<p>
{p.price}
</p>


<a
href="/product"
className="bg-pink-600 text-white p-2 rounded block text-center mt-3"
>
View Product
</a>


</div>

))}


</div>


</div>

)

}
