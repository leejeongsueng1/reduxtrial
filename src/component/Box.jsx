import {useSelector} from "react-redux";

export const Box = () => {
    const auth = useSelector(state => state.auth);
    const id = useSelector(state => state.id);
    const password = useSelector(state => state.pwd);
    return (
        <>
            <div>Now You are {auth ? "LOGIN" : "LOGOUT"}</div>
            <div>And You're ID : {auth ? id : "No ID"}</div>
            <div>And You're Password : {auth ? password : "No ID"}</div>
        </>

    )
}