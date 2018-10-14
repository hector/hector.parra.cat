// Inspired on on https://github.com/conorhastings/react-code-window
import React from 'react';
import PropTypes from 'prop-types';
import SyntaxHighlighter, { registerLanguage } from "react-syntax-highlighter/light";
import js from 'react-syntax-highlighter/languages/hljs/javascript';
import atomOneDark from 'react-syntax-highlighter/styles/hljs/atom-one-dark';
import classNames from 'classnames';

import './CodeWindow.scss';

registerLanguage('javascript', js);

export default class CodeWindow extends React.Component {

  static defaultProps = {
    title: 'react-code-window',
  };

  static propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
  };

  render() {
    const {className, children, title} = this.props;
    return (
      <div className={classNames('CodeWindow', className)}>
        <div className="CodeWindow__Header">
          <span className="CodeWindow__Header__Buttons">
            <div className="CodeWindow__Header__Buttons__Red">
              <span className="CodeWindow__Header__Buttons__Icon">&times;</span>
            </div>
            <div className="CodeWindow__Header__Buttons__Yellow">
              <span className="CodeWindow__Header__Buttons__Icon">&minus;</span>
            </div>
            <div className="CodeWindow__Header__Buttons__Green">
              <span className="CodeWindow__Header__Buttons__Icon">&#43;</span>
            </div>
          </span>
          <span>{title}</span>
        </div>
        <SyntaxHighlighter
          customStyle={{margin: 0, width: '100%'}}
          style={atomOneDark}
        >
          {children}
        </SyntaxHighlighter>
      </div>
    );
  }
}
