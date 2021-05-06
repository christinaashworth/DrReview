import React, { useState, useContext, useEffect } from 'react';
import { Menu } from 'semantic-ui-react';
import { UserProfileContext } from "../providers/UserProfileProvider";

const Navbar = () => {

  const { isLoggedIn, logout } = useContext(UserProfileContext);
  const { activeItem, setActiveItem } = useState({});
  
  if (isLoggedIn === true) {
    const userProfile = sessionStorage.getItem("userProfile");
    var currentUser = JSON.parse(userProfile)
  }

  const handleItemClick = (e, { name }) => setActiveItem({ activeItem: name })

  return (
    <Menu>
      {isLoggedIn &&
      <>
      <Menu.Item name='Find A Doctor' href='/doctors' active={activeItem === 'Find A Doctor'} onClick={handleItemClick}>
        Find A Doctor
      </Menu.Item>
      <Menu.Item name='View My Profile' href='/myprofile' active={activeItem === 'View My Profile'} onClick={handleItemClick}>
        View My Profile
      </Menu.Item>
      <Menu.Item name='Log Out' onClick={logout}>Logout</Menu.Item>
      </>
      }
    </Menu>
  )
}

export default Navbar;
