import Navbar from "../Components/Navbar";
import Shark from "../Components/Shark";
import { gsap } from "gsap";
import { useRef, useEffect } from "react";
import sharkData from "../content/sharkData.json";

export default function SharksInfo() {
  const cardInfo = useRef(null);
  const q2 = gsap.utils.selector(cardInfo);

  useEffect(() => {
    gsap.to(q2(".card"), {
      y: 0,
      opacity: 1,
      stagger: 0.2,
      duration: 0.5,
    });
  }, []);

  return (
    <main className="w-full flex bg-normal bg-no-repeat bg-cover bg-fixed justify-center min-h-screen text-white relative ">
      <Navbar />
      <section className="w-full my-20">
        <div className="flex flex-col items-center justify-between gap-12">
          <div className="text-center drop-shadow-lg">
            <h3 className="text-white text-4xl font-semibold drop-shadow-xl">
              Sharks Info
            </h3>
          </div>
          <div
            className="flex gap-10 justify-center items-center flex-wrap"
            ref={cardInfo}
          >
            {sharkData.map((item) => (
              <Shark key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
