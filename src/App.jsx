import Herro  from "./components/Hero/Hero"
import Blogs from "./components/Blogs/Blogs"
import Navbar from "./components/Navbar/Navbar"

export default function App () {
  return ( 
               <div className="bg-white "> 
               <div className="px-2">

                 <Navbar />
            <Herro /> 
            <Blogs />

               </div>
       
               </div>
  )
}