import { useSelector } from 'react-redux';
import './App.css';
import FrontComponent from './Components/FrontComponent';
import Modal from './Components/Modal';
import Navbar from './Components/Navbar';

function App() {
  const state = useSelector(state=>state);
  console.log(state);

  return (
    <div>
      <Modal />
      <Navbar />
      <FrontComponent />
    </div>
  );
}

// style="height: 80vw;background-image: url('TAXI.jpg');background-size: cover;"

export default App;
//Anaya is changing......
//Jaita is changing.............
//Faizan is changing.............