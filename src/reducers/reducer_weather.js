import {FETCH_WEATHER} from '../actions/index';

export default function(state = [], action) {
    // return state;
    switch(action.type){
        case FETCH_WEATHER:
        // não podemos modificar/manipular o estado (state) state.push([action.payload.data]), portanto, utilizando o concat
        // ele apenas é concatenado ao retorno, sem modificar o objeto state;
        // nesse caso, a ação de concatenar se dá por conta de querermos exibir as cidades de forma acumulada na tabela
        return state.concat([ action.payload.data ]);

        default:
            return state;
    }
}