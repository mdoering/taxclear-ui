import React, { PropTypes } from 'react';
import { Link } from 'react-router';

var NavLink = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  render: function () {
    //var isActive = this.isActive(this.props.to, this.props.params, this.props.query);
    var isActive = this.context.router.isActive(this.props.to, this.props.params, this.props.query);
    return (
      <li className={isActive ? 'active' : null}><Link {...this.props}>{this.props.children}</Link></li>
    );
  }

});

export default NavLink;
