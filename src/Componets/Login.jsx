import React from 'react'
import Header from './Common/Header'

export default function Login() {
  return (
    <div>
      <Header/>
      <div class="bg-indigo-100 py-6 md:py-12">
        <div class="container px-4 mx-auto">
          <div class="text-center max-w-2xl mx-auto">
            <h1 class="text-3xl md:text-4xl font-medium mb-2">Login</h1>
          </div>
        </div>
      </div>
      <div class="container mx-auto">
        <div class="max-w-md mx-auto shadow-md overflow-hidden shadow-lg m-4">
          <div class="w-full rounded-t-lg bg-green-500 text-lg text-white text-center font-bold px-4 py-4 mb-4">LOGIN</div>
          <div class="py-2 px-4">
            <label class="font-bold block">Email</label>
            <input 
              type="text" 
              placeholder="example@example.com"
              class="bg-gray-200 w-full h-12 p-4 outline-none rounded transition-all focus:bg-gray-100"
              />
          </div>
          <div class="py-2 px-4">
            <label class="font-bold block">Password</label>
            <input 
              type="text" 
              placeholder="******"
              class="bg-gray-200 w-full h-12 p-4 outline-none rounded transition-all focus:bg-gray-100"
              />
          </div>
          <div class="py-2 px-4">
            <button class="bg-green-400 text-white font-bold py-2 px-4 w-full rounded shadow-md transition-all hover:bg-green-500">
            SIGN UP
            </button>
          </div>
          <div class="py-2 px-4 pb-4 text-center">
            <button class="bg-red-500 text-white rounded-full h-10 w-10 m-1 transition-all hover:bg-red-600"><i class="fab fa-google"></i></button>
            <button class="bg-blue-600 text-white rounded-full h-10 w-10 m-1 transition-all hover:bg-blue-700"><i class="fab fa-facebook-f"></i></button>
            <button class="bg-gray-600 text-white rounded-full h-10 w-10 m-1 transition-all hover:bg-gray-700"><i class="fab fa-github"></i></button>
          </div>
        </div>
      </div>
    </div>
  )
}
