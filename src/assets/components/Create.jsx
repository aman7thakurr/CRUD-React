import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import "../components/create.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Create = () => {
  const [name,setName] = useState('');
  const [email,setEmail]=useState('');
  const header={"Access-Control-Allow-Origin":"*"}
  const history =useNavigate();

   const handleSubmit = (e) =>{
    e.preventDefault();
    console.log('clicked')
    axios.post("https://663a0a051ae792804bedcb56.mockapi.io/create", {
      name: name,
      email: email,
      header,
    })  .then(response => {
      console.log('Data successfully submitted:');
    history('/read')
      setName('');
      setEmail('');
    })
    .catch(error => {
      console.error('Error submitting data:', error);
    });

   }
  return (
    <Container>
      <div className="login-form">
        <h2><span id='c'>C</span>reate</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control onChange={(e)=>{setName(e.target.value)}}required value={name} type="text" placeholder="Enter Name" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Email</Form.Label>
            <Form.Control onChange={(e)=>{setEmail(e.target.value)}}required value={email} type="email" placeholder="Email" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Create
          </Button>
        </Form>
      </div>
    </Container>
  );
}

export default Create;
