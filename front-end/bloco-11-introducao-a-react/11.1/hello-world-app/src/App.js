import './App.css';

const array = ['HTML', 'CSS', 'JS']
const Task = (value) => {
  return (
    <>
    { value.map((item) => <li>{ item }</li>)}
    </>
  );
}

  function App() {
  return (
    <ul className="ListTask">
      { Task(array) }
    </ul>
  );
}

export default App;
