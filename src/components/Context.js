import {createContext , useEffect, useState, } from 'react';
 import { API } from './global';
export const MyContext = createContext();

function AppContext({children}) {

    const[user,setUser]=useState(null);

    useEffect(() => {
        let email = localStorage.getItem("email")
        if(email){
          fetch(`${API}/users/getDetails/${email}`)
          .then((data) => data.json())
          .then((data) => {setUser(data)})
        }
      },[])

    return(
        <MyContext.Provider value={{user,setUser}}>{children}</MyContext.Provider>
    );
}
export default AppContext;