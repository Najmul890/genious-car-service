import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Checkout from './Pages/Checkout/Checkout';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Register from './Pages/Register/Register';
import RequiredAuth from './Pages/RequiredAuth/RequiredAuth';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/service/:serviceId" element={<ServiceDetail></ServiceDetail>} ></Route>
        <Route path="/login" element={<Login></Login>} ></Route>
        <Route path='/register' element={<Register></Register>} ></Route>
        <Route path="/checkout" element={
          <RequiredAuth>
            <Checkout></Checkout>
          </RequiredAuth>
        } ></Route>
        <Route path="*" element={<NotFound></NotFound>} ></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
