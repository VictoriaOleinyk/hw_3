import React from 'react';



function formReducer(state = {}, action) {
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

export default formReducer()