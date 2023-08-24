import logo from './logo.svg';
import './style.css';
import TimerManager from './TimerManager';

function App() {
  return (
    <main className="wrapper">
      <h1 className="title">Countdown</h1>
      <TimerManager></TimerManager>
    </main>
  );
}

export default App;
