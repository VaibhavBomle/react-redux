import React from 'react'
import { Card } from 'react-bootstrap'
import { connect } from "react-redux";

const DisplayCount = ({todos}) => {
  console.log("todos : ",todos)
  return (
   <Card className = 'shadow-sm-border-border-o'>
    <Card.Body>
      <h4>Number of Todos : {todos.length}</h4>
    </Card.Body>
   </Card>
  )
}

const mapStateToProps=(state)=>({
  todos: state.todos
})

const mapDispatchToProps = (dispatch)=>({})

export default connect(mapStateToProps,mapDispatchToProps)(DisplayCount);
