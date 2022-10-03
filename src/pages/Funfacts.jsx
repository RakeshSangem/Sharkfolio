import Navbar from "../Components/Navbar";
import FunFacts1 from "../Components/FunFacts1.component";
import FunFacts2 from "../Components/FunFacts2.component";

import { gsap } from "gsap";
import { useRef, useEffect } from "react";


const Funfacts = () => {
    const main = useRef(null)
    const q = gsap.utils.selector(main);

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
            <FunFacts1 facts="Sharks do not have bones." />
            <FunFacts2 facts="Most sharks have good eyesight." />
            <FunFacts1 facts="Sharks have special electroreceptor organs." />
            <FunFacts2 facts="Shark skin feels similar to sandpaper." />
            <FunFacts1 facts="Sharks can go into a trance." />
            <FunFacts2 facts="Sharks have special electroreceptor organs." />
            <FunFacts1 facts="Sharks have been around a very long time." />
            <FunFacts2 facts="Scientists age sharks by counting the rings on their vertebrae." />
            <FunFacts1 facts="Blue sharks are really blue." />
            <FunFacts2 facts="Each whale shark's spot pattern is unique as a fingerprint." />
        </main>
    );
}

export default Funfacts