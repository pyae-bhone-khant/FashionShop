   import { useState } from "react"
   import { Menu , MousePointerBanIcon, X } from "lucide-react"
import { Facebook, Instagram, Twitter  } from "lucide-react"; 

export default function Navbar() { 
  const [open , setOpen] = useState(false)
  return (
    <> 
     <nav className="flex justify-between w-full py-4 bg-black shadow-lg text-white items-center px-4 ">
      <div className="flex gap-3" >
        <Facebook  size={28} />
        <Instagram size={28} />
        <Twitter  size={28} />
      </div>  
               <button className="md:hidden" onClick={() => setOpen(!open)} >
                {open ? <X size={28} /> : <Menu size={28} /> }
               </button>
             {/* Desktop view  */}
         <ul className=" hidden  md:flex gap-6 text-xl ">
          <li><a href="#" className="hover:text-gray-600">Home</a></li>
          <li><a href="#" className="hover:text-gray-600">Products</a></li>
          <li><a href="#" className="hover:text-gray-600">Portfolio</a></li>
          <li><a href="#" className="hover:text-gray-600">Blog</a></li>
          <li><a href="#" className="hover:text-gray-600">Contact Us</a></li>
         </ul> 
          
           <button className=" hidden md:block hover:bg-blue-300   px-4 py-2 bg-white text-black rounded-lg">Login</button> 
            {/* mpbile view  */} 
            {open && (
              <div className=" absolute top-16 left-0 flex flex-col items-center text-center md:hidden gap-3 px-4 bg-gray-400 w-full py-4" >
                <a href="#" className= " rounded-2xl w-full bg-gray-700  px-4 py-2 block text-white" >Home</a>
                <a href="#"  className= " rounded-2xl w-full bg-gray-700  px-4 py-2 block text-white">Products</a>
                <a href="#"  className=  " rounded-2xl w-full bg-gray-700  px-4 py-2 block text-white">Portfolio</a>
                <a href="#"  className= " rounded-2xl w-full bg-gray-700  px-4 py-2 block text-white">Blog</a>
                <a href="#" className= " rounded-2xl w-full bg-gray-700 px-4 py-2 block text-white">Contact</a>
                  <button className="hover:bg-blue-300 w-full bg-gray-700  px-4 py-3   text-white rounded-lg" >Login</button>
              </div>
            )}
     </nav> 
      
             
    </>
  )
}