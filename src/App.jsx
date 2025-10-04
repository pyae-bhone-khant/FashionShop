import Herro  from "./components/Hero/Hero"
import Blogs from "./components/Blogs/Blogs"
import Navbar from "./components/Navbar/Navbar"
import Catgory from "./components/Category/Category"
import Catgory2 from "./components/Category/Category2"

export default function App () {
  return (     
 
               <div className="bg-white "> 
               <div className="px-2">

                 <Navbar />
                 <Herro /> 
                 <Blogs />
                 <Catgory2 />

               </div>
       
               </div>
  )
}