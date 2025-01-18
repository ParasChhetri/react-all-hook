import './App.css';
import BgTask from './tasks/BgTask';
import CounterTask from './tasks/CounterTask';
// import SelectOption from './tasks/SelectOption';
// import ToggleText from './tasks/ToggleText';

function App() {
  return (
    <div className="App">
      {/* <ToggleText /> */}
      {/* <SelectOption /> */}
      <BgTask />
      <CounterTask />
    </div>
  );
}

export default App;