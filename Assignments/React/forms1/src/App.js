import './App.css';

// import PersonCard from './components/PersonCard.js'
// import ClickCounter from './components/ClickCounter';
// import UserForm from './components/UserForm';
import HookForm from './components/HookForm';
// import ConditionalRendering from './components/ConditionalRendering';
// import MovieForm from './components/MovieForm';
function App() {
  return (
    <div className="App">
      <header className="App-header">

        <HookForm />
        {/* <ConditionalRendering /> */}
        {/* <MovieForm /> */}
        {/* {/* <UserForm /> */}
        {/* <ClickCounter />
        <PersonCard firstName={"Ryan"} lastName={"Ackerman"} age={30} hairColor={"Blonde"} />
        <PersonCard firstName={"John"} lastName={"Smith"} age={28} hairColor={"Black"} />
        <PersonCard firstName={"Samuel"} lastName={"Jackson"} age={26} hairColor={"Brown"} />
        <PersonCard firstName={"Tallie"} lastName={"Woodson"} age={24} hairColor={"Brown"} /> */}


      </header>
    </div>
  );
}

export default App;
