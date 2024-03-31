let initialState  = {
    result:0,
    idInput:null,
    pwdInput:null,
    auth:false,
    id:null,
    password:null
};



export const Reducer = (state = initialState, action) => {
    switch (action.type){
        case "INCREMENT":
            if (action.payload) return state = {...state, result:state.result+action.payload.num};
            return {...state, result:state.result+1};
        case "DECREMENT":
            if (action.payload) return state = {...state, result:state.result-action.payload.num};
            return {...state, result:state.result-1};
        case "LOGIN":
            console.log(action.payload.id);
            return {...state, id: state.auth ? null : action.payload.id, pwd : state.auth ? null : action.payload.pwd, auth : !state.auth,};
        default:
            return {...state};
    }
}
