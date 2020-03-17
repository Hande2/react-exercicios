import React, { Component } from 'react'


export default class Contador extends Component {
    // constructor (props){
    //     super (props)
    //     this.maisUm = this.maisUm.bind(this)
    // }

    state = {
        numero: 0
    }
    
    maisUm = () => {
        this.setState({ numero: this.state.numero + 1})
        // this.state.numero = this.state.numero + 1
    }

    menosUm = () => {
        this.setState({ numero: this.state.numero - 1})
    }

    render () {
        return (
            <div>
                <div>Número: {this.state.numero}</div>
                <button onClick={this.maisUm}>Incrementar</button>
                <button onClick={this.menosUm}>Desincrimentar</button>
            </div>
        )
    }
}

