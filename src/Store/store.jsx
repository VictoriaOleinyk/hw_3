import { createStore } from 'redux';

// Создаем редьюсер
function reducer(state = {}, action) {
    switch (action.type) {
        case 'UPDATE_NAME':
            return { ...state, name: action.payload };
        case 'UPDATE_AGE':
            return { ...state, age: action.payload };
        case 'UPDATE_GENDER':
            return { ...state, gender: action.payload };
        default:
            return state;
    }
}

// Создаем store
const store = createStore(reducer);

export default store;