const redux = require('redux');
const createStore = redux.createStore;



//! Action
const CAKE_ORDERED = 'CAKE_ORDERED';

const orderCake = () => {
    return {
        type: CAKE_ORDERED,
        quantity: 1
    }
}


//! Reducer
const initialState = {
    numberOfCakes: 10
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                numberOfCakes: state.numberOfCakes - 1
            }
        default:
            return state;
    }
}


//! Store
const store = createStore(reducer);
console.log('Initial state: ', store.getState());

const unsubscribe = store.subscribe(() => console.log('Updated state: ', store.getState()));

store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());

unsubscribe();