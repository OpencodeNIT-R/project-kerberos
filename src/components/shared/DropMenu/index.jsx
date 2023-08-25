import { Navopen } from '../Navbar/styles';
import { Link } from 'react-scroll';
import { List } from '../Navbar/styles';

const DropMenu = props => {
  return (
    <Navopen style={{ color: '#6F0', fontFamily: 'Roboto,sans-serif', transform: '0.7s ease-out' }}>
      <List style={{ marginTop: '10vh' }}>
        <Link to='about' spy={true} smooth={true} offset={-100} duration={500} onClick={props.close}>
          About Us
        </Link>
      </List>
      <List style={{ marginTop: '10vh' }}>
        <Link to='team' spy={true} smooth={true} offset={-100} duration={500} onClick={props.close}>
          Team
        </Link>
      </List>
      <List style={{ marginTop: '10vh' }}>
        <Link to='resources' spy={true} smooth={true} offset={-100} duration={500} onClick={props.close}>
          Resources
        </Link>
      </List>

      <List style={{ marginTop: '10vh' }}>
        <Link to='faqs' spy={true} smooth={true} offset={-100} duration={500} onClick={props.close}>
          FAQs
        </Link>
      </List>
    </Navopen>
  );
};

export default DropMenu;
