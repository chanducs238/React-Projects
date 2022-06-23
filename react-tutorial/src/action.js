export const incrementCount = (count) => {
    return {type: 'INCREMENT', count};

}

export const decrementCount = (count) => {
    return {type: 'DECREMENT', count};
    
}