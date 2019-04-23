import React from 'react';
import { Router } from 'react-router-dom';

import Header from './components/template/Header';
import Footer from './components/template/Footer';
import ConvertForm from './components/conversion/ConvertForm';

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <ConvertForm />
      <Footer />
    </div>
  );
};

export default App;