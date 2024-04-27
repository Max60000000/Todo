import './index.css'
import AddTodo from './components/AddTodo';
import Todo from './components/Todo';
function App() {
  return (
  <>
 <div className='items-center'> 
  <h2>Learn</h2>
  <AddTodo/>
  <Todo/>
  </div>
  </>
  );
}

export default App;
