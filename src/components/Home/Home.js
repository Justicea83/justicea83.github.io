import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import svgRect from '@src/static/home_rect.svg';

import { HeroCard } from './HeroCard';
import { HomeWrapper, Intro } from './Home.style';

import IconLink from '@common/IconLink';
import PageHeader from '@common/PageHeader';
import Flex from '@common/Flex';
import Button from '@common/Button';

import { Card, CardIcon, CardText, CardTitle } from '@common/Card';

const ThingsILove = () => (
  <Flex justify="space-between" align="center">

      <Card>
          <CardIcon>
              <FontAwesomeIcon icon="code" />
          </CardIcon>
          <CardTitle>BackEnd</CardTitle>
          <CardText>
              I'm more backend end focused. I just love to architect applications from scratch.
          </CardText>
      </Card>

    <Card>
      <CardIcon>
        <FontAwesomeIcon icon="code" />
      </CardIcon>
      <CardTitle>FrontEnd</CardTitle>
      <CardText>
        I love to work with (Reactjs and VueJs) as well as pure
        HTML, CSS.
      </CardText>
    </Card>



    <Card>
      <CardIcon>
        <FontAwesomeIcon icon={['fas', 'futbol']} />
      </CardIcon>
      <CardTitle>Football</CardTitle>
      <CardText>
        I am a die hard Chelsea fan!
      </CardText>
    </Card>
  </Flex>
);

const Home = () => {
  return (
    <HomeWrapper id="home">
      <img className="svg-rect" src={svgRect} alt=""></img>

      <Intro>
        {/* <Parallax y={[50, -50]} className="home__text"> */}
        <div className="home__text">
          <p>Hello, I’m</p>
          <h1>JUSTICE ARTHUR</h1>
          <p className="adjust">FULLSTACK DEVELOPER</p>

          <div className="home__CTA">
            <Button className="cta" as="a" href="#">
              Download Resume
            </Button>

            <div className="home__social">
              <IconLink
                label="github"
                icon={['fab', 'github']}
                href="//github.com/justicea83"
              />
              <IconLink
                label="twitter"
                icon={['fab', 'twitter']}
                href="//twitter.com/justicea83"
              />
              <IconLink
                label="linkedin"
                icon={['fab', 'linkedin-in']}
                href="//linkedin.com/in/justicea83"
              />
            </div>
          </div>
        </div>
        {/* </Parallax> */}
        <HeroCard />
      </Intro>

      {/* Things I LOVE */}
      <PageHeader style={{ marginBottom: 30 }}>
        Things I love <i className="fas fa-heart" />
      </PageHeader>
      <ThingsILove />
    </HomeWrapper>
  );
};

export default Home;
