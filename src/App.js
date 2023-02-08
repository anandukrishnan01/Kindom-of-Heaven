
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import {
  
  Routes,
  Route
} from "react-router-dom";
import Home from "./routes/Home"
import About from "./routes/About"
import Contact from "./routes/Contact"
import Service from "./routes/Service"

import Goa from './Travelform/Goa';
import Lakshadweep from './Travelform/Lakshadweep';
import Maldives from './Travelform/Maldives';
import Manali from './Travelform/Manali';
import Munnar from './Travelform/Munnar';
import Punjab from './Travelform/Punjab';
import Rajasthan from './Travelform/Rajasthan';
import Shimla from './Travelform/Shimla';
import Tajmahal from './Travelform/Tajmahal';
import TravelStaff from './Components/TravelStaff';
import Bookingbackend from './Components/Bookingbackend';
import Enquiresbackend from './Components/Enquiresbackend';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/service' element={<Service/>}/>
      <Route path='/goa' element={<Goa/>}/>
      <Route path='/lakshadweep' element={<Lakshadweep/>}/>
      <Route path='/maldives' element={<Maldives/>}/>
      <Route path='/manali' element={<Manali/>}/>
      <Route path='/munnar' element={<Munnar/>}/>
      <Route path='/punjab' element={<Punjab/>}/>
      <Route path='/rajasthan' element={<Rajasthan/>}/>
      <Route path='/shimla' element={<Shimla/>}/>
      <Route path='/tajmahal' element={<Tajmahal/>}/>
      <Route path='/admin' element={<TravelStaff/>}/>
      <Route path='/booking' element={<Bookingbackend/>}/>
      <Route path='/enquiries' element={<Enquiresbackend/>}/>
    </Routes>
    
    
    </>
  );
}

export default App;
