import React from 'react';
import '../App.css'; // DELETE
import NavBar from './NavBar';

class PanelContainer extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.togglePanel = this.togglePanel.bind(this);
    this.state = {
      isCollapse: false
    };
  }

  togglePanel() {
    this.setState({
      isCollapse: !this.state.isCollapse
    });
  }

  render() {
    return (
      <div
        className={`${
          this.state.isCollapse ? 'panel-wrap-isCollapse' : 'panel-wrap'
        }`}
      >
        <NavBar
          togglePanel={this.togglePanel}
          isPannelCollapse={this.state.isCollapse}
        />

        <div className="panel-content">
          {!this.state.isCollapse && <>{this.props.children}</>}
        </div>
      </div>
    );
  }
}

export default PanelContainer;
