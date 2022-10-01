import Navbar from "../Components/Navbar";

export default function Quiz() {
   return(
      <main className="w-full flex bg-main-pattern items-center justify-center min-h-screen text-white relative ">
         <Navbar />
         <div className="flex flex-col h-full w-[60vw] rounded-3xl items-center justify-between border-[#6EE9FF] border-2 bg-[#064550]/40 mt-8">
            <h3 className="p-4 text-4xl text-[#CDEFFF] border-[#6EE9FF] border-b-2 w-full font-bold text-center">Quiz Time</h3>
            <h2 className="text-3xl text-[#70D9FF] py-16 font-semibold tracking-wide">Does shark eat biryani or pineapple pizza? </h2>
            <div className="grid grid-cols-2 gap-x-10 px-10 gap-y-10 w-full pb-10">
               <button className="border-[#6EE9FF] border-2 rounded-full p-2 text-[#70D9FF] font-semibold transform transition duration-500 hover:scale-105 hover:bg-[#6EE9FF] hover:text-black">Biryani eats</button>
               <button className="border-[#6EE9FF] border-2 rounded-full p-2 text-[#70D9FF] font-semibold transform transition duration-500 hover:scale-105 hover:bg-[#6EE9FF] hover:text-black">Biryani eats</button>
               <button className="border-[#6EE9FF] border-2 rounded-full p-2 text-[#70D9FF] font-semibold transform transition duration-500 hover:scale-105 hover:bg-[#6EE9FF] hover:text-black">Biryani eats</button>
               <button className="border-[#6EE9FF] border-2 rounded-full p-2 text-[#70D9FF] font-semibold transform transition duration-500 hover:scale-105 hover:bg-[#6EE9FF] hover:text-black">Biryani eats</button>
            </div>
            <div className="text-xl rounded-[15px] px-3 py-1  text-[#6EE9FF]  mb-10">
               <p id="p-number">1<span>/10</span></p>
            </div>
         </div>
      </main>
   )
}