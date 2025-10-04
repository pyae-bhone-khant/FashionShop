export default function  Catgory() {
    return ( 
        
        <div className="flex  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6  justify-between  px-50"> 
          <div className="flex w-150 text-center items-center flex-col justify-center " > 
            <img  className="w-150 h-70" src="https://blog-landing-xi.vercel.app/assets/image3-BrreTWNx.jpg" alt="Image url" /> 
            <h1 className="mt-2 text-red-400">PERFUMES</h1>
            <p className=" mt-2 text-3xl">Wearing this will make everyone love you</p>
            <h2 className="mt-2">It's women love</h2>
            <p className="text-gray-600 mt-2" >Lizards are a widespread group of squamate reptiles , with over 6,000 species , ranging across all continents except Antarctica</p> 
          {/* More Product */}
            <div className="flex gap-4 mt-4">
                <div>
                      <img  className="w-120 h-70 rounded" src="https://blog-landing-xi.vercel.app/assets/image1-CCfxRQ1j.jpg" alt="Image url" /> 
            <h1 className="mt-2 text-red-400">PERFUMES</h1>
            <p className=" mt-2 text-xl">Wearing this will make everyone love you</p>
            <h2 className="mt-2">It's women love</h2>
            <p className="text-gray-600 mt-2 text-sm" >Lizards are a widespread group of squamate reptiles , with over 6,000 species , ranging across all continents except Antarctica</p> 
                </div> 
                <div>
                        <img  className="w-120 h-70 rounded" src="https://blog-landing-xi.vercel.app/assets/image2-CAyfVW0l.jpg" alt="Image url" /> 
            <h1 className="mt-2 text-red-400">PERFUMES</h1>
            <p className=" mt-2 text-xl">Wearing this will make everyone love you</p>
            <h2 className="mt-2">It's women love</h2>
            <p className="text-gray-600 mt-2 text-sm " >Lizards are a widespread group of squamate reptiles , with over 6,000 species , ranging across all continents except Antarctica</p> 
                </div>
            </div>  
               <div className="flex gap-4 mt-4">
                <div>
                      <img  className="w-120 h-70 rounded" src="https://blog-landing-xi.vercel.app/assets/image3-BrreTWNx.jpg" alt="Image url" /> 
            <h1 className="mt-2 text-red-400">PERFUMES</h1>
            <p className=" mt-2 text-xl">Wearing this will make everyone love you</p>
            <h2 className="mt-2">It's women love</h2>
            <p className="text-gray-600 mt-2 text-sm" >Lizards are a widespread group of squamate reptiles , with over 6,000 species , ranging across all continents except Antarctica</p> 
                </div> 
                <div>
                        <img  className="w-120 h-70 rounded" src="https://blog-landing-xi.vercel.app/assets/image4-CRcFZCf5.jpg" alt="Image url" /> 
            <h1 className="mt-2 text-red-400">PERFUMES</h1>
            <p className=" mt-2 text-xl">Wearing this will make everyone love you</p>
            <h2 className="mt-2">It's women love</h2>
            <p className="text-gray-600 mt-2 text-sm " >Lizards are a widespread group of squamate reptiles , with over 6,000 species , ranging across all continents except Antarctica</p> 
                </div>
            </div> 
          
          </div>   
          {/* other class  */}
             <div>

          <div className="flex w-70 flex-col   " >
            <h1 className="w-70 h-10 justify-center mb-4 text-center flex items-center bg-black text-white rounded">Most Popular</h1>
              <div className="flex px-2 ">
                <img className="w-25 h-20 rounded mt-2" src="https://blog-landing-xi.vercel.app/assets/image2-CAyfVW0l.jpg" alt="" />
                <p className="pl-6 text-gray-600">— I'll be in your neighborhood doing errands this…</p> 
                
              </div> 
              <div className=" w-50 mt-2 ml-20 border border-gray-300" ></div> 
               <div className="flex px-2 ">
                <img className="w-25 h-20 rounded mt-2" src="https://blog-landing-xi.vercel.app/assets/image3-BrreTWNx.jpg" alt="" />
                <p className="pl-6 text-gray-600">— I'll be in your neighborhood doing errands this…</p> 
                
              </div> 
              <div className=" w-50 mt-2 ml-20 border border-gray-300" ></div> <div className="flex px-2 ">
                <img className="w-70 h-20 rounded mt-2" src="https://blog-landing-xi.vercel.app/assets/image4-CRcFZCf5.jpg" alt="" />
                <p className="pl-6 text-gray-600">— I'll be in your neighborhood doing errands this…</p> 
                
              </div> 
              <div className=" w-50 mt-2 ml-20 border border-gray-300 " ></div>
          </div>  
                  <div className="Flex w-70 flex-col mt-10 text-center">
                    <h1 className="w-70 mt-2 h-10 justify-center mb-4 text-center flex items-center bg-black text-white rounded" >About us</h1>
                    <img className="h-80" src="https://blog-landing-xi.vercel.app/assets/image3-BrreTWNx.jpg" alt="" />
                    <h1 className="  justify-center text-center mt-2 text-red-500" >PERFUMES</h1>
                    <h2 className="  mt-2 text-2xl">Wearing this will make everyone love you</h2>
                    <h1 className=" mt-2 text-xl">It's women love</h1>
                    <p className= " mt-2 text-gray-500"> Lizards are a widespread group of squamate reptiles , with over 6,000 species , ranging across all continents except Antarctica </p>
                  </div>
             </div>
        </div>
    )
}