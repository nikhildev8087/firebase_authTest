import { async } from '@firebase/util';
import React, {useRef, useState} from 'react'
import { Card, Form, Button, Container, Alert } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';
// import { useAuth } from '../context/AuthContext';

const Signup = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();
    const {signup} = useUserAuth();
    const navigate = useNavigate()
    const handleSubmit = async(e) => {
        e.preventDefault()
        setError("")
        try{
            await signup(email, password);
            navigate("/")
        }catch(err){
            setError(err.message)
        }
    }
  return (
    <>
    <Container className='w-100 d-flex align-items-center justify-content-center mt-3' >
    <Card className='w-100' style={{maxWidth:'400px'}}>
        <Card.Body>
            <h2 className='w-100 text-center mt-2'>Sign Up</h2>
            {error && <Alert variant='danger'>{error}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" onChange={(e) => setEmail(e.target.value)} required/>
                </Form.Group>
                <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" onChange={(e) => setPassword(e.target.value)} required/>
                </Form.Group>
                {/* <Form.Group id="password-confirm">
                <Form.Label>Password Confirmation</Form.Label>
                <Form.Control type="password" ref={passwordConfirmRef} required/>
                </Form.Group> */}
                <Button className='w-100' type="submit">Sign Up</Button>
            </Form>
        </Card.Body>
        <div className='w-100 text-center mt-2'>
            Already have an account? <Link to="/">Log In</Link> 
        </div>
    </Card>
        </Container>
    </>
  )
}

export default Signup
