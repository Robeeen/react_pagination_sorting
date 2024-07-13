import React, { createContext, useReducer } from 'react'
import { prodReducer } from './Reducer'

const DummyJson = createContext();

function Context({children}) {

    const myData = "hello"


  const [ state, dispatch] = useReducer(prodReducer, {
    importData : myData
  });



  return (
    <DummyJson.Provider value={{ state, dispatch }}>
        {children}
    </DummyJson.Provider>
  )
}

export default Context