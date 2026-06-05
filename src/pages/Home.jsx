const products=[
{
name:"Custom T-Shirt",
price:"₹499",
emoji:"👕"
},
{
name:"Custom Mug",
price:"₹299",
emoji:"☕"
},
{
name:"Custom Cap",
price:"₹399",
emoji:"🧢"
},
{
name:"Custom Cushion",
price:"₹599",
emoji:"🛋️"
}
]


export default function Home(){

return(

<div className="p-5 bg-gray-100 min-h-screen">


<div className="bg-pink-600 text-white rounded p-8">

<h1 className="text-3xl font-bold">
SabAman.e
</h1>

<p>
Create your own custom products
</p>

</div>



<h2 className="text-2xl font-bold mt-6">
Products
</h2>


<div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-5">


{products.map((p)=>(

<div className="bg-white shadow rounded p-5 text-center">


<div className="text-6xl">
{p.emoji}
</div>


<h3 className="font-bold mt-3">
{p.name}
</h3>


<p>
{p.price}
</p>


<a
href="/product"
className="bg-pink-600 text-white p-2 rounded block mt-3"
>
View Product
</a>


</div>

))}


</div>

</div>

)

}
