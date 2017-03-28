import React from 'react';
import {Link} from 'react-router';
import './AboutPage.css';

// Since this component is simple and static, there's no parent container for it.
const AboutPage = () => {
  return (
    <div>
      <h2 className="alt-header">About</h2>
      <p>
        This is a proof of concept for the envisioned technology stack for a Taxonomic Clearing House by the Catalogue of Life and GBIF.
      </p>
      <p>
        For more information please see the <Link to="https://github.com/mdoering/taxclear-ui/blob/master/README.md">github code repository</Link>.
      </p>
    </div>
  );
};

export default AboutPage;
