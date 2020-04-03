import React, { Component } from 'react';

class Formulario extends Component {

    constructor(props) {
        super(props);

        this.stateInicial = {
            nome: '',
            livro: '',
            preco: ''
        }
        this.state = this.stateInicial;
    }

    escutadorDeImput = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    }

    submitFormulario = () => {
        this.props.escutadorDeSubmit(this.state);
        this.setState(this.stateInicial);
    }

    render() {

        const { nome, livro, preco } = this.state;

        return (
            <form>
                <div className="row">

                    <div className="input-field col s4">
                        <label htmlFor="nome" className="input-field">Nome</label>
                        <input
                            className="validate"
                            id="nome"
                            type="text"
                            name="nome"
                            value={nome}
                            onChange={this.escutadorDeImput}
                        />
                    </div>
                    <div className="input-field col s4">
                        <label htmlFor="livro" className="input-field">Livro</label>
                        <input
                            className="validate"
                            id="livro"
                            type="text"
                            name="livro"
                            value={livro}
                            onChange={this.escutadorDeImput}
                        />
                    </div>
                    <div className="input-field col s4">
                        <label htmlFor="preco" className="input-field">Preço</label>
                        <input
                            className="validate"
                            id="preco"
                            type="text"
                            name="preco"
                            value={preco}
                            onChange={this.escutadorDeImput}
                        />
                    </div>

                </div>
                <button className="waves-effect waves-light btn indigo lighten-2" onClick={this.submitFormulario} type="button">Salvar</button>
            </form>
        );
    }
}
export default Formulario;