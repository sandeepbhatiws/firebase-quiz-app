import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import PlayQuiz from './Componets/PlayQuiz.jsx';
import AddQuiz from './Componets/AddQuiz.jsx';
import ViewQuiz from './Componets/ViewQuiz.jsx';
import Home from './Componets/Home.jsx';
import Login from './Componets/Login.jsx';
import Signup from './Componets/Signup.jsx';
import Context from './Componets/Context/Context.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "play-quiz",
    element: <PlayQuiz/>,
  },
  {
    path: "add-quiz",
    element: <AddQuiz/>,
  },
  {
    path: "view-quiz",
    element: <ViewQuiz/>,
  },
  {
    path: "login",
    element: <Login/>,
  },
  {
    path: "signup",
    element: <Signup/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Context>
      <RouterProvider router={router} />
    </Context>
  </React.StrictMode>,
)
