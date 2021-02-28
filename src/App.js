import './App.css';
import Counter from './component/Counter'

function App() {
  const counters = [...Array(14).keys()]
  return (
    <div className="App" style={{ display: 'flex', flexWrap: 'wrap' }}>
      {counters.map((item) => {
        return (
          <Counter />
        )
      })}
    </div>
  );
}

export default App;
