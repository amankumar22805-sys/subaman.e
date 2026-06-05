import {ShoppingCart, User} from "lucide-react";

export default function Navbar(){

return(

<nav className="bg-pink-600 text-white p-4 flex justify-between items-center gap-3">

<h1 className="text-2xl font-bold">
SabAman.e
</h1>


<input

className="w-1/2 p-2 rounded text-black"

placeholder="Search T-shirt, Mug, Cap..."

/>


<div className="flex gap-4 items-center">


<a href="/login" className="flex gap-1 items-center">
<User size={20}/>
Login
</a>


<a href="/cart" className="flex gap-1 items-center">
<ShoppingCart size={20}/>
Cart
</a>


</div>


</nav>

)

}
