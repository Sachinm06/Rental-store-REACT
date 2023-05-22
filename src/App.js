import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cars from './components/Cars';
import Footer from './components/Footer';
import Header from './components/Header';
import LandingImg from './components/LandingImg';
import SingleCar from './components/SingleCar';





function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<LandingImg />}></Route>
        <Route path='/viewAll' element={<Cars />}></Route>
        <Route path='/singleView/:id' element={<SingleCar />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
