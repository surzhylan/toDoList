import React, { useState } from "react";
import ReactDOM from 'react-dom/client';
import {v4 as uuid} from "uuid"; 
import { Form, Button, FormControl, FormGroup, Row, Col } from "react-bootstrap";
import './addtodo.css'


function AddToDo ({ todo, setToDo }) {
    
    const[value, setValue] = useState('')
    function saveToDo(){
        let newTodo = [...todo, {
            id: todo.length+1,
            title: value,
            status: true
        }]
        setToDo(newTodo)
        setValue('')
    }

    return(
        <Row>
            <Col className="addform">
                <Form>
                    <FormGroup className="mb-3" controlId="formBasicEmail">
                        <FormControl type="text" placeholder="Insert task" value={value} onChange={ (e) => setValue(e.target.value)} />
                    </FormGroup>
                    <Button variant="primary" onClick={saveToDo}>Save</Button>
                </Form>
            </Col>
        </Row>
    )
}

export default AddToDo