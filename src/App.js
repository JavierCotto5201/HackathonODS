import Navbar from './Components/Navbar/Navbar.js'
import Curso from './Components/Curso/Curso.js'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Link
} from "react-router-dom";


const Home = () => {
  return (
    <div>
      <Curso />
    </div>
  )
}

function App() {
  return (
    <Router>
      <div className="app">
        {/**<Navbar />**/}
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          {/**<Route path='/producto/:id' component={Producto} />
            <Route path='/editor/:id' component={Editor} />
            <Route path='/compra/:id' component={Compra} />**/}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
