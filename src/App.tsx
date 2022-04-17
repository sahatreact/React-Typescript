import { UserContextProvider } from "./components/context/UserContext";
import { User } from "./components/context/User";
import "./App.css";
import { MutableRef } from "./components/ref/MutableRef";

function App() {
  return (
    <div className="App">
      {/* <UserContextProvider>
        <User />
      </UserContextProvider> */}
      <MutableRef />
    </div>
  );
}

export default App;
