import React, { useState, useEffect } from 'react'
import Header from './Common/Header'
import { getDatabase, ref, onValue } from "firebase/database";
import { app } from '../config/firebase';

export default function PlayQuiz() {
    let [currentURL, setCurrentURL ] = useState('Play Quiz');

    let [quizData, setQuizData] = useState([]);

    

    useEffect(() => {
        const db = getDatabase(app);
        const starCountRef = ref(db, 'quizzes/');
        onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
            var quizOutput = [];
            for(let key in data){
                quizOutput.push(data[key]);
            }
            setQuizData(quizOutput);
        });
    },[]);
    
  return (
        <>
            <Header currentURL={currentURL}/>
            <div class="bg-indigo-100 py-6 md:py-12">
                <div class="container px-4 mx-auto">
                    <div class="text-center max-w-2xl mx-auto">
                        <h1 class="text-3xl md:text-4xl font-medium mb-2">Play Quiz</h1>
                    </div>
                </div>
            </div>
            <div class=" min-h-screen flex items-center">
                <div class="w-full">

                    {
                        quizData.map((quiz,index) =>{
                            return(
                                <Quiz quiz={quiz} index={index}/>
                            );
                        })
                    }

                    
                </div>
            </div>
        </>
  )
}


function Quiz({quiz,index}){

    let [givenAnswer, setGivenAnswer] = useState('');
    let [correctAnswer, setCorrectAnswer] = useState('');
    
    var finalCorrectAnswer = '';

    if(quiz.correct_answer.trim() == 'A' || quiz.correct_answer.trim() == 'a'){
        var finalCorrectAnswer = quiz.option1.trim();
    } else if(quiz.correct_answer.trim() == 'B' || quiz.correct_answer.trim() == 'b'){
        var finalCorrectAnswer = quiz.option2.trim();
    } else if(quiz.correct_answer.trim() == 'C' || quiz.correct_answer.trim() == 'c'){
        var finalCorrectAnswer = quiz.option3.trim();
    } else if(quiz.correct_answer.trim() == 'D' || quiz.correct_answer.trim() == 'd'){
        var finalCorrectAnswer = quiz.option4.trim();
    }

    return(
        <div key={index} class="m-6 bg-white border border-gray-300 shadow p-3 p-5 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
            <div class="mb-5">
                <div class="border font-bold text-[20px] border-gray-300 shadow p-3 w-full rounded mb-"> {index+1}. {quiz.question} </div>
            </div>

            <div class="mb-5">
                <div class={`border border-gray-300 shadow p-3 w-full rounded mb- 
                ${
                    (quiz.option1.trim() == givenAnswer) ? 'bg-green-600' : 
                    ''
                    }

                    ${
                    (givenAnswer == 1) ?
                    'bg-red-600' 
                    :
                    ''
                    }

                    ${
                    (correctAnswer == quiz.option1.trim()) ?
                    'bg-green-600' 
                    :
                    ''
                    }

                `} 
                onClick = { 
                    (event) => {
                        var cAns = event.target.innerHTML.trim();

                        if(finalCorrectAnswer == cAns){
                            setGivenAnswer(quiz.option1.trim())
                        } else {
                            setGivenAnswer(1);
                        }
                        setCorrectAnswer(finalCorrectAnswer);
                    }    
                }
                > {quiz.option1} </div>
            </div>

            <div class="mb-5">
                <div class={`border border-gray-300 shadow p-3 w-full rounded mb- 
                ${
                    (quiz.option2.trim() == givenAnswer) ? 'bg-green-600' : 
                    ''
                    }

                    ${
                    (givenAnswer == 2) ?
                    'bg-red-600' 
                    :
                    ''
                    }

                    ${
                    (correctAnswer == quiz.option2.trim()) ?
                    'bg-green-600' 
                    :
                    ''
                    }

                `} 
                onClick = { 
                    (event) => {
                        var cAns = event.target.innerHTML.trim();

                        if(finalCorrectAnswer == cAns){
                            setGivenAnswer(quiz.option2.trim())
                        } else {
                            setGivenAnswer(2);
                        }
                        setCorrectAnswer(finalCorrectAnswer);
                    }    
                }
                > {quiz.option2} </div>
            </div>

            <div class="mb-5">
                <div class={`border border-gray-300 shadow p-3 w-full rounded mb- 
                ${
                    (quiz.option3.trim() == givenAnswer) ? 'bg-green-600' : 
                    ''
                    }

                    ${
                    (givenAnswer == 3) ?
                    'bg-red-600' 
                    :
                    ''
                    }

                    ${
                    (correctAnswer == quiz.option3.trim()) ?
                    'bg-green-600' 
                    :
                    ''
                    }

                `} 
                onClick = { 
                    (event) => {
                        var cAns = event.target.innerHTML.trim();

                        if(finalCorrectAnswer == cAns){
                            setGivenAnswer(quiz.option3.trim())
                        } else {
                            setGivenAnswer(3);
                        }
                        setCorrectAnswer(finalCorrectAnswer);
                    }    
                }
                > {quiz.option3} </div>
            </div>

            <div class="mb-5">
                <div class={`border border-gray-300 shadow p-3 w-full rounded mb- 
                ${
                    (quiz.option4.trim() == givenAnswer) ? 'bg-green-600' : 
                    ''
                    }

                    ${
                    (givenAnswer == 4) ?
                    'bg-red-600' 
                    :
                    ''
                    }

                    ${
                    (correctAnswer == quiz.option4.trim()) ?
                    'bg-green-600' 
                    :
                    ''
                    }

                `} 
                onClick = { 
                    (event) => {
                        var cAns = event.target.innerHTML.trim();

                        if(finalCorrectAnswer == cAns){
                            setGivenAnswer(quiz.option4.trim())
                        } else {
                            setGivenAnswer(4);
                        }
                        setCorrectAnswer(finalCorrectAnswer);
                    }    
                }
                > {quiz.option4} </div>
            </div>
        </div>
    )
}