import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from "axios";

const APIContext = createContext();

function Context({children}) {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(
        `https://dummyjson.com/users`
      );
     // console.log(data);
      setUsers(data);
    }
    fetchData();
  }, []);



  return (
    <APIContext.Provider value={{ users }}>
        {children}
    </APIContext.Provider>
  )
}

export default Context;

export function useAPI() {
  const newCont = useContext(APIContext);
  if (newCont === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return newCont;  
};