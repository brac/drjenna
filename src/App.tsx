import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/header";
import Footer from "./components/footer";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header/>

      <Footer/>
    </div>
  );
};

export default App;
