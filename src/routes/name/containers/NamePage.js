import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import NameHeader from '../components/NameHeader';
import Discussion from './Discussion';

function NamePage(props) {
    return (
    <div>
        <NameHeader />

        <div id="lastmodified" className="stripe-comment">last modified 10 days ago</div>

        <div id="content" className="container">
          <div className="col-md-9">
            <div id="nomenclature">
              <dl className="dl-horizontal">
                <dt>Identifier</dt>
                <dd><a href="http://dx.doi.org/10.1594/PANGAEA.726855">tch:{props.params.key}</a></dd>

                <dt>Publication</dt>
                <dd><a href="">Bulletin of the Torrey Botanical Club 31(3): 1904.</a> p. 166</dd>

                <dt>Status</dt>
                <dd>nom. illeg.</dd>

                <dt>Basionym</dt>
                <dd></dd>

                <dt>Recombinations</dt>
                <dd><a href="">Betula lutea var. alleghaniensis (Britton) Rehder</a></dd>
                <dd><a href="">Betula lutea var. alleghaniensis (Britton) Rehder</a></dd>
                <dd><a href="">Betula lutea var. alleghaniensis (Britton) Rehder</a></dd>

                <dt>Objective Synonyms</dt>
                <dd>
                  <ul className="list-unstyled">
                    <li><a href="/taxon/1234">Betula alleghaniensis var. fallax (Fassett) Brayshaw</a><br/>
                      <cite>Flora of North America Editorial Committee, e. 1997. Magnoliidae and Hamamelidae. Fl. N. Amer. 3: i–xxiii, 1–590.</cite>
                    </li>
                    <li><a href="/taxon/1234">Betula alleghaniensis var. macrolepis (Fernald) Brayshaw</a></li>
                    <li><a href="/taxon/1234">Betula lutea F. Michx.</a></li>
                    <li><a href="/taxon/1234">Betula lutea fo. fallax Fassett</a></li>
                    <li><a href="/taxon/1234">Betula lutea var. macrolepis Fernald</a></li>
                  </ul>
                </dd>

                <dt>Type Material</dt>
                <dd>IT: Biltmore Herbarium 1619; 21 September 1897; USA. North Carolina. Upper slopes of Mt. Pisgah. (NCU) </dd>
                <dd>type species 2</dd>

                <dt>Original Classification</dt>
                <dd>Plantae - Betulaceae - Betula</dd>
              </dl>
            </div>
            <Discussion />
          </div>

          <div className="col-md-3 sidebar">
            <h4>Links</h4>
            <ul className="list-unstyled">
              <li>IPNI / Zoobank / IF</li>
              <li>GBIF</li>
              <li>EOL</li>
              <li>Wikipedia</li>
              <li>NCBI</li>
              <li><a href="http://plants.jstor.org/search?query=Brassica+rapa">JSTOR</a> (plants only)</li>
            </ul>

            <h4>History</h4>
            <ul className="list-unstyled history">
              <li>2004-12-21 - created by <a href="#">IPNI Bot</a></li>
              <li>2012-02-08 - checked by <a href="#">Gerold Parolly</a></li>
              <li>2013-07-18 - upd. types by <a href="#">Geoffrey Read</a></li>
            </ul>
          </div>
        </div>

    </div>
   )
}

export default NamePage;
