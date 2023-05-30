import React from 'react'
import BackpackIcon from '@mui/icons-material/Backpack';
import SubwayIcon from '@mui/icons-material/Subway';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import "./Header.css"

function Header() {

  const [{basket}, dispatch] = useStateValue();

  return (
    <div className='header'>
        <Link to="/" style={{textDecoration: "none"}}>
            <div className="header_logo">
            <SubwayIcon className="header_logoImage" fontSize="large" />
            <h2 className="header_logoTitle">SUBWAY GM</h2>
            </div>
        </Link>

      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon"/>
      </div>

      <div className="header_nav">
        <div className="nav_item">
          <span className="nav_itemLineOne">Hello Guest</span>
          <span className="nav_itemLineTwo">Sign In</span>
        </div>
        <div className="nav_item">
        <span className="nav_itemLineOne">Your</span>
        <span className="nav_itemLineTwo">Shop</span>
        </div>

        <Link to="/checkout" style={{textDecoration: "none"}}>
            <div className="nav_itemBasket">
            <BackpackIcon />
            <span className="nav_itemLineTwo nav_basketCount">{basket.length}</span>
            </div>
        </Link>
 
      </div>
    </div>
  )
}

export default Header