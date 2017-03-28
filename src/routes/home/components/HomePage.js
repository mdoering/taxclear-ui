import React from 'react';
import {Link} from 'react-router';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Taxonomic Clearing House</h1>
      <p>Check out <Link to="name">Betula alleghaniensis</Link></p>
    </div>
  );
};

export default HomePage;
