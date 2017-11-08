import React, {Component} from 'react';
import './styles/index.css';



const Tab = (props) => (
      <li className="tab">
        <a className={`${props.isActive ? 'active' : ''}`}
          onClick={(event) => {
            event.preventDefault();
            props.onClick(props.tabIdx);
          }}>
          {props.title}
      </a>
      </li>
    )

export default Tab;
