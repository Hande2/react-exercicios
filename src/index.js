import React from 'react'
import ReactDOM from 'react-dom'
// import PrimeiroComponente from './componentes/PrimeiroComponente'
// import { CompA, CompB as B } from './componentes/SegundoComponente'
// import MultiElemen from './componentes/MultiElementos'
// import Familia from './componentes/FamiliaSilva'
// import Fa from './componentes/Familia'
// import Membro from './componentes/Membro'
// import CompFun from './componentes/ComponenteComFuncao'
// import Pai from './componentes/Pai'
// import CompClass from './componentes/ComponenteClasse'
// import Contador from './componentes/Contador'
import Contador from './componentes/Hook'
import Hook from './componentes/Hook'

const elemento = document.getElementById('root')

ReactDOM.render(
    <div>
        <Hook contador={3} />
        {/* <Contador numeroInicial={100}/> */}
        {/* <CompClass/> */}
        {/* <Pai/> */}
        {/* <CompFun/>
        <CompFun/>
        <Fa sobrenome="Silva"> 
            <Membro nome="Randerson" /> 
            <Membro nome="Rayssa" />
        </Fa> */}
        {/* <Familia sobrenome="Silva" /> */}
        {/* <MultiElemen/> */}
        {/* <CompA valor="Olá exercicio 2 CompA"/>
        <B valor="Olá exercicio 2 CompB"/> */}
    </div>
,elemento)



// ReactDOM.render(<PrimeiroComponente valor = "OLá marilene" abc = {1234}/>, elemento)
