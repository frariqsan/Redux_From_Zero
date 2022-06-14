import './App.scss';
import CounterButtons from './components/CounterButtons';
import CounterView from './components/CounterView';

function App() {
  return (
    <div className="app">
      <h1> Redux para un Contador </h1>
      <CounterView />
      <CounterButtons />
    </div>
  );
}

export default App;
