export default function Checkout(){

return(
<div className="p-5">

<h1 className="text-3xl font-bold">
Checkout
</h1>


<div className="shadow p-5 rounded mt-5">

<h2 className="text-xl">
Order Details
</h2>

<p className="mt-3">
Custom Product Total: ₹499
</p>


<input
className="border p-2 mt-3 w-full"
placeholder="Full Name"
/>


<input
className="border p-2 mt-3 w-full"
placeholder="Delivery Address"
/>


<button
onClick={()=>alert("Payment Gateway Opening...")}
className="bg-pink-600 text-white p-3 rounded mt-5 w-full"
>
Pay Now (Prepaid Only)
</button>


</div>

</div>
)

}
