import { useState, createContext,  useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router} from "react-router-dom";
import Body from './components/Body';

export const Context = createContext();

function App() {
  //STATES
  const [sidebarVisible, setSidebarVisibility] = useState(false);
  const [offset, setOffset] = useState(false);
  const setSidebarVisilityHandler = () => {
    setSidebarVisibility(!sidebarVisible);
  }
  useEffect(() => {
    const body = document.getElementById('body');
      const onScroll = () => {
        if(body.scrollTop > window.innerHeight) {
          setOffset(true)
        } else {
          setOffset(false)
        }
      };
      body.removeEventListener('scroll', onScroll);
      body.addEventListener('scroll', onScroll, { passive: true });
      return () => body.removeEventListener('scroll', onScroll);
  }, []);

  return (  
    <>
    <Context.Provider value={{
      sidebarVisible,
      setSidebarVisilityHandler,
      setSidebarVisibility,
      offset
    }}>
      <Router>
     <Body/>
     </Router>
    </Context.Provider>
    </>
  );
}

export default App;
