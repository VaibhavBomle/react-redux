import './App.css';
import {Container} from 'react-bootstrap';
import AddTodo from './components/AddTodo';
import DisplayTodos from './components/DisplayTodos';


function App() {
  return (
    <Container className='py-3'>
       <h1>Hello Redux you are very easy to learn .......</h1>
       <AddTodo/>
       <DisplayTodos/>
    </Container>
  );
}

export default App;
