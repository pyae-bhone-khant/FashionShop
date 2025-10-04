export default function Herro() { 
    return (

    <section
  className="min-h-[80vh] bg-fixed bg-center bg-cover "
  style={{ backgroundImage: "url('https://blog-landing-xi.vercel.app/assets/HeroImage-peGk-RbT.jpg')" }}
>  
 
<div className="bg-white items-center flex justify-center flex-col w-full h-20">   
    <h1 className="text-black font-bold text-3xl">Fashions<span className="text-red-500">Blogs</span></h1>
    <p>We Make you look the better of you!</p>
</div>     
                     
                     <div className="flex mt-50 justify-center text-center items-center">

           <div className="bg-white/80 md:w-150 sm:w-100 h-50 rounded-2xl justify-center  flex flex-col items-center">
               <h1 className="text-xl  text-red-600">Trending Styles</h1>
               <p className="text-3xl mt-2  text-black font-bold">Life is Boring without Fashion!</p>
               <h1 className="text-xl mt-2">We love to change your style lorem ipsum</h1>
           </div>
                     </div>
</section>
    )

}