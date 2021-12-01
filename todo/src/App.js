import logo from './logo.svg';
import './App.css';
import { Todo } from './components/Todo';
import { Container } from './components/hooks-components/Container';
import EcomHome from './components/ecom/EcomHome';
import ReducerDemo from './components/hooks-components/ReducerDemo';

function App() {
  return (
    <div>
      <ReducerDemo/>
      {/* <EcomHome/> */}
      {/* <Todo /> */}
      {/* <Container/> */}
    </div>
  );
}

export default App;
