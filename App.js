import logo from './logo.svg';
import './App.css';
import {Node, sort,Counter} from './components/Node';
import {BoxContainer,BoxContainerr} from './components/BoxContainer';
import {sorting} from './components/sorting';


const reload = () =>{
  window.location.reload(false);
}


function App() {
  return (
    
    <div className="App">
      <div className="head">
      <h1>SORTING VISUALIZER</h1>
      </div>
      <br></br>
      <BoxContainer/>
      
    </div>
    
  );
}





export default App;
