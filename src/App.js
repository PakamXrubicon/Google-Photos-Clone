import { useSelector } from "react-redux"
import './css/App.css';
import Nav from "./components/Nav.js";
import Login from "./components/Login.js";

function App() {
  const user = useSelector(state => state)

  return (
    <div className="app">

      {user ? (
        <>
          <Nav />
        </>
      ) : (
          <Login />
        )
      }

    </div>
  );
}

export default App;
