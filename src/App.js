import 'sanitize.css';
import './css/style.css';
import './css/medium.css';
import React from 'react';

import Header from './components/template/Header';
import Footer from './components/template/Footer';
import ConvertForm from './components/conversion/ConvertForm';
import ShowConversion from './components/conversion/ShowConversion';
import GraphHistorical from './components/graphs/GraphHistorical';

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <ConvertForm />
      <ShowConversion />
      <GraphHistorical />
      <Footer />
    </div>
  );
};

export default App;