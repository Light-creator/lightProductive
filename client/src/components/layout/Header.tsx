import React from 'react'
import "../layout/layout.sass";

const Header = () => {
    const logo = require("../../idea.png")

  return (
    <header>
        <div className="block__header">
        <div className="left_menu">

        </div>
        <div className="logo">
            <img src={logo} alt="logo" />
        </div>
        <div className="right_menu">
            
        </div>
        </div>
    </header>
  )
}

export default Header