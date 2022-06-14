const INITIAL_STATE = {
    count: 7,
    lastCount: null,
    counterName: 'First Redux Counter',
}

const counterReducer =  (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'COUNTER_INCREASE': {
            const newState = {...state, count: state.count + 1, lastCount: state.count};
            return newState;
        }    
default:{
    return state;

}


}
}

export default counterReducer;