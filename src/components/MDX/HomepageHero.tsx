import Image from 'next/image';
import * as React from 'react';
import styled from 'styled-components';
import Container from '../Layout/Container';
import HeaderGraphics from '../../../public/images/home/HeaderGraphics.svg';

const StyledHomepageHero = styled.div`
  min-height: 446px;
  line-height: 1.3;

  background: linear-gradient(
    180.17deg,
    rgba(255, 255, 255, 0) 0.15%,
    rgba(121, 114, 252, 0.1) 99.84%,
    #fafdff 99.85%
  );

  @media (prefers-color-scheme: dark) {
    /* background: linear-gradient(180.17deg, #1A1A1A 0.15%, rgba(121, 114, 252, 0.1) 100.96%, #7972FC 100.97%); */
  }

  .section-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
    padding: 40px 0 20px 0;
    background-image: url('/images/home/HomepageHeroLightWaves.svg');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: right;

    @media (prefers-color-scheme: dark) {
      background-image: url('/images/home/HomepageHeroDarkWaves.svg');
    }

    @media (max-width: 1086px) {
      grid-template-columns: 1fr;
      row-gap: 50px;
    }
  }

  .hero-inner__content,
  .copy {
    height: 100%;
  }

  .copy {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 18px;
  }

  .header-graphics {
    display: flex;
    justify-content: flex-end;
  }

  .headline {
    font-size: 32px;
    color: var(--black1);
    letter-spacing: -0.663px;
    font-weight: bold;
  }

  .subheadline {
    font-size: 18px;
    color: var(--get-started-card-sub-bg);
  }

  .figure {
    img {
      max-width: 100%;
    }
  }

  .container {
    max-width: 1228px;
    margin: 0 auto;
  }
`;

function HomepageHero() {
  return (
    <StyledHomepageHero>
      <Container>
        <div className="copy">
          <h1 className="headline">Layer0 Documentation</h1>
          <p className="subheadline">
            The powerful CDN platform that integrates edge logic into your
            application code & extends the edge to the browser.
          </p>
        </div>
        <figure className="header-graphics">
          <Image src={HeaderGraphics as 'svg'} alt="Layer0 Documentation" />
        </figure>
      </Container>
    </StyledHomepageHero>
  );
}

export default HomepageHero;