import React, { useState } from "react";
import { Form, Card, Container, Row, Col, Button } from "react-bootstrap";
import DisplayCount from './DisplayCount';
import {addTodo} from '../redux/action/todo'
import { connect } from "react-redux";


const AddTodo = ({addTodo}) => {
  const[todo, setTodo] = useState({
    title: "",
    description: "",
  });

  const handleSubmit = (e)=>{
    e.preventDefault();
    addTodo(todo)
    console.log("todo =>",todo)
    setTodo({
      title : '',
      description : ""
    })
  }

//   const handleInputChange = (e)=>{
//     e.preventDefault();
//     const [fieldName,value]  = e.target;
//     setTodo({...todo,[fieldName]:value})
//   }
  return (
    <Container>
      <Row>
        <Col md={12}>
          <Card className="shadow-sm">
            <Card.Body>
              <h3>Add Todo here !!</h3>
              <DisplayCount/>
              {/* Form */}
              <Form  onSubmit={handleSubmit}>
                {/* title */}
                <Form.Group className="mt-3">
                  <Form.Label>Todo Title</Form.Label>
                  <Form.Control
                    as={"textarea"}
                    type="text"
                    placeholder="Enter here"
                    value={todo.title}
                    onChange={event=>setTodo({...todo,title:event.target.value})}
                  >
                    Todo Title
                  </Form.Control>
                </Form.Group>
                {/* description */}
                <Form.Group className="mt-3">
                  <Form.Label>Todo Description</Form.Label>
                  <Form.Control
                    as={"textarea"}
                    type="description"
                    placeholder="Enter here"
                    value={todo.description}
                    onChange={event=>setTodo({...todo,description:event.target.value})}
                  >
                    Todo Description
                  </Form.Control>
                </Form.Group>
                <Container className="text-center mt-3">
                  <Button type="submit" variant="primary">Add Todo</Button>
                </Container>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};


const mapStateToProps=(store) =>({})

const mapDispatchToProps=(dispatch) =>({
    addTodo :(todo)=>(dispatch(addTodo(todo)))
})

export default connect(mapStateToProps,mapDispatchToProps) (AddTodo);
