const initialState = {
    count: 0
}

export const reducers = (state=initialState, action) => {
    switch(action.type){
        case 'INCREMENT':
            return state.count+1;
       case 'DECREMENT':
            return state.count-1;
        default: 
        return state;
    }
}