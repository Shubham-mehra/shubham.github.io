import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = [
    'React',
    'Next.js',
    'Node.js',
    'NestJS',
    'Python',
    'MongoDB',
    'Prisma',
    'Express',
    'HTML',
    'CSS',
    'JavaScript',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          {/* <div>
            <p>
              Hi! My name is Himanshu Khati. I am software engineer developing native{' '}
              <a href="https://developer.android.com/studio">Android</a>, apps for more than 6
              Years. I am passionate about mobile and I'm always seeking to grow my skills and work
              with teams who share the same passion.
            </p>

            <p>
              Currently I am exploring <a href="https://flutter.dev/">Flutter</a>,{' '}
              <a href="https://developer.apple.com/programs/">iOS</a>,{' '}
              <a href="https://kotlinlang.org/docs/multiplatform.html">Kotlin Multiplatform</a>, and{' '}
              <a href="https://developer.android.com/jetpack/compose">Jetpack Compose</a>. I am
              currently working @<a href="https://gigforce.in/">gigforce</a> as Lead mobile
              developer
            </p>

            <p>Here are a few technologies I’ve worked with:</p>
          </div> */}
          <div>
            <p>
              Hi! My name is Shubham Mehra. I am a software engineer developing scalable and secure{' '}
              <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">
                React
              </a>
              ,{' '}
              <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
                Next.js
              </a>
              , and{' '}
              <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">
                Node.js
              </a>{' '}
              web applications for more than 6+ years. I am passionate about full stack development
              and I'm always seeking to grow my skills and work with teams who share the same
              passion.
            </p>

            <p>
              Currently I am exploring modern frameworks, scalable backend architectures with{' '}
              <a href="https://nestjs.com/" target="_blank" rel="noopener noreferrer">
                NestJS
              </a>
              , and cloud integrations. I am currently working @
              <a href="https://telusinternational.com/" target="_blank" rel="noopener noreferrer">
                Telus International
              </a>{' '}
              as an Application Lead Module.
            </p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
