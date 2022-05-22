import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setStage } from './Actions/StageAction';
import './App.css';
import FrontComponent from './Components/FrontComponent';
import Modal from './Components/Modal';
import Navbar from './Components/Navbar';

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(setStage('booking'));
  },[]);
  return (
    <div>
      <Modal title="Confirm Deletion" />
      <Navbar />
      <FrontComponent />
    </div>
  );
}

export default App;
//Anaya is changing......
//Jaita is changing.............
//Faizan is changing.............