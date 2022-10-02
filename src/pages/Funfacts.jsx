import Navbar from "../Components/Navbar";

export default function Funfacts() {
  return (
    <main className="w-full flex bg-normal bg-no-repeat bg-cover items-center justify-center min-h-screen text-white relative ">
      <Navbar />
      <section className="w-[80vw] flex flex-col items-center p-16 gap-16">
                <div className="flex w-full justify-between gap-16">
                    <div className="w-[20vw] shadow-black shadow-xl bg-white -rotate-[25deg]">
                        <img src="./src/assets/sharkfact.png" alt="" />
                    </div>
                    <div className="flex w-[30vw] flex-col justify-self-end items-center justify-center text-center">
                        <h1 className="font-bold text-[40px] text-white" >sharks eats biryani sdkfds;khfk</h1>
                        <a href="#" className="underline text-white" >Know More</a>
                    </div>
                </div>
                <button className="flex items-center tracking-wide gap-2 rounded-lg px-5 py-3 bg-[#585BAC] text-white font-semibold">
                    <img className="w-10" src="./src/assets/shuffle.svg" alt=""/> Shuffle</button> 
            </section>
    </main>
  );
}
