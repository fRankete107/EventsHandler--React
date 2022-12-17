import './App.css';
import Header from "./componentes/Header";
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='contenedor-lista'>
        <h2>Mis tareas pendientes</h2>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
