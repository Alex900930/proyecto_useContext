import React from 'react';
import { useContext } from 'react';
import {Contexto} from './contexto/Contexto';

function Pagina2() {
    const {color} = useContext(Contexto)
  return (
    <div className='hijo' style={{backgroundColor: color}}> 
    Pagina2
    </div>
    
  )
}

export default Pagina2