import Navbar from "../Components/Navbar";
import { useState } from 'react'

const QUIZ_QUESTIONS = [
   {
      Question: "Which is the largest of all sharks?",
      Answers: [
          { Answer: "Great White Shark", isCorrect: false },
          { Answer: "Whale Shark", isCorrect: true },
          { Answer: "Bull Shark", isCorrect: false },
          { Answer: "Tiger Shark", isCorrect: false }
      ]
   },
   {
      Question: "Sharks have existed for approximately how long?",
      Answers: [
          { Answer: "350 Million Years", isCorrect: true },
          { Answer: "10000 Years", isCorrect: false },
          { Answer: "1 Million Years", isCorrect: false },
          { Answer: "10 Million Years", isCorrect: false }
      ]
   },
   {
      Question: "What unusual thing can the bull shark do?",
      Answers: [
          { Answer: "Survive in fresh water", isCorrect: true },
          { Answer: "Survive out of fresh water", isCorrect: false },
          { Answer: "Eat seaweed", isCorrect: false },
          { Answer: "Talk", isCorrect: false }
      ]
   },
   {
      Question: "What are baby sharks called?",
      Answers: [
          { Answer: "Cubs", isCorrect: false },
          { Answer: "Sharklings", isCorrect: false },
          { Answer: "Fry", isCorrect: false },
          { Answer: "Pups", isCorrect: true }
      ]
   },
   {
      Question: "What are shark skeletons made of?",
      Answers: [
          { Answer: "Bone", isCorrect: false },
          { Answer: "Cartilage", isCorrect: true },
          { Answer: "Keratin", isCorrect: false },
          { Answer: "They don't have a team", isCorrect: false }
      ]
   }
]

const Quiz = () => {
   const [currentQuestion, setCurrentQuestion] = useState(0);
   const [score, setScore] = useState(0);
   const [showScore, setShowScore] = useState(false);
   const handleAnswerResponse=(isCorrect)=>
   {
      if(isCorrect)
      {
          setScore(score+1);
      }

      const nextQuestion= currentQuestion+1;
      if(nextQuestion<QUIZ_QUESTIONS.length)
      {
       setCurrentQuestion(nextQuestion);
      }
      else{
       setShowScore(true);
      }
   }
   const resetQuiz=()=>
   {
      setCurrentQuestion(0);
      setScore(0);
      setShowScore(false);
   }
   return(
      <main className="bg-normal bg-no-repeat bg-cover bg-fixed w-full flex items-center justify-center min-h-screen text-white relative">
         <Navbar />
         <section className="grid">
            <div className="flex flex-col h-full w-[50vw] rounded-3xl items-center justify-between bg-gradient-to-t from-[#07394B]/40 to-[#091B24]/30 border-[#6EE9FF] border-2 bg-[#064550]/40 mt-8 ">
               <h3 className="p-4 text-4xl text-[#CDEFFF] border-[#6EE9FF] border-b-2 w-full font-semibold text-center">Quiz Time</h3>
               {showScore ? (
                  <div className='flex flex-col mb-10 text-center'>
                     <p className="text-2xl">You have scored {score} out of {QUIZ_QUESTIONS.length}</p>
                     <button className="bg-[#1F78A1] font-semibold px-24 py-2 rounded-md border-[1px] mt-8 hover:bg-[#165370] duration-300" type="submit" onClick={resetQuiz}>Play Again!!</button>
                  </div>
               ) : (
                  <>
                     <h2 className="text-3xl text-[#70D9FF] text-center py-12 font-semibold tracking-wide">{QUIZ_QUESTIONS[currentQuestion].Question}</h2>
                     <div className="grid grid-cols-2 gap-x-10 px-10 gap-y-10 w-full pb-10">
                        {QUIZ_QUESTIONS[currentQuestion].Answers.map((answer)=>
                           (
                              <button className="border-[#6EE9FF] border-2 rounded-full p-2 text-[#70D9FF] font-semibold transform transition duration-500 hover:scale-105 hover:bg-[#6EE9FF] hover:text-black" onClick={()=>handleAnswerResponse(answer.isCorrect)}>{answer.Answer}</button>
                           ))}
                     </div>
                     <div className="text-xl rounded-[15px] px-3 py-1  text-[#6EE9FF]  mb-8">
                        <p id="p-number">{currentQuestion+1}<span>/{QUIZ_QUESTIONS.length}</span></p>
                     </div>
                  </>
               )}
            </div>
         </section>
      </main>
   )
}


export default Quiz