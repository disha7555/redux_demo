import './App.css';
import C from './Components/C';
import { useDispatch } from 'react-redux';
function App() {
  const dispatch=useDispatch();
  return (
    <div className='App'>
      <button onClick={(e)=>dispatch({type:"INCREMENT"})}>Increment</button>
      <C/>
     
    </div>
  );
}

export default App;
