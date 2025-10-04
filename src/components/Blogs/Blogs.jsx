export default function Blogs() {
  return (
    <div className="bg-white mt-6 px-20 py-10">
      <h2 className="text-3xl font-bold text-center mb-8">
        Latest <span className="text-red-500">Blogs</span>
      </h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        
        {/* Card 1 */}
        <div
          className="h-64 bg-center bg-cover rounded-xl shadow-lg relative group"
          style={{
            backgroundImage:
              "url('https://blog-landing-xi.vercel.app/assets/kids-BBPTV459.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/40 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
            <h3 className="text-white text-xl font-semibold">Kids Fashion</h3>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className="h-64 bg-center  bg-cover rounded-xl shadow-lg relative group"
          style={{
            backgroundImage:
              "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShTguaNMUR6nvgxVozZGyRXxLTl-CVFk8xjpMwD6CASxYIAui2epgcQnGWDi_Llxxpip4&usqp=CAU')",
          }}
        >
          <div className="absolute inset-0 bg-black/40 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
            <h3 className="text-white text-xl font-semibold">Men’s Trends</h3>
          </div>
        </div>

        {/* Card 3 */}
        <div
          className="h-64 bg-center bg-cover rounded-xl shadow-lg relative group"
          style={{
            backgroundImage:
              "url('https://blog-landing-xi.vercel.app/assets/women-Cg5JxEgR.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/40 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
            <h3 className="text-white text-xl font-semibold">Women’s Styles</h3>
          </div>
        </div>
      </div> 
      <div className="border border-gray-600 mt-3"></div>
    </div>
  );
}
