import React from 'react';
import { useContext } from 'react';
import {Contexto} from './contexto/Contexto';

function Pagina1() {
    const {color} = useContext(Contexto)
  return (
    <div className='hijo' style={{backgroundColor: color}}> 
    Pagina1
    </div>
    
  )
}

export default Pagina1