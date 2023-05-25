import {Link, NavLink} from 'react-router-dom';

function Header() {
  return (
   <nav className='app-Header'>
    <ul>
    <NavLink to="/" activeClassName="selected" exact>
      Country List
    </NavLink>
    <NavLink to="/details" activeClassName="selected">
      Country Details
    </NavLink>
    </ul>
   </nav>
  )
}

export default Header