import React, { Component } from 'react'
import {Menu} from 'semantic-ui-react'
import { NavLink} from 'react-router-dom'
// import "./Menu.css";


export default class MenuExampleSecondary extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }
  

  render() { 
   
    const { activeItem } = this.state

    return (
      <Menu>
        <div className='logo'>
        <Menu.Item>
         
       </Menu.Item>
      </div>
      <div className='navbar'>
         <div className="home">
            <Menu.Item
            as={NavLink} to="/"
            width='bold'
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
            />
       </div>
       <div className="about">
            <Menu.Item
            as={NavLink} to="/about"
            name='About'
            active={activeItem === 'about'}
            onClick={this.handleItemClick}
            />
        </div>
        <div className="menu">
            <Menu.Item
            as={NavLink} to="/menu"
            name='Menu'
            active={activeItem === 'menu'}
            onClick={this.handleItemClick}
            />
        </div>
        </div>
   </Menu>
      
     
    )
  }
}



