import { useState } from 'react';
import Sidebar from '../Sidebar';
// import { useContext } from 'react'
import { Link } from 'react-scroll';
import { Buttondiv, Contact, Content, List, Logo, NavChild, NavContainer, Services, StyledHamburger } from './styles';
// import { MenuContext } from '../../atoms/MenuContext';

const Navbar = () => {
  const [shown, setShown] = useState(0);
  const toggleMenu = () => {
    if (shown === 0) {
      setShown(1);
      console.log('yes');
    } else {
      setShown(0);
      console.log('no');
    }
  };

  const closeSidebar = () => {
    setShown(0);
  };

  return (
    <>
      <NavContainer>
        <NavChild>
          <Logo src='/images/logo.png' alt='logo' />
          <Content>
            <List>
              <Link to='about' spy={true} smooth={true} offset={-100} duration={500}>
                About Us
              </Link>
            </List>
            <List>
              <Link to='team' spy={true} smooth={true} offset={-100} duration={500}>
                Team
              </Link>
            </List>
            <List>
              <Link to='resources' spy={true} smooth={true} offset={-100} duration={500}>
                Resources
              </Link>
            </List>
            <Services>
              <List>
                <Link to='faqs' spy={true} smooth={true} offset={-100} duration={500}>
                  Faqs
                </Link>
              </List>
            </Services>
          </Content>
          <Buttondiv>
            <Contact className='contact'>Contact</Contact>
            <StyledHamburger onClick={toggleMenu}></StyledHamburger>
          </Buttondiv>
        </NavChild>
      </NavContainer>

      {shown ? <Sidebar close={closeSidebar} shown={shown} /> : null}
    </>
  );
};

export default Navbar;
