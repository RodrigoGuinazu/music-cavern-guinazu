import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Cart from './components/Cart';
import Detail from './components/Detail';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path='/cart'>
            <Cart />
          </Route> 
          <Route path='/detail'>
            <Detail />
          </Route> 
          <Route exact path='/'>
            <Home />
          </Route>  
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

/*
  <Link to={/>detail/${product.id}}><Link /> 
  <NavLink to={/>detail/${product.id} activeClassName="currentProduct" className="text-white"> funcionalidad del link + la posibilidad de poder activar una clase
*/