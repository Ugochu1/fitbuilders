// import classes from './App.module.css';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className='fixed top-0 left-0 z-10 w-full'><Navbar /></div>
      <Outlet />
    </div>
  );
}

export default App;
