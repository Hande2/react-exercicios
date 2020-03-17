import React from 'react'
import Membro from './Membro'

export default props =>
    <div>
        <Membro nome="Randerson" sobrenome={props.sobrenome} />
        <Membro nome="Rayssa" sobrenome={props.sobrenome} />
    </div>