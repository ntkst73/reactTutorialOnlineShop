import {combineReducers} from 'redux';
import filterReduser from './/filters';
import pizzaReduser from './pizza'

const rootReduser = combineReducers({
    filter: filterReduser,
    pizzas: pizzaReduser,
});

export default rootReduser;