import React from 'react'
import './style/App.css'
import Header from './components/ResponsiveAppBar';
import ProductCard from './components/productcard';
import Contact from './components/contact';
import Signup from './components/signup';
import CategoryList from './components/CategoryList';

function App() {
  return (
    <div className="App">
     <Header/>
     <ProductCard/>
      <Contact/>
      <Signup/>
      <CategoryList/>
    <p>Welocome</p>
    </div>
  );
}

export default App;
