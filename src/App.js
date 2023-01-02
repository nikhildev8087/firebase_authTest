import Signup from "./components/Signup";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Home from "./components/Home";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    // <Container className="d-flex align-items-center justify-content-center"
    // style={{minHeight:"100vh"}}
    // >
    //   <div className="w-100" style={{ maxWidth: "400px"}}>
    //   <Signup/>
    //   </div>
    // </Container>
    <Container>
      <Row>
        <Col>
        <UserAuthContextProvider>
         <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/home" element={<ProtectedRoute><Home/></ProtectedRoute>}/>
         </Routes>
         </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
    // <div className="App">
    //   <Login/>
    // </div>
  )
}

export default App;
