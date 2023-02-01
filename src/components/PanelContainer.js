import React from "react";
import "./PanelContainer.css";
import NavBar from "./NavBar";

class PanelContainer extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.togglePanel = this.togglePanel.bind(this);
    this.state = {
      isCollapse: false,
    };
  }

  togglePanel() {
    this.setState({
      isCollapse: !this.state.isCollapse,
    });
  }

  render() {
    return (
      <div className='content-container__left'>
        <NavBar
          togglePanel={this.togglePanel}
          isPannelCollapse={this.state.isCollapse}
        />

        <div className="instructions-container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default PanelContainer;
