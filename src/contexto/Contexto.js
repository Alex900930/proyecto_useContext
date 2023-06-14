import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'

export const  Contexto = createContext();

export const Datos = ({ children }) => {
  const [color, setColor] = useState("gold");
  return (
    <Contexto.Provider value={{color, setColor}}>
      {children}
    </Contexto.Provider>
  )
} 