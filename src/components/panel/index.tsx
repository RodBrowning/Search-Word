import './style.scss';
import './style-mobile.scss';

import { Route, Routes } from 'react-router-dom';

import About from '../about';
import Contact from '../contact';
import Game from '../game';
// eslint-disable-next-line import/order
import React from 'react';

const Panel: React.FC = () => {
  return (
    <div className="panel">
      <div className="bg-decoration">
        <div className="inner-bg-decoration" />
      </div>
      <Routes>
        <Route path="/" element={<Game />} />
        <Route path="contato" element={<Contact />} />
        <Route path="sobre" element={<About />} />
      </Routes>
    </div>
  );
};

export default Panel;
