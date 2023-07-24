import logo from './logo.svg';
import './App.css';
import Props from './component/Props';
import data from './component/Data';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Function from './component/Function';


function App() {
  const [no,setNO] = useState(0);
  const Add = () => {
     setNO(
      no + 5
     );
  }
  const minus = () => {
    setNO(
      no - 5
     );
  }
  return (
    <>
     <Props record={data}
     btn={Add}
     button={minus}
     no={no}
     />
     <Function record={data}
     btn={Add}
     button={minus}
     no={no}/>
    </>
  );
}

export default App;
