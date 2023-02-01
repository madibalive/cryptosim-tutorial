import React from 'react';
import './CodeSnippet.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaste } from '@fortawesome/pro-light-svg-icons'


function copyToConsole(text) {
  const textarea = document.querySelector(".cli");
  if (textarea) {
    textarea.value = text;
    textarea.focus();
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  }
}

class CodeSnippet extends React.Component {
  copy() {
    copyToConsole(this.props.code);
  }

  render() {
    return (
      <div className="code-snippet">
        <pre>
          <code>{this.props.code}</code>
          <div className="icon-container">
            <button onClick={this.copy.bind(this)}>
              <FontAwesomeIcon icon={faPaste} />
            </button>
          </div>
        </pre>
      </div>
    );
  }
}

export default CodeSnippet;
