import Heading2 from '../../shared/Typography/Heading2';
import Body2 from '../../shared/Typography/Body2';
import styled from 'styled-components';
// import { AboutContent } from "../../../data/About";
// import { AboutContent } from "../../../data/About";

const AboutUsSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 50px;
  background-color: #f8f8f8;
  text-align: center;
  overflow: hidden;
  width: 100%;
`;

const AboutUsRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 128px;
  flex-wrap: wrap;
`;

const AboutUsImage = styled.img`
  height: 400px;
  width: 400px;
  border-radius: 8px;
  margin-right: 20px;
  order: ${({ reverse }) => (reverse ? 2 : 1)};
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    width: 100%;
    height: auto;
  }
`;
const AboutUsText = styled.div`
  display: flex;
  flex-wrap: wrap;

  text-align: left;
  order: ${({ reverse }) => (reverse ? 1 : 2)};
`;

const AboutUsBox1 = styled.div`
  text-align: left;
  order: ${({ reverse }) => (reverse ? 1 : 2)};
  width: 60%;
  margin-right: 48px;
`;

const AboutUsBox3 = styled.div`
  text-align: left;
  order: ${({ reverse }) => (reverse ? 1 : 2)};
  width: 60%;
  margin-right: 144px;
  display: flex;
  flex-direction: column;
`;

const AboutUs = () => {
  return (
    <AboutUsSection>
      <AboutUsRow>
        <AboutUsBox1>
          <AboutUsText reverse>
            <Heading2 id='1'></Heading2>
            <Body2>
              Our club aims to provide comprehensive resources and support to help members thrive in the analytics and consulting
              fields. With a focus on Knowledge sharing, networking, and skill development, we strive to create a community of
              like-minded professionals dedicated to advancing their careers.
            </Body2>
          </AboutUsText>
        </AboutUsBox1>

        <AboutUsImage
          reverse
          src='https://res.cloudinary.com/dafdencvh/image/upload/v1693048482/kerbero%20project/image_12_it5577.png'
          alt='Right Image'
        />
      </AboutUsRow>

      <AboutUsRow>
        <AboutUsImage
          src='https://res.cloudinary.com/dafdencvh/image/upload/v1693048464/kerbero%20project/image_2_xmyc7y.png'
          alt='Left Image'
        />
        <AboutUsBox1>
          <AboutUsText>
            <Heading2>Unlocking Insights and Driving Success through Analytics and Consulting</Heading2>
            <Body2>
              Our club is dedicated to empowering individuals and businesses with th knowledge and expertise in analytics and
              consulting. Join us to stay ahead in this dynamic field.
            </Body2>
          </AboutUsText>
        </AboutUsBox1>
      </AboutUsRow>

      <AboutUsRow>
        <AboutUsBox3>
          <AboutUsText reverse>
            <Heading2>Domain Activities Offered: </Heading2>
            <Body2>Explore our wide range of domain related activities designed to enhance your skills and knowledge</Body2>

            <Heading2>Expert Consulting Services: </Heading2>

            <Body2>
              Get personalized consulting services from our team of experienced proffessionals to help you succeed in your domain
              career.
            </Body2>
            <Heading2>Informative Workshops: </Heading2>
            <Body2>
              Attend our informative workshops and gain valuable insughts into the latest trends and advancements in the domain
              industry
            </Body2>
          </AboutUsText>
        </AboutUsBox3>

        <AboutUsImage
          reverse
          src='https://res.cloudinary.com/dafdencvh/image/upload/v1693048472/kerbero%20project/image_3_qyip8s.png '
          alt='Right Image'
        />
      </AboutUsRow>
    </AboutUsSection>
  );
};

export default AboutUs;
