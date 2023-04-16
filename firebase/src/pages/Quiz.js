import React, { useState } from 'react'
import '../styles/pages/Quiz.css'
import questions from "../Data/QuizData"
import QuizResult from './QuizResult'
import Confetti from 'react-confetti'

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score,setScore]=useState(0)
    const [CorrectAns,setCorrectAns]=useState(0)
    const [showResult,setShowResult]= useState(false);
    const [clicked, setClicked]= useState(false)
    const handleAnswrOption=(isCorrect)=>{
        if(isCorrect){
            setScore(score+10);
            setCorrectAns(CorrectAns+1);

        }
        setClicked(true)
    }
    const handleNextOption=()=>{
        const nextQuestion=currentQuestion+1;
        if(nextQuestion<questions.length){
            setCurrentQuestion(nextQuestion);
        }else{
            setShowResult(true);
        }
    };
    const handlePlayAgain=()=>{
        setCurrentQuestion(0)
        setScore(0)
        setCorrectAns(0)
        setShowResult(false)

    }

    

  return (
    <>
    <div className='app'>
        {score===100 ? <Confetti/> : ''}
        <span className='indirim'>{score===100 ? "Tebrikler kitap sitelerinde kullanabileceğiniz indirim kodu kazandınız:    bilindirim%50" : ""}</span>
        {showResult?(<QuizResult score={score} CorrectAns={CorrectAns} handlePlayAgain={handlePlayAgain}/>):(<>
        <div className='question-section'>
            <h5>Puanınız: {score}</h5>
            <div className='question-count'>
                <span>Soru {currentQuestion+1}/{questions.length}</span>
            </div>
            <div className='question-text'>{questions[currentQuestion].questionText}
            </div>
        </div>
        <div className='answer-section'>
{questions[currentQuestion].answerOptions.map((ans,i)=>{
return <button 
 key={i} onClick={()=>handleAnswrOption(ans.isCorrect)}>{ans.answerText}</button>

})}
            
            <div className='actions'>
            <button onClick={handlePlayAgain}>Başa Dön</button>
            <button  onClick={handleNextOption}>Sonraki</button>
        </div>
        </div>
        </>)}

        
        
    </div>
    </>
  )
}

export default Quiz