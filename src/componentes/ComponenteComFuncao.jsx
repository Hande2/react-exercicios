import React from 'react'

const aprovados = ['Paula', 'Roberta', 'Gustavo']

export default props => {
    let num = Math.random()
    const gerarItens = itens => {
        return itens.map(item => <li>{item}</li>)
    }

    return(
        <ul>
            {num}
            {gerarItens(aprovados)}
        </ul>
    )
}