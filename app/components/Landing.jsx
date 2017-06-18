import React, { Component, PropTypes } from 'react';
import Nav from './Nav';
import Footer from './Footer';

export default class Landing extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  }

  render() {
    return (
      <section className="landing">
        <Nav />
        {this.props.children}
        <Footer />
      </section>
    );
  }
}
