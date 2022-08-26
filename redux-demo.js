const redux = require('redux');

const counterReducer = (state = {counter:0}, action) => {
    if(action.type === 'INCREMENT') {
        return {
            counter: state.counter + 5
        }
    } else if (action.type === "DECREMENT") {
        return {
            counter: state.counter - 5
        }
    }
}


const store = redux.createStore(counterReducer);

console.log(store.getState)

const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState);
}

store.subscribe(counterSubscriber);

store.dispatch({ type: 'INCREMENT'})
store.dispatch({ type: 'INCREMENT'})
store.dispatch({ type: 'INCREMENT'})
store.dispatch({ type: 'INCREMENT'})
store.dispatch({ type: 'INCREMENT'})
store.dispatch({ type: 'DECREMENT'})
