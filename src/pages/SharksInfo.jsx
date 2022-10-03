import Navbar from "../Components/Navbar";
import SharkInfo from "../Components/SharkInfo.component";

import { gsap } from "gsap";
import { useRef, useEffect } from "react";

const SharksInfo = () => {

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
            <SharkInfo information="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, repudiandae." />
            <SharkInfo information="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, repudiandae." />
            <SharkInfo information="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, repudiandae." />
            <SharkInfo information="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, repudiandae." />
            <SharkInfo information="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, repudiandae." />
            <SharkInfo information="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, repudiandae." />
            <SharkInfo information="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, repudiandae." />
            <SharkInfo information="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, repudiandae." />
            <SharkInfo information="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, repudiandae." />
            <SharkInfo information="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, repudiandae." />
          </div>
        </div>
      </section>
    </main>
  );
}


export default SharksInfo