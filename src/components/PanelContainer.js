import React from 'react';
import './PanelContainer.css';
import { faAnglesLeft, faBars } from '@fortawesome/pro-thin-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Menu from './Menu';

class PanelContainer extends React.Component {
  constructor(props) {
    super(props);
    this.setCollapsed = this.setCollapsed.bind(this);
    this.toggleCollapsed = this.toggleCollapsed.bind(this);
    this.setMenuVisible = this.setMenuVisible.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.state = {
      isCollapsed: false,
      menuVisible: false,
    };
  }

  setCollapsed(instructionsCollapsed) {
    this.setState({ instructionsCollapsed });
  }

  toggleCollapsed(e) {
    e.stopPropagation();
    this.setCollapsed(!this.state.instructionsCollapsed);
  }

  setMenuVisible(menuVisible) {
    this.setState({ menuVisible })
  }

  toggleMenu(e) {
    e.stopPropagation();
    this.setMenuVisible(!this.state.menuVisible);
  }

  render() {
    const panelClassName = this.state.instructionsCollapsed
      ? 'panel-container__left instructions-collapsed'
      : 'panel-container__left';
    const instructionsPanelContent = !this.state.instructionsCollapsed ? this.props.children[2]: null;

    return (
      <div className='panel-container'>
        <Menu visible={this.state.menuVisible} setMenuVisible={this.setMenuVisible} />
        <div className={panelClassName}>
          {/* placeholder navbar */}
          <nav>
            <button onClick={this.toggleMenu}>
              <FontAwesomeIcon icon={faBars} />
            </button>
            <button onClick={this.toggleCollapsed}>
              <FontAwesomeIcon icon={faAnglesLeft} />
            </button>
          </nav>
          <div className='instructionsPanel'>{instructionsPanelContent}</div>
        </div>
        <div className='panel-container__right'>
          <div className='mapPanel'>{this.props.children[1]}</div>
          <div className='consolePanel'>{this.props.children[0]}</div>
        </div>
      </div>
    );
  }

}

export default PanelContainer;
