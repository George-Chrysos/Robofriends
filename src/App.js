import logo from './logo.svg';
import './App.css';
import CardList from './CardList';
import 'tachyons';
import {robots} from './robots'

function App() {
  return (
    <div>
      <CardList robots={robots} />
      
    </div>
    
    
  );
}

export default App;
