import {ShoppingCart} from "lucide-react";

export default function Navbar(){

return(
<nav className="bg-pink-600 text-white p-4 flex justify-between items-center">

<h1 className="text-2xl font-bold">
SabAman.e
</h1>

<input
className="w-1/2 p-2 rounded text-black"
placeholder="Search T-shirt, Mug, Cap..."
/>

<div className="flex gap-5 items-center">

<a href="/">
Home
</a>

<a href="/cart" className="flex gap-1">
Cart
<ShoppingCart/>
</a>

</div>

</nav>
)

}
