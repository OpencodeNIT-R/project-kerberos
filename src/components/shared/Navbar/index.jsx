// import styled from 'styled-components';
import { Buttondiv, Contact, Content, Hamburger, Image, List, NavChild, NavContainer, Services } from './styles';
// import { NavText } from '../Typography';
const Navbar = () => {
  return (
    <NavContainer>
      <NavChild>
        <img src='/images/logo.png' alt='logo' />
        <Content>
          <List>Analytics Consulting</List>
          <List>About Us</List>
          <List>Resources</List>
          <Services>
            <List>Services</List>
            <Image src='/images/Vector 9.png' alt='' style={{ marginLeft: '5px' }} />
          </Services>
        </Content>
        <Buttondiv>
          <Contact>Contact</Contact>
          <Hamburger src='/images/three-bars.png' alt='' />
        </Buttondiv>
      </NavChild>
    </NavContainer>
  );
};

export default Navbar;
