import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
      <div>

        <ul className="nav nav-sidebar">
          <li><NavLink to="/history/bug">bug趋势图</NavLink></li>
          <li><NavLink to="/history/model">测试机型趋势图</NavLink></li>
        </ul>

      </div>
    )
  }
})
