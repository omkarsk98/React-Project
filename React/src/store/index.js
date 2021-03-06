import { createStore } from 'redux';

//defining th initial state
const initialState = {
    count: 3
};

const reducer = (state = initialState, action) => {
    //console.log('Reducer running-->', action);

    switch (action.type) {
        case 'INCREMENT':
            return Object.assign({}, state, { count: state.count + 1 });
        default:
            return state;
    }

    return state;
}

const store = createStore(reducer);

export default store;