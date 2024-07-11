const ADD_NAME = 'ADD_NAME';
const REMOVE_NAME = 'REMOVE_NAME';
const LOAD_NAMES = 'LOAD_NAMES';

const initState = {
    names:['']
};

export default function (state = initState, action){
    switch(action.type){
        case ADD_NAME: {
            return {
                ...state, 
                names: [action.name, ...state.names]
            };
        }
        case REMOVE_NAME: {
            const updatedNames = state.names.filter(item => item.name !== action.name);
            return {
                ...state,
                names: updatedNames
            };
        }
        case LOAD_NAMES: {
            return {
                ...state,
                names: action.names
            };
        }
        default:{
            return state;
        }
    }
}

export const addName = (name) => {
    return(dispatch) => {
        return dispatch({type: ADD_NAME, name});
    };
};

export const removeName = (name) => {
    return(dispatch) => {
        return dispatch({type: REMOVE_NAME, name});
    };
};

export const loadNames = (names) => {
    return {
        type: LOAD_NAMES,
        names
    };
};
