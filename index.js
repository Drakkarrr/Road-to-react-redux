const redux = require('redux');
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;
const combinedReducers = redux.combineReducers



//! Action
const CAKE_ORDERED = 'CAKE_ORDERED';
const CAKE_RESTOCKED = 'CAKE_RESTOCKED';

const ICECREAM_ORDERED = 'ICECREAM_ORDERED';
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED';

const orderCake = () => {
    return {
        type: CAKE_ORDERED,
        payload: 1
    }
}


const restockCake = (qty = 1) => {
    return {
        type: CAKE_RESTOCKED,
        payload: qty
    }
}

const orderIcecream = (qty = 1) => {
    return {
        type: ICECREAM_ORDERED,
        payload: qty
    }
}

const restockIcecream = (qty = 1) => {
    return {
        type: ICECREAM_RESTOCKED,
        payload: qty
    }
}


//! Reducer
const initialCakeState = {
    numberOfCakes: 10
}

const initialIceCreamState = {
    numberOfIcecreams: 20
}

const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                numberOfCakes: state.numberOfCakes - 1
            }

        case CAKE_RESTOCKED:
            return {
                ...state,
                numberOfCakes: state.numberOfCakes + action.payload
            }
        default:
            return state;
    }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
        case ICECREAM_ORDERED:
            return {
                ...state,
                numberOfIcecreams: state.numberOfIcecreams - 1
            }
        case ICECREAM_RESTOCKED:
            return {
                ...state,
                numberOfIcecreams: state.numberOfIcecreams + action.payload
            }
        default:
            return state;
    }
}

//! Store
const rootReducer = combinedReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

const store = createStore(rootReducer);
console.log('Initial state: ', store.getState());

const unsubscribe = store.subscribe(() => console.log('Updated state: ', store.getState()));

const actions = bindActionCreators({ orderCake, restockCake, orderIcecream, restockIcecream }, store.dispatch);
actions.orderCake();
actions.orderIcecream()

actions.restockCake(2);
actions.restockIcecream(7);

unsubscribe();