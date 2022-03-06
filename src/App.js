import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Registration from './components/Registration/Registration';
import Shipping from './components/Shipping/Shipping';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
           <Header></Header>
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="shipping"   element={<PrivateRoute> <Shipping /> </PrivateRoute>} />
           <Route path="login" element={<Login />} />
           <Route path="register" element={<Registration />} />
         </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
  
}

export default App;
