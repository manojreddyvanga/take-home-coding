import { NavbarComponent } from './components/navbar';
import { MovieTableComponent } from './components/movie-table';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <div className='container'>
        <MovieTableComponent />
      </div>
    </div>
  );
}

export default App;
