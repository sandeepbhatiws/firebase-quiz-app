import React from 'react'
import Header from './Common/Header'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getDatabase, ref, set } from "firebase/database";
import { app } from '../config/firebase';

export default function AddQuiz() {
    
    let quizHandler = (event) => {
        event.preventDefault();

        if(event.target.question.value == '' || event.target.option1.value == "" || event.target.option2.value == "" || event.target.option3.value == "" || event.target.option4.value == "" || event.target.correct_answer.value == ""){
            toast.error('Required field missing !!')
        } else {
            let obj = {
                question : event.target.question.value,
                option1 : event.target.option1.value,
                option2 : event.target.option2.value,
                option3 : event.target.option3.value,
                option4 : event.target.option4.value,
                correct_answer : event.target.correct_answer.value,
            }

            const db = getDatabase(app);
            set(ref(db, 'quizzes/' + Date.now()), obj);

            toast.success('Quiz added successfully !!');

            event.target.question.value = ''
            event.target.option1.value = ''
            event.target.option2.value = ''
            event.target.option3.value = ''
            event.target.option4.value = ''
            event.target.correct_answer.value = ''
        }
        

        

    }
  return (
        <>
            <Header/>
            <ToastContainer/>
            <div class="bg-indigo-100 py-6 md:py-12">
                <div class="container px-4 mx-auto">
                    <div class="text-center max-w-2xl mx-auto">
                        <h1 class="text-3xl md:text-4xl font-medium mb-2">Add Quiz</h1>
                    </div>
                </div>
            </div>
            <div class=" min-h-screen flex items-center">
                <div class="w-full">
                    <div class="bg-white p-5 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
                        <form action="" onSubmit={quizHandler}>
                            <div class="mb-5">
                                <label for="question" class="block mb-2 font-bold text-gray-600">Question</label>
                                <input type="textarea" id="question" name="question" placeholder="Enter Question" class="border border-gray-300 shadow p-3 w-full rounded mb-"/>
                            </div>

                            <div class="mb-5">
                                <label for="option1" class="block mb-2 font-bold text-gray-600">Option 1</label>
                                <input type="text" id="option1" name="option1" placeholder="Enter Option 1" class="border border-gray-300 shadow p-3 w-full rounded mb-"/>
                            </div>

                            <div class="mb-5">
                                <label for="option2" class="block mb-2 font-bold text-gray-600">Option 2</label>
                                <input type="text" id="option2" name="option2" placeholder="Enter Option 2" class="border border-gray-300 shadow p-3 w-full rounded mb-"/>
                            </div>

                            <div class="mb-5">
                                <label for="option3" class="block mb-2 font-bold text-gray-600">Option 3</label>
                                <input type="text" id="option3" name="option3" placeholder="Enter Option 3" class="border border-gray-300 shadow p-3 w-full rounded mb-"/>
                            </div>

                            <div class="mb-5">
                                <label for="option4" class="block mb-2 font-bold text-gray-600">Option 4</label>
                                <input type="text" id="option4" name="option4" placeholder="Enter Option 4" class="border border-gray-300 shadow p-3 w-full rounded mb-"/>
                            </div>

                            <div class="mb-5">
                                <label for="correct_answer" class="block mb-2 font-bold text-gray-600">Correct Answer</label>
                                <input type="text" id="correct_answer" name="correct_answer" placeholder="Enter Correct Answer" class="border border-gray-300 shadow p-3 w-full rounded mb-"/>
                            </div>

                            <button class="block w-full bg-blue-500 text-white font-bold p-4 rounded-lg">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
  )
}
