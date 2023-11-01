import React,{useState} from 'react';
import { Card, Container, Row, Col, Button, ListGroup } from "react-bootstrap";
import DisplayCount from './DisplayCount';


const DisplayTodos = () => {

  const [todos,setTodos] = useState([
    {
       title : "first title",
       description : "First description"
    },
    {
      title : "Second title",
      description : "Second description"
    }
  ])
  return (
    <Container>
      <Row>
        <Col>
          <Card className='mt-3 shadow-sm'>
            <Card.Body>
            <h3>All todos are here</h3>
            <DisplayCount/>
              <ListGroup>
              {
                todos.map((todo,index)=>(
                    <ListGroup.Item key={index}>
                           <h4>{todo.title}</h4>
                           <p>{todo.description}</p>
                    </ListGroup.Item>
                ))
              }
              </ListGroup>
              
            </Card.Body>
          </Card>
        
        </Col>
      </Row>
    </Container>
  )
}

export default DisplayTodos
