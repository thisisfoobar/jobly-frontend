import { BrowserRouter } from 'react-router-dom';
import './App.css';
import JoblyRoutes from './Routes/JoblyRoutes';
import NavBar from './NavBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <JoblyRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
