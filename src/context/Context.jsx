import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from "axios";

const UserContext = createContext();
const ProductContext = createContext();

function Context({children}) {

  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);

    //For User Page  
    useEffect(() => {
      axios.get('https://dummyjson.com/users')
        .then(response => {
          setUsers(response.data.users);
        })
        .catch(error => {
          console.error("There was an error fetching the users!", error);
        });
    }, []);
    
    //For Product Page
    const getProductData = async() => {
      const response = await axios.get('https://dummyjson.com/products');
      setProducts(response.data.products)
    }

    useEffect(() => {
     getProductData()
    }, [products]);



  return (
    
    <UserContext.Provider value={{ users }}>
       <ProductContext.Provider value={{ products}}>
        {children}
    </ProductContext.Provider>
    </UserContext.Provider>   
    
  )
}

export default Context;

//For users Page
export const UserState = () => {
  return useContext(UserContext);
};

//For Product Page
export const ProductState = () => {
  return useContext(ProductContext);
};

