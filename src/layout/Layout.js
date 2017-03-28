import React, { PropTypes } from 'react';
import { IndexLink } from 'react-router';
import NavLink from '../components/NavLink';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends React.Component {
  render() {
    return (
    <div>
      <nav id="menu" className="navbar navbar-default navbar-fixed-top" role="navigation">
          <div className="container">
            <div className="navbar-header">
              <IndexLink to="/" className="navbar-brand"><span className="text-primary">Taxonomic</span>ClearingHouse</IndexLink>
            </div>
            <div className="collapse navbar-collapse">
              <ul className="nav navbar-nav">
                <NavLink to="/name/13">Names</NavLink>
                <NavLink to="/metrics">Metrics</NavLink>
                <NavLink to="/contribute">Contribute</NavLink>
                <NavLink to="/about">About</NavLink>
              </ul>

              <ul className="nav navbar-nav navbar-right">
                <NavLink to="/user/login" className="glyphicons user_add">Sign in</NavLink>
              </ul>

              <form className="navbar-form navbar-right" role="search">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Search" />
                </div>
              </form>
            </div>
          </div>
        </nav>
      <div id="main" className="container">
        {this.props.children}
      </div>
      <footer id="footer" className="hidden-print">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h4>Favorite Taxa</h4>
              <ul>
                <NavLink to="/taxon/10">Vertebrates</NavLink>
                <NavLink to="/taxon/10">Insects</NavLink>
                <NavLink to="/taxon/10">Plants</NavLink>
                <NavLink to="/taxon/10">Algae</NavLink>
                <NavLink to="/taxon/10">Fungi</NavLink>
              </ul>
            </div>
            <div className="col-md-3">
              <h4>Taxa</h4>
              <ul>
                <NavLink to="/taxa/browse">Browse</NavLink>
                <NavLink to="/taxa/changes">Recent changes</NavLink>
                <NavLink to="/taxa/review">Review needed</NavLink>
              </ul>
            </div>

            <div className="col-md-3">
              <h4>Contribute</h4>
              <ul>
                <NavLink to="/user/register">Register</NavLink>
                <NavLink to="/user/metrics">Metrics</NavLink>
                <NavLink to="/taxon/10">Areas in need</NavLink>
                <NavLink to="/taxon/10">...</NavLink>
                <NavLink to="/taxon/10">...</NavLink>
              </ul>
            </div>

            <div className="col-md-3">
              <h4>About</h4>
              <ul>
                <NavLink to="/about">Fundamentals</NavLink>
                <NavLink to="/about/editing">Editing</NavLink>
                <NavLink to="/about/versioning">Versioning</NavLink>
                <NavLink to="/about/robots">Robots</NavLink>
                <NavLink to="/about/disclaimer">Disclaimer</NavLink>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
   );
  }
}


App.propTypes = {
  children: PropTypes.element
};

export default App;
