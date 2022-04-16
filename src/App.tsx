import "./App.css";
import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";

function App() {
  const personName = {
    first: "Bruce",
    last: "Wayne",
  };

  const nameList = [
    {
      first: "Bruce",
      last: "Wayne",
    },
    {
      first: "Clark",
      last: "Kent",
    },
    {
      first: "Pricess",
      last: "Diana",
    },
  ];

  return (
    <div className="App">
      {/* <Greet name={"tafli"} messageCount={20} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList name={nameList} /> */}
      <Status status="loading" />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicpario</Heading>
      </Oscar>
      <Greet name={"tafli"} isLoggedIn={false} />
    </div>
  );
}

export default App;
