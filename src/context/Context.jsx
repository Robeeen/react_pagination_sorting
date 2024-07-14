import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from "axios";

const APIContext = createContext();

function Context({children}) {

  const [users, setUsers] = useState([]);
  
    useEffect(() => {
      axios.get('https://dummyjson.com/users')
        .then(response => {
          setUsers(response.data.users);
        })
        .catch(error => {
          console.error("There was an error fetching the users!", error);
        });
    }, []);

  return (
    <APIContext.Provider value={{ users }}>
        {children}
    </APIContext.Provider>
  )
}

export default Context;

export const APIState = () => {
  return useContext(APIContext);
};