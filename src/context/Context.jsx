import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from "axios";

const UserContext = createContext();
const ProductContext = createContext();

function Context({children}) {

  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);

    useEffect(() => {
      axios.get('https://dummyjson.com/users')
        .then(response => {
          setUsers(response.data.users);
        })
        .catch(error => {
          console.error("There was an error fetching the users!", error);
        });
    }, []);

    useEffect(() => {
      axios.get('https://dummyjson.com/products')
      .then(response => {
        setProducts(response.data.products);
      })
      .catch(error => {
        console.error("There was an error fetching the users!", error);
      });
    }, []);

  return (
    
    <UserContext.Provider value={{ users }}>
       <ProductContext.Provider value={{ products}}>
        {children}
    </ProductContext.Provider>
    </UserContext.Provider>

    
    
  )
}

export default Context;

export const UserState = () => {
  return useContext(UserContext);
};

export const ProductState = () => {
  return useContext(ProductContext);
};