import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
const Update = () => {
  const [id, setId] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setId(localStorage.getItem('id'));
    setName(localStorage.getItem('name'));
    setEmail(localStorage.getItem('email'));
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios.put(`https://663a0a051ae792804bedcb56.mockapi.io/create/${id}`, {
      name: name,
      email: email,
    })
    .then(() => {
      navigate('/read');
    })
    .catch((error) => {
      console.error('Error updating data:', error);
    });
  };

  return (
    <Container>
    
      <div className="login-form">
  

       <div className='d-flex mx-2 justify-content-between'>
        <h2 className='mx-2'><span id='c'>U</span>pdate</h2>
      <Link to='/read'>  <h2 className='mx-2'>Back</h2></Link>
      </div>
        <Form onSubmit={handleUpdate}>
          {/* Added onChange handler for the Name input field */}
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              value={name}
              onChange={(e) => setName(e.target.value)} // Add onChange handler
              type="text"
              placeholder="Enter Name"
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              required // Added required attribute
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Update
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default Update;
