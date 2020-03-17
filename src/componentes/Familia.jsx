import React from 'react'
import { filhosComProps } from '../utils/utils'

export default props =>
    <div>
        <h1>Familia</h1>

        {filhosComProps(props)}
        {/* {React.cloneElement(props.children,
            { sobrenome: props.sobrenome})} */}

        {/* {React.Children.map(props.children, componenteFilho => {
            return React.cloneElement(componenteFilho, {...props})
        })}
         */}
        {/* {React.cloneElement(props.children, {...props})} */}
        {/* {props.children} */}
    </div>