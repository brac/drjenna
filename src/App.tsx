// import logo from './logo.svg';
import React from 'react';
import './App.sass';
import Header from "./components/header";
import Footer from "./components/footer";
import Body from "./components/body";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header/>
      <Body/>
      <Footer/>
    </div>
  );
};

export default App;
