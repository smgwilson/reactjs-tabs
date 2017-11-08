import React, { Component } from 'react';
import './styles/index.css';

class Tabs extends Component {
  constructor() {
    super();

    // set the active tab state 
    this.state = {
      activeTabIdx: 0
    };

    this.handleTabClick = this.handleTabClick.bind(this);
  }

  // update active Tab Index when a tab is clicked
  handleTabClick(tabIdx) {
    this.setState({
      activeTabIdx: tabIdx 
      
      })
  }

  // render the Tab children titles as navigation
    renderTabTitles(){
      return React.Children.map(this.props.children, (child, idx) => {
        return React.cloneElement(child,{
          onClick: this.handleTabClick,
          tabIdx: idx,
          isActive: idx === this.state.activeTabIdx
        });
      });
    }

  // render the active tabs content
    renderActiveTabContent() {
      const { children } = this.props;
      const { activeTabIdx } = this.state;
      if (children[activeTabIdx]) {
        return children[activeTabIdx].props.children;
      }
    }

  render () {
    return(
      <div className="tabs">
        <ul className="tabs-nav">
          {this.renderTabTitles()}
        </ul>
        <div className="active-content">
          {this.renderActiveTabContent()}
        </div>
      </div>
    );
  }
}

export default Tabs;