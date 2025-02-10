import React from 'react'
import './Header.css'
// import NetflixLogo from '../../assets/images/Logos-Readability-Netflix-logo.png'
// import SearchIcon from '@mui/icons-material/Search';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import AccountBoxIcon from '@mui/icons-material/AccountBox';
// import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';


const Header = () => {
  return (
    <div>
    <div className='header_outer_container'>
     <div className='header-container'>
     <div className='header_left'>
     <ul>
     <li> <img src="Netflixlogo" alt="" /></li>
     <li>Home</li>
     <li>TVShows</li>
     <li>Movies</li>
     <li>Latest</li>
     <li>MyList</li>
     <li>Browse by Languages</li>
     </ul>
     </div>
     <div className='header_right'>
     <div>
     <SearchIcon />
    <NotificationsIcon />
    <AccountBoxIcon />
    <ArrowDropDownCircleIcon />
     </div>
     </div>
     </div>
     </div>
    </div>
  )
}

export default Header





