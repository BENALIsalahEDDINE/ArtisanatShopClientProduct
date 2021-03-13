import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ProductDetail from "./components/details/ProductDetail";
import Register from "./components/User/Register";
import ScrollToTop from "./ScrollToTop";


function App() {
  return (
    <Router>
      <ScrollToTop>
        <div className="App">
          <Header />
            <Route path="/Register">
              <Register/>
            </Route>           
            <Route path="/detail">
              <ProductDetail />
            </Route>
          <Footer />
        </div>
      </ScrollToTop>
    </Router>
  );
}

export default App;
