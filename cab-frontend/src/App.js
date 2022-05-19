import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Modal from './Components/Modal';
import Navbar from './Components/Navbar';
import PhonePrompt from './Components/PhonePrompt';
import Test from './Components/Test';
import UserInterface from './Components/UserInterface';
import VariableForm from './Components/VariableForm';

function App() {

  return (
    <div>
      <Modal/>
    <Navbar />
    <div  style={{height:'80vw',backgroundImage: `url("./TAXI.jpg")`,backgroundSize: 'cover'}}>
      <Routes>
        <Route path='/login' element={<VariableForm type='login'/>} />
        <Route path='/phone/register' element={<VariableForm type='registration'/>} />
        <Route path='/phone' element={<VariableForm type='phone'/>} />
        <Route path='/login/interface' element={<UserInterface/>} />
      </Routes>
      {/* <UserInterface /> */}
    </div>
    </div>
  );
}

// style="height: 80vw;background-image: url('TAXI.jpg');background-size: cover;"

export default App;
//Anaya is changing......
//Jaita is changing.............
//Faizan is changing.............