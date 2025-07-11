import React from 'react';
import { useState } from 'react';

const Informacion = () => {
    const [msj, setMsj] = useState("")

    const mostrarMensaje = ()=>{
        setMsj("(from changed state)")
    }

    return (
        <>
    <span> my friend <span>{msj}</span>!</span>
    <br /><button onClick={mostrarMensaje}>Click me</button>
    </>
    );
}

export default Informacion;