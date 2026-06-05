export default function Cart(){

return(
<div className="p-5">

<h1 className="text-3xl font-bold">
Your Cart
</h1>


<div className="mt-5 shadow p-5 rounded">

<h2 className="text-xl">
Custom Product Order
</h2>

<p className="mt-2">
Total Amount: ₹499
</p>


<input
className="border p-2 mt-3 w-full"
placeholder="Enter Delivery Address"
/>


<a
href="/checkout"
className="bg-pink-600 text-white p-3 rounded mt-5 w-full block text-center"
>
Pay Now (Prepaid Only)
</a>

</div>


</div>
)

}
