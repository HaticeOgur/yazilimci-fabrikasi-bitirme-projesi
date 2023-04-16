import React, { useState } from 'react'
import questions from '../Data/QuizData'
const QuizResult = (props) => {
    
    
   
  return (
    <div className='score-section'>
         
        <h2>Tamamlandı!</h2>
        <h4>Toplam Puanınız {props.score}/100</h4>
        <h4>Doğru Sorunuz {props.CorrectAns}/{questions.length}</h4>
        <button onClick={props.handlePlayAgain}>Tekrar Dene</button>
      

       

       
        
    </div>
  )
}

export default QuizResult