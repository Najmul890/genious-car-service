import { Button, Form } from 'react-bootstrap';
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';


const Login = () => {
    const emailRef= useRef("");
    const passwordRef= useRef("");

    const handleFormSubmit=event=>{
        event.preventDefault();
        const email= emailRef.current.value;
        const password= passwordRef.current.value;
        console.log(email, password);
    }
    return (
        <div className='w-50 mx-auto' >
            <h2 className='text-center my-5' >Please Login</h2>
            <Form onSubmit={handleFormSubmit} >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p>Don't have an account? <Link to="/register" >Register</Link> </p>
        </div>
    );
};

export default Login;