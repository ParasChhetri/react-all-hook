import { useContext } from 'react';
import './App.css';
import ChangeTheme from './components/ChangeTheme';
import Login from './components/Login';
import Register from './components/Register';
import { GlobalContext } from './context';

function App() {
  const { theme } = useContext(GlobalContext);
  return (
    <div className="App" style={theme === "dark" ? { background: "linear-gradient(45deg, #000080, #000000, #0000FF)" , color: "white" } : { backgroundColor: "white", color: "black" }}>
      <ChangeTheme />
      <Login />
      <Register />
    </div>
  );
}

export default App;