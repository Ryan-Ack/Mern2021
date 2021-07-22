
import './App.css';
import Create from './components/Create';
import Details from './components/Details';
import Main from './components/Main';
import Update from './components/Update';
import { Router, Link } from '@reach/router'

function App() {
  return (
    <div className="App">
      <h1>Favorite Authors</h1>
      {/* <Link to="/">Home</Link> | <Link to="/new">Create</Link> */}
      <Router>
        <Main path="/" />
        <Create path="/new" />
        <Details path="/:id" />
        <Update path="/edit/:id" />
      </Router>
    </div>
  );
}

export default App;
