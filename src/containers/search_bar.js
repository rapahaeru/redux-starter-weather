import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = { term: '' };
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        this.setState({ term: event.target.value});
    }

    onFormSubmit(event){
        event.preventDefault();

        this.props.fetchWeather(this.state.term);
        //agora aqui vamos pegar os dados da previsao do tempo
        this.setState({ term: '' });
    }


    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                    placeholder="busque a previsão do tempo de 5 dias das suas cidades favoritas" 
                    className="form-control" 
                    onChange={ this.onInputChange }
                    value={ this.state.term }
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchWeather: fetchWeather
    }, dispatch);
}

// setado null no primeiro argumento pois o mesmo é reservado para o mapStateToProps,
// nao sera usado pois nao precisamos manipular nenhum estado aqui
export default connect(null, mapDispatchToProps)(SearchBar);