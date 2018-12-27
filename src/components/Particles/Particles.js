import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import 'particles.js';

import './Particles.scss';
import config from './Particles.json';

export default class Particles extends React.PureComponent {

  static propTypes = {
    className: PropTypes.string,
  };

  static uniqueId = 0;

  constructor(props) {
    super(props);
    this.id = `particles-${++this.constructor.uniqueId}`;
  }

  componentDidMount() {
    window.particlesJS(this.id, config);
  }

  render() {
    const {className} = this.props;
    return (
      <div id={this.id} className={classNames('Particles', className)}/>
    );
  }

}
