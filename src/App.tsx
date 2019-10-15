// import logo from './logo.svg';
import React from 'react'
import './App.sass'
import Footer from "./components/footer"
import Body from "./components/body"

const App: React.FC = () => {
  return (
    <div className="App">
      <Body />
      <Footer />
    </div>
  );
};

export default App
