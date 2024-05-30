import logo from './logo.svg';
import './App.css';
import ToDoList from './Companete/To-do-list/ToDoList';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import Titele from './Companete/Titele/Titele';

function App() {
  return (
    <div className="App border border-1 border-black w-75 m-auto">
     
        <Titele />

        <ToDoList/>

    </div>
  );
}

export default App;
