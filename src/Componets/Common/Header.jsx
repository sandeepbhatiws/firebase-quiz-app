import React, { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Logo from '../../assets/images/wscube-tech-logo.svg';
import { CommonContext } from '../Context/Context';

export default function Header({currentURL}) {

    let {isUserLogin, setUserLogin} = useContext(CommonContext);

    let navigate = useNavigate();

    let logout = () => {
        localStorage.removeItem('firebase_user');
        setUserLogin(false);
        navigate('/');
    }
  
    return (
        <>
            <div class="header-2">

                <nav class="bg-white py-2 md:py-4">
                    <div class="container px-4 mx-auto md:flex md:items-center">

                        <div class="flex justify-between items-center">
                        <Link to="/" class="font-bold text-xl text-indigo-600">
                            <img src={Logo} width={150} />
                        </Link>

                        <button class="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden" id="navbar-toggle">
                            <i class="fas fa-bars"></i>
                        </button>
                        </div>

                        <div class="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0" id="navbar-collapse">
                        
                        <Link to="/" className={`p-2 lg:px-4 md:mx-2 rounded ${ (currentURL == 'Home') ? 'text-white bg-indigo-600' : 'text-gray-600 hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300' } `}>Home</Link>



                        <Link to="/play-quiz" className={`p-2 lg:px-4 md:mx-2 rounded ${ (currentURL == 'Play Quiz') ? 'text-white bg-indigo-600' : 'text-gray-600 hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300' } `}>Play Quiz</Link>
                        
                        <NavLink to="/add-quiz"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-white bg-indigo-600 p-2 lg:px-4 md:mx-2 rounded" : "text-gray-600 hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300 p-2 lg:px-4 md:mx-2 rounded"
                            }>Add Quiz</NavLink>

                        <NavLink to="/view-quiz" className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-white bg-indigo-600 p-2 lg:px-4 md:mx-2 rounded" : "text-gray-600 hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300 p-2 lg:px-4 md:mx-2 rounded"
                            }>View Quiz</NavLink>

                        {/* <Link to="/login" class="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-transparent rounded hover:bg-indigo-100 hover:text-indigo-700 transition-colors duration-300">Login</Link> */}
                        
                        {
                            (isUserLogin)
                            ?
                            (<div class="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-solid border-indigo-600 rounded hover:bg-indigo-600 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1" onClick={logout}>Logout</div>)
                            :
                            (<Link to="/signup" class="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-solid border-indigo-600 rounded hover:bg-indigo-600 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1">Signup</Link>)
                        }
                        

                        
                        </div>
                    </div>
                </nav>

                

            </div>  
        </>
  )
}
