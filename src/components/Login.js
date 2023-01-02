import { async } from '@firebase/util';
import React,{useRef, useState} from 'react'
import { Card, Form, Button, Container, Alert } from 'react-bootstrap'
import GoogleButton from 'react-google-button';
import { Link,useNavigate } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';


const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();
    const {login} = useUserAuth();
    const navigate = useNavigate()

    const handleSubmit = async(e) => {
        e.preventDefault()

        setError("")
        try{
            await login(email, password);
            navigate("/home")
        }catch(err){
            setError(err.message)
        }
    }
  return (
    <>
    <Container className='w-100 d-flex align-items-center justify-content-center mt-3' >
    <Card className='w-100' style={{maxWidth:'400px'}}>
        <Card.Body>
            <h2 className='w-100 text-center mt-2'>Firebase Login</h2>
            {error && <Alert varient="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" onChange={(e)=> setEmail(e.target.value)} required/>
                </Form.Group>
                <Form.Group id="password" className='mb-3'>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" onChange={(e)=> setPassword(e.target.value)} required/>
                </Form.Group>
                <Button className='w-100' type="submit">Sign Up</Button>
            </Form>
        </Card.Body>
        <div className='d-flex align-items-center justify-content-center'>
            <GoogleButton className='g-btn text-center' type='dark'/>
        </div>
        <div className='w-100 text-center mt-2'>
            Dont have an account <Link to="/signup">Sign up</Link>
        </div>
    </Card>
        </Container></>
  )
}

export default Login
