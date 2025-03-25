import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';
// import { email } from '@config';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  padding: 0;

  @media (max-width: 480px) and (min-height: 700px) {
    padding-bottom: 10vh;
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 10px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h1 style={{ marginBottom: 0, marginTop: '3vh' }}>Hi, I'm</h1>;
  const two = (
    <h2 className="big-heading">
      <strong>Buddhini Katuwandeniya</strong>
    </h2>
  );
  const three = <h3 className="medium-heading">Passionate Data Enthusiast</h3>;
  const four = (
    <>
      <p style={{ marginTop: '3vh' }}>
        I’m an enthusiastic Data Engineer who holds a{' '}
        <a href="https://cmb.ac.lk/" target="_blank" rel="noreferrer">
          B.Sc. (Hons) in Applied Statistics from the University of Colombo, Sri Lanka.
        </a>{' '}
        I aspire to excel in the field of data engineering and visualization, leveraging analytical
        insights to drive informed decision-making. Currently, I work at{' '}
        <a href="https://www.acumatica.com/" target="_blank" rel="noreferrer">
          Acumatica
        </a>
        , where I help multiple departments identify key performance indicators (KPIs) and key
        metrics, enabling data-driven strategies. My focus lies in building scalable data pipelines,
        cloud-based solutions, and advanced analytics to enhance business intelligence and
        operational efficiency.
      </p>
    </>
  );

  const items = [one, two, three, four];

  return (
    <StyledHeroSection>
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}
    </StyledHeroSection>
  );
};

export default Hero;
