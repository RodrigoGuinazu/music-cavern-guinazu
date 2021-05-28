import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Cart from './components/Cart';
import Detail from './components/Detail';
import Categories from './components/Categories';
import Brands from './components/Brands';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CartProvider } from './context/CartContext'
import { UserProvider } from './context/UserContext'
import ScrollToTop from './ScrollToTop'

function App() {
  return (
    <>
      <UserProvider>
        <CartProvider>
          <BrowserRouter>
            <ScrollToTop />
            <Navbar />
            <Switch>
              <Route path='/login'>
                <Login />
              </Route>
              <Route path='/register'>
                <Register />
              </Route>
              <Route path='/profile'>
                <Profile />
              </Route>
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
      </UserProvider>
    </>
  );
}

export default App;