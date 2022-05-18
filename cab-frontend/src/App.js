import './App.css';
import LoginForm from './Components/LoginForm';
import Navbar from './Components/Navbar';
import PhonePrompt from './Components/PhonePrompt';
import RegistrationForm from './Components/RegistrationFrom';
import UserInterface from './Components/UserInterface';

function App() {

  return (
    <div>
    <Navbar />
    <div  style={{height:'80vw',backgroundImage: `url("./TAXI.jpg")`,backgroundSize: 'cover'}}>
      {/* <PhonePrompt /> */}
      {/* <LoginForm /> */}
      {/* <RegistrationForm /> */}
      <UserInterface />
    </div>
    </div>
  );
}

// style="height: 80vw;background-image: url('TAXI.jpg');background-size: cover;"

export default App;
//Anaya is changing......
//Jaita is changing.............
//Faizan is changing.............