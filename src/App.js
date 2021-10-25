import Navbar from './Components/Navbar/Navbar.js'
import Curso from './Components/Curso/Curso.js'
import SCurso from './Components/Curso/SerieCurso.js'
import Episodio from './Components/Curso/Episodio.js'
import Apoyo from './Components/Curso/Apoyo.js'
import ChoosePlan from './Components/WelcomePage/ChoosePlan.js'
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
      <ChoosePlan />
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
          <Route path='/cursos' exact component={Curso} />
          <Route path='/apoyo' exact component={Apoyo} />
          <Route path='/clase/:id' component={SCurso} />
          <Route path='/temporada/:id' component={Episodio} />
          {/**<Route path='/producto/:id' component={Producto} />
            <Route path='/editor/:id' component={Editor} />
            <Route path='/compra/:id' component={Compra} />**/}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
