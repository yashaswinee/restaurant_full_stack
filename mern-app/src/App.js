import "./App.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Body, Footer, Login } from "./imports";
import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Signup from "./pages/signup/Signup.js";
import CartProvider from './components/ContextReducer.jsx';

function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path='/signup' element={<Signup />} />
            <Route exact path='/login' element={<Login />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
