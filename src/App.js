import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Cart from './components/Cart';
import Detail from './components/Detail';
import Categories from './components/Categories';
import Brands from './components/Brands';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CartProvider } from './context/CartContext' 

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path='/cart'>
              <Cart />
            </Route>
            <Route path='/category/:name'>
              <Categories />
            </Route>
            <Route path='/brands/:name'>
              <Brands />
            </Route>
            <Route path='/product/:id'>
              <Detail />
            </Route> 
            <Route exact path='/'>
              <Home />
            </Route>  
          </Switch>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;

/*
  <Link to={/>detail/${product.id}}><Link /> 
  <NavLink to={/>detail/${product.id} activeClassName="currentProduct" className="text-white"> funcionalidad del link + la posibilidad de poder activar una clase
*/