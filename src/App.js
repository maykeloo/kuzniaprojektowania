import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./components/Main/Main";

function App() {


  return (
    <>
      <Router>
        <Navigation />
        <Main/>
      </Router>
    </>
  );
}

export default App;
