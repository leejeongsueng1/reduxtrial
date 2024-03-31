import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {Box} from "./component/Box";
import React, {useState} from "react";
import {Button, Col, Container, InputGroup, Row, Form} from "react-bootstrap";

function App() {
    const result = useSelector(state=> state.result);
    const auth = useSelector(state => state.auth);

    const [idInput, setIdInput] = useState(null);
    const [pwdInput, setPwdInput] = useState(null);
    const [adder, setAdder] = useState(0);
    const [subber, setSubber] = useState(0);
    const dispatch = useDispatch();

    const onAdderInputChange = (e) =>{
        setAdder(e.target.value);
    }
    const onSubberInputChange = (e)=>{
        setSubber(e.target.value);
    }

    const onIdInputChange = (e) =>{
        setIdInput(e.target.value);
    }
    const onPwdInputChange = (e)=>{
        setPwdInput(e.target.value);
    }
    
    
    const countUp = ()=> {
        // type : action's name,
        // payload : action's parameter (is optional)
        dispatch({type: "INCREMENT", payload:{num:Number(adder)}});
    }
    const countDown = () => {
        dispatch({type: "DECREMENT",payload:{num:Number(subber)}});
    }

    const login = (e)=>{
        e.preventDefault();
        if(!auth){
            dispatch({type:"LOGIN", payload:{id:idInput,pwd:pwdInput}});
            setIdInput("");
            setPwdInput("");
        }else{
            alert("이미 로그인 했습니다.");
        }


    }
    const logout = ()=>{
        if(auth){
            dispatch({type:"LOGIN", payload:{id:null,pwd:null}});
            setIdInput("");
            setPwdInput("");
        }else{
            alert("로그인 상태가 아닙니다.");
        }

    }

    return (
        <Container className="Calculator" fluid={"md"}>
            <hr/>
            <h1 className="Result">{result}</h1>
            <hr/>
            <Row className="pad">
                <Col className="OperButton">
                    <Form>
                        <InputGroup  style={{margin:"5px"}}>
                                    <Form.Control type="number" placeholder="더할 값" onChange={onAdderInputChange}></Form.Control>
                        </InputGroup>
                    </Form>
                </Col>
                <Col className="OperButton">
                    <Form>
                        <InputGroup  style={{margin:"5px"}}>
                                    <Form.Control type="number" placeholder="뺄 값" onChange={onSubberInputChange}></Form.Control>
                        </InputGroup>
                    </Form>
                </Col>
            </Row>
            <Row className="pad">
                <Col className="OperButton" ><Button variant="success"  onClick={countUp}> + count up</Button></Col>
                <Col className="OperButton" ><Button variant="danger" onClick={countDown}> - count down</Button></Col>
            </Row>
            <Row className="pad">
                <Col className="Info"><Box /></Col>
                <Col className="OperButton">
                    <Row>
                        <Form onSubmit={login}>
                            <InputGroup style={{margin:"5px"}}>
                                <Form.Control placeholder="ID" onChange={onIdInputChange} value={idInput}></Form.Control>
                            </InputGroup>
                            <InputGroup style={{margin:"5px"}}>
                                <Form.Control type="password" placeholder="Password" onChange={onPwdInputChange} value={pwdInput}></Form.Control>
                            </InputGroup>
                            <Container className="ButtonGroup">
                                <Button variant="primary" type="submit">LOGIN</Button>
                                <Button variant="warning" onClick={logout}>LOGOUT</Button>
                            </Container>

                        </Form>

                    </Row>

                </Col>

            </Row>


        </Container>
    );
}

export default App;
