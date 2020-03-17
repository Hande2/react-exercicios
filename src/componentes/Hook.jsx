import React, {useState, useReducer, useEffect} from 'react'

export default props => {
    const [contador, setContador] = useState(props.contador)
    const [status, setStatus] = useState('Par')
    
    
    useEffect(() => {
        contador % 2 === 0 ? setStatus('Par') : 
        setStatus('Impar')
    })

    return (
        <div>
            <h1>{contador}</h1>
            <h2>{status}</h2>
            <button onClick={() => setContador( contador + 5)}>Inc</button>
        </div>
    )
}