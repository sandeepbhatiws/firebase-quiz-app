import React, { createContext, useEffect, useState } from 'react'

let CommonContext = createContext();

export default function Context({children}) {

    let [isUserLogin, setUserLogin] = useState(false);

    let allContext = {isUserLogin, setUserLogin};

    useEffect(()=> {
        var firebaseUser = localStorage.getItem('firebase_user');

        console.log(firebaseUser);
        if(firebaseUser != null){
            setUserLogin(true);
        }
    })
    
    return (
        <>
            <CommonContext.Provider value={allContext}>
                { children }
            </CommonContext.Provider>
        </>
    )
}

export { CommonContext };
