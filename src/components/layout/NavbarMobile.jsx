import { useState } from 'react';
import {ImMenu3} from 'react-icons/im';
import {ImMenu4} from 'react-icons/im';
import NavbarMobileLinks from './NavbarMobileLinks';


function NavbarMobile() {

  const [open, setOpen] = useState(false);

  const closedIcon = <ImMenu3 className='menu-closed-icon hamburger-icon' color='white' onClick={() => setOpen(!open)} />
  const openIcon = <ImMenu4 className='menu-open-icon hamburger-icon' color='white' onClick={() => setOpen(!open)} />

  return (
    <div className="navbar-mobile-container">
      {open ? openIcon : closedIcon}
      {open && <NavbarMobileLinks />}
    </div>
  )
}

export default NavbarMobile