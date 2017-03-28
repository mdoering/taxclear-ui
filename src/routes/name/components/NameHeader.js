import React from 'react';
import FossilImg from '../../../assets/fossil.png'

function NameHeader(props) {
  return (
    <div id="name" className="page-header">
      <h2 className="name"><em>Betula alleghaniensis</em> <span className="rank">var.</span> <em>fallax</em> <span className="authorship">(Fassett) Brayshaw</span> <small>variety</small></h2>
      <div id="icons">
        <div>
          <img className="icon" src={FossilImg} />
        </div>
        <div>ICN</div>
      </div>
    </div>
  );
}


export default NameHeader;
