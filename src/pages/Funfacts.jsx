import Navbar from "../Components/Navbar";
import sharkfact from "../assets/sharkfact.png";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";


export default function Funfacts() {

    const img = useRef(null)
    const facts = useRef(null)
    const link = useRef(null)

    const main = useRef(null)
    const q = gsap.utils.selector(main);

    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {
        gsap.to(q('#img'), {
            y: 0,
            opacity: 1,
            stagger: .1,
            scale: 1,
            duration: 1
        })

        gsap.to(q('.facts'), {
            x: 0,
            opacity: 1,
            delay: .3,
            duration: 1
        })

        gsap.to(q('.links'), {
            x: 0,
            opacity: 1,
            delay: .4,
            duration: 1
        })
    }, [])

    return (
        <main className="w-full flex-col flex bg-fixed bg-normal bg-no-repeat bg-cover items-center justify-center min-h-screen text-white relative overflow-hidden" ref={main}>
            <Navbar />
            <section className="w-[75vw] flex flex-col items-center p-16 gap-14 mt-32">
                <div className="flex w-full justify-between gap-16 mt-8">
                    <div className="w-[20vw] shadow-black shadow-xl bg-white -rotate-[25deg] scale-150 translate-y-24 opacity-0" id="img">
                        <img src={sharkfact} alt="" />
                    </div>
                    <div className="flex w-[35vw] flex-col justify-self-end items-center justify-center text-center">
                        <h1 className="font-bold text-[40px] text-white facts opacity-0 -translate-x-24">Sharks do not have bones.</h1>
                        <a href="https://www.fisheries.noaa.gov/feature-story/12-shark-facts-may-surprise-you" className="underline text-white links opacity-0 -translate-x-24" >Know More</a>
                    </div>
                </div>
            </section>

            <section className="w-[75vw] flex flex-col items-center p-16 gap-14">
                <div className="flex w-full flex-row-reverse justify-between gap-16 mt-8">
                    <div className="w-[20vw] shadow-black shadow-xl bg-white rotate-[25deg] translate-y-24 opacity-0" id="img">
                        <img src={sharkfact} alt="" />
                    </div>
                    <div className="flex w-[35vw] flex-col justify-self-end items-center justify-center text-center">
                        <h1 className="font-bold text-[40px] text-white facts opacity-0 -translate-x-24" >Most sharks have good eyesight.</h1>
                        <a href="https://www.fisheries.noaa.gov/feature-story/12-shark-facts-may-surprise-you" className="underline text-white links opacity-0 -translate-x-24" >Know More</a>
                    </div>
                </div>
            </section>

            <section className="w-[75vw] flex flex-col items-center p-16 gap-14">
                <div className="flex w-full justify-between gap-16 mt-8">
                    <div className="w-[20vw] shadow-black shadow-xl bg-white -rotate-[25deg] translate-y-24 opacity-0" id="img">
                        <img src={sharkfact} alt="" />
                    </div>
                    <div className="flex w-[35vw] flex-col justify-self-end items-center justify-center text-center">
                        <h1 className="font-bold text-[40px] text-white facts opacity-0 -translate-x-24" >Sharks have special electroreceptor organs.</h1>
                        <a href="https://www.fisheries.noaa.gov/feature-story/12-shark-facts-may-surprise-you" className="underline text-white links opacity-0 -translate-x-24" >Know More</a>
                    </div>
                </div>
            </section>

            <section className="w-[75vw] flex flex-col items-center p-16 gap-14">
                <div className="flex w-full flex-row-reverse justify-between gap-16 mt-8">
                    <div className="w-[20vw] shadow-black shadow-xl bg-white rotate-[25deg] translate-y-24 opacity-0" id="img">
                        <img src={sharkfact} alt="" />
                    </div>
                    <div className="flex w-[35vw] flex-col justify-self-end items-center justify-center text-center">
                        <h1 className="font-bold text-[40px] text-white facts opacity-0 -translate-x-24" > Shark skin feels similar to sandpaper.</h1>
                        <a href="https://www.fisheries.noaa.gov/feature-story/12-shark-facts-may-surprise-you" className="underline text-white links opacity-0 -translate-x-24" >Know More</a>
                    </div>
                </div>
            </section>

            <section className="w-[75vw] flex flex-col items-center p-16 gap-14">
                <div className="flex w-full justify-between gap-16 mt-8">
                    <div className="w-[20vw] shadow-black shadow-xl bg-white -rotate-[25deg] translate-y-24 opacity-0" id="img">
                        <img src={sharkfact} alt="" />
                    </div>
                    <div className="flex w-[35vw] flex-col justify-self-end items-center justify-center text-center">
                        <h1 className="font-bold text-[40px] text-white facts opacity-0 -translate-x-24" >Sharks can go into a trance. </h1>
                        <a href="https://www.fisheries.noaa.gov/feature-story/12-shark-facts-may-surprise-you" className="underline text-white links opacity-0 -translate-x-24" >Know More</a>
                    </div>
                </div>
            </section>

            <section className="w-[75vw] flex flex-col items-center p-16 gap-14">
                <div className="flex w-full flex-row-reverse justify-between gap-16 mt-8">
                    <div className="w-[20vw] shadow-black shadow-xl bg-white rotate-[25deg] translate-y-24 opacity-0" id="img">
                        <img src={sharkfact} alt="" />
                    </div>
                    <div className="flex w-[35vw] flex-col justify-self-end items-center justify-center text-center">
                        <h1 className="font-bold text-[40px] text-white facts opacity-0 -translate-x-24" >Sharks have special electroreceptor organs.</h1>
                        <a href="https://www.fisheries.noaa.gov/feature-story/12-shark-facts-may-surprise-you" className="underline text-white links opacity-0 -translate-x-24" >Know More</a>
                    </div>
                </div>
            </section>

            <section className="w-[75vw] flex flex-col items-center p-16 gap-14">
                <div className="flex w-full justify-between gap-16 mt-8 facts opacity-0 -translate-x-24">
                    <div className="w-[20vw] shadow-black shadow-xl bg-white -rotate-[25deg] translate-y-24 opacity-0" id="img">
                        <img src={sharkfact} alt="" />
                    </div>
                    <div className="flex w-[35vw] flex-col justify-self-end items-center justify-center text-center">
                        <h1 className="font-bold text-[40px] text-white facts opacity-0 -translate-x-24" >Sharks have been around a very long time.</h1>
                        <a href="https://www.fisheries.noaa.gov/feature-story/12-shark-facts-may-surprise-you" className="underline text-white links opacity-0 -translate-x-24" >Know More</a>
                    </div>
                </div>
            </section>

            <section className="w-[75vw] flex flex-col items-center p-16 gap-14">
                <div className="flex w-full flex-row-reverse justify-between gap-16 mt-8">
                    <div className="w-[20vw] shadow-black shadow-xl bg-white rotate-[25deg] translate-y-24 opacity-0" id="img">
                        <img src={sharkfact} alt="" />
                    </div>
                    <div className="flex w-[35vw] flex-col justify-self-end items-center justify-center text-center">
                        <h1 className="font-bold text-[40px] text-white facts opacity-0 -translate-x-24" >Scientists age sharks by counting the rings on their vertebrae.</h1>
                        <a href="https://www.fisheries.noaa.gov/feature-story/12-shark-facts-may-surprise-you" className="underline text-white links opacity-0 -translate-x-24" >Know More</a>
                    </div>
                </div>
            </section>

            <section className="w-[75vw] flex flex-col items-center p-16 gap-14">
                <div className="flex w-full justify-between gap-16 mt-8 facts opacity-0 -translate-x-24">
                    <div className="w-[20vw] shadow-black shadow-xl bg-white -rotate-[25deg] translate-y-24 opacity-0" id="img">
                        <img src={sharkfact} alt="" />
                    </div>
                    <div className="flex w-[35vw] flex-col justify-self-end items-center justify-center text-center">
                        <h1 className="font-bold text-[40px] text-white facts opacity-0 -translate-x-24" >Blue sharks are really blue.</h1>
                        <a href="https://www.fisheries.noaa.gov/feature-story/12-shark-facts-may-surprise-you" className="underline text-white links opacity-0 -translate-x-24" >Know More</a>
                    </div>
                </div>
            </section>

            <section className="w-[75vw] flex flex-col items-center p-16 gap-14">
                <div className="flex w-full flex-row-reverse justify-between gap-16 mt-8">
                    <div className="w-[20vw] shadow-black shadow-xl bg-white rotate-[25deg] translate-y-24 opacity-0" id="img">
                        <img src={sharkfact} alt="" />
                    </div>
                    <div className="flex w-[35vw] flex-col justify-self-end items-center justify-center text-center">
                        <h1 className="font-bold text-[40px] text-white facts opacity-0 -translate-x-24" >Each whale shark’s spot pattern is unique as a fingerprint.</h1>
                        <a href="https://www.fisheries.noaa.gov/feature-story/12-shark-facts-may-surprise-you" className="underline text-white links opacity-0 -translate-x-24" >Know More</a>
                    </div>
                </div>
            </section>
        </main>
    );

}