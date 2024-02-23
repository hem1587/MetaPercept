import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Products from './Components/Products';
import Footer from './Components/footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Products/>
      <Footer/>
    </div>
  );
}

export default App;
