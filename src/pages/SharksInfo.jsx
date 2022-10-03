import Navbar from "../Components/Navbar";

import { gsap } from "gsap";
import { useRef, useEffect } from "react";

export default function SharksInfo() {

  const cardInfo = useRef(null);
  const q2 = gsap.utils.selector(cardInfo);

  useEffect(() => {
    gsap.to(q2('.card'), {
      y: 0,
      opacity: 1,
      stagger: .2,
      duration: .5
    })
  }, [])

  return (
    <main className="w-full flex bg-normal bg-no-repeat bg-cover bg-fixed justify-center min-h-screen text-white relative ">
      <Navbar />
      <section className="w-[80vw] mt-40">
        <div className="flex flex-col items-center justify-between gap-12">
          <div className="text-center drop-shadow-lg">
            <h3 className="text-white text-6xl font-semibold">Sharks Info</h3>
          </div>
          <div className="grid grid-cols-3 gap-20" ref={cardInfo}>
            <div className="flex flex-col w-full bg-[#ffffffcc] items-center justify-center p-2 rounded-md card -translate-y-24 opacity-0">
              <div className="w-full h-56 bg-cyan-700 rounded-md"></div>
              <p className="text-sm text-black p-2 leading-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, repudiandae.
              </p>
            </div>
            <div className="flex flex-col w-full bg-[#ffffffcc] items-center justify-center p-2 rounded-md card -translate-y-24 opacity-0">
              <div className="w-full h-56 bg-cyan-700 rounded-md"></div>
              <p className="text-sm text-black p-2 leading-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, repudiandae.
              </p>
            </div>
            <div className="flex flex-col w-full bg-[#ffffffcc] items-center justify-center p-2 rounded-md card -translate-y-24 opacity-0">
              <div className="w-full h-56 bg-cyan-700 rounded-md"></div>
              <p className="text-sm text-black p-2 leading-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, repudiandae.
              </p>
            </div>
            <div className="flex flex-col w-full bg-[#ffffffcc] items-center justify-center p-2 rounded-md card -translate-y-24 opacity-0">
              <div className="w-full h-56 bg-cyan-700 rounded-md"></div>
              <p className="text-sm text-black p-2 leading-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, repudiandae.
              </p>
            </div>
            <div className="flex flex-col w-full bg-[#ffffffcc] items-center justify-center p-2 rounded-md card -translate-y-24 opacity-0">
              <div className="w-full h-56 bg-cyan-700 rounded-md"></div>
              <p className="text-sm text-black p-2 leading-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, repudiandae.
              </p>
            </div>
            <div className="flex flex-col w-full bg-[#ffffffcc] items-center justify-center p-2 rounded-md card -translate-y-24 opacity-0">
              <div className="w-full h-56 bg-cyan-700 rounded-md"></div>
              <p className="text-sm text-black p-2 leading-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, repudiandae.
              </p>
            </div>
            <div className="flex flex-col w-full bg-[#ffffffcc] items-center justify-center p-2 rounded-md card -translate-y-24 opacity-0">
              <div className="w-full h-56 bg-cyan-700 rounded-md"></div>
              <p className="text-sm text-black p-2 leading-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, repudiandae.
              </p>
            </div>
            <div className="flex flex-col w-full bg-[#ffffffcc] items-center justify-center p-2 rounded-md card -translate-y-24 opacity-0">
              <div className="w-full h-56 bg-cyan-700 rounded-md"></div>
              <p className="text-sm text-black p-2 leading-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, repudiandae.
              </p>
            </div>
            <div className="flex flex-col w-full bg-[#ffffffcc] items-center justify-center p-2 rounded-md card -translate-y-24 opacity-0">
              <div className="w-full h-56 bg-cyan-700 rounded-md"></div>
              <p className="text-sm text-black p-2 leading-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, repudiandae.
              </p>
            </div>
            <div className="flex flex-col w-full bg-[#ffffffcc] items-center justify-center p-2 rounded-md card -translate-y-24 opacity-0">
              <div className="w-full h-56 bg-cyan-700 rounded-md"></div>
              <p className="text-sm text-black p-2 leading-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, repudiandae.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
