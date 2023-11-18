import logo from './logo.svg';
import './App.css';
import PropertyDetailCard from './components/pages/cards/PropertyDetailsCard/PropertyDetailCard';
import img1 from './components/utils/asset/pexels-expect-best-323705.jpg'
import img2 from './components/utils/asset/pexels-jovydas-dobilas-2957862.jpg'
import img3 from './components/utils/asset/pexels-ricky-esquivel-2576111.jpg'
import img4 from './components/utils/asset/pexels-trace-hudson-2516417.jpg'
// import UserContextProvider from './Contaxt/UserContextProvider';
import Login from './components/pages/Auth/Login';
import SignUp from './components/pages/Auth/SignUp';
import NavBar from './components/NavBar/Navbar';
import MainRouting from './components/Routing/MainRouting';
import { BrowserRouter } from 'react-router-dom';
import UserContextProvider from './Context/UserContextProvider';
import Layout from './components/Routing/Layout';



function App() {
  return (
      <UserContextProvider>
        
     <MainRouting/>
        
      </UserContextProvider>
    
  );
}

export default App;
