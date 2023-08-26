import NewsLetterSection from '../../components/molecules/Newsletter';
import { Container } from './styles';
import AboutUs from '../../components/atoms/AboutUs/Aboutus';

const Playground = () => {
  return (
    <Container>
      <NewsLetterSection />
      <AboutUs />
    </Container>
  );
};

export default Playground;
