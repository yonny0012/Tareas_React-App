import './App.css';
import freecodecamplogo from './Imgs/freecodecamp-logo.png';
import ListaDeTareas from './Components/ListaDeTareas';

function App() {
  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img
          src={freecodecamplogo}
          className='freecodecamp-logo' 
          alt='Logo de freeCodeCamp' />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
