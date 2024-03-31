import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {Box} from "./component/Box";
import React from "react";

function App() {
    const count = useSelector(state=> state.count);
    const dispatch = useDispatch();

    const countUp = ()=> {
        // type : action's name,
        // payload : action's parameter (is optional)
        dispatch({type: "INCREMENT", payload:{num:5}});
    }
    const countDown = () => {
        dispatch({type: "DECREMENT"});
    }

    const login = ()=>{
        dispatch({type:"LOGIN", payload:{id:'jki1256',pwd:'123456'}});
    }

    return (
        <div className="App">
            <div>{count}</div>
            <br/>
            <button onClick={countUp}> + count up</button>
            <button onClick={countDown}> - count down</button>
            <button onClick={login}>LOGIN</button>
            <Box/>
        </div>
    );
}

export default App;
