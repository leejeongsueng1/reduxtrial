let initialState  = {
    count:0,
    auth:false,
    id:null,
    password:null
};



export const Reducer = (state = initialState, action) => {
    switch (action.type){
        case "INCREMENT":
            if (action.payload) return state = {...state, count:state.count+action.payload.num};
            return {...state, count:state.count+1};
        case "DECREMENT":
            return {...state, count:state.count-1};
        case "LOGIN":
            console.log(action.payload.id);
            return {...state, id: state.auth ? null : action.payload.id, pwd : state.auth ? null : action.payload.pwd, auth : !state.auth,};
        default:
            return {...state};
    }
}
