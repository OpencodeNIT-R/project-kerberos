// import styled from 'styled-components';
import { Contact, Content, List, NavChild, NavContainer } from './styles';
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
          <div>
            <List>Services</List>
            <img src='/images/Vector 9.png' alt='' />
          </div>
        </Content>
        <Contact>Contact</Contact>
      </NavChild>
    </NavContainer>
  );
};

export default Navbar;
