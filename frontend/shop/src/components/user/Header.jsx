import { useState } from "react"
import { FiShoppingCart } from "react-icons/fi";
import { PiUserCircleDuotone } from "react-icons/pi";


export const Header = ()=>{

    const [toggleOfferDiv,setToggleOfferDiv]  = useState(false)
    
    return <div className={`w-full  ${toggleOfferDiv && 'hidden'}`}>
        <div className="bg-black flex items-center">
        <p className="w-9/12 text-center text-white p-2" >Sign up and get 20% off to your first order. <span className="underline">Sign Up Now</span></p>
        <p className="text-white text-end pr-20 text-2xl hover:cursor-pointer" onClick={()=>{setToggleOfferDiv(prev => !prev)}} >&#x2715; </p>
        </div>


    <div className="my-3 bg-white w-full flex justify-center items-center">
    <div className="flex w-3/12 items-center">
    <p className="hover:cursor-pointer mx-2 font-extrabold text-xl">SHOP.CO</p>
    <p className="hover:cursor-pointer mx-2">Shop</p>
    <p className="hover:cursor-pointer mx-2">New Arrivals</p>
    <p className="hover:cursor-pointer mx-2">On Sale</p>
    <p className="hover:cursor-pointer mx-2">Brands</p>
    </div>

    <form className=" w-6/12">   
    <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm rounded-3xl bg-[#F0F0F0]" placeholder="Search for products..." required />
        
    </div>
</form>

<div className="flex">
<FiShoppingCart  className="text-black hover:cursor-pointer text-2xl mx-2"/>
<PiUserCircleDuotone  className="text-black hover:cursor-pointer text-2xl mx-2"/>
</div>
    </div>
    </div>
}