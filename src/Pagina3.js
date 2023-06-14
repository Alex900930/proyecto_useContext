import React from 'react';
import { useContext } from 'react';
import {Contexto} from './contexto/Contexto';

function Pagina3() {
    const {color} = useContext(Contexto)
  return (
    <div className='hijo' style={{backgroundColor: color}}> 
    Pagina3
    </div>
    
  )
}

export default Pagina3