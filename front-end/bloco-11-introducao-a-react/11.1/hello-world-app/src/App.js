import './App.css';

const array = ['HTML', 'CSS', 'JS']
const Task = (value) => {
  return (
    <li>{value}</li>
  );
}
const map = (array) => array.map((item) => Task(item));


  function App() {
  return (
    <ul className="ListTask">
      { map(array) }
    </ul>
  );
}

export default App;
