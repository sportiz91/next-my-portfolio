import { useState, useEffect, useRef } from "react";

import {
  PageSection,
  SectionTitleAndLine,
  SectionTitle,
  SectionLine,
  SectionParagraphColor,
  SectionDivSeparator,
  SectionSeparator,
} from "../../globalcomponents";

import { SectionButton } from "../../globalcomponents/Buttons";

import {
  AboutDivWrapper,
  AboutMiniParagraph,
  AboutImg,
  AboutImgDiv,
  AboutImgOverlay,
  AboutImgOverflow,
  AboutParagraphWrapper,
} from "./AboutStyles";
import Timeline from "./Timeline";

const About = ({ windowHeight, windowScroll }) => {
  const [showSection, setShowSection] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const projectsRef = useRef();

  useEffect(() => {
    const projectsInitialPosition =
      projectsRef.current.getBoundingClientRect().top + windowScroll;

    const currentPosition = windowHeight + windowScroll;

    if (currentPosition >= projectsInitialPosition) {
      if (showSection) {
        return;
      } else {
        setShowSection(true);
      }
    }
  }, [windowScroll, showSection, windowHeight]);

  return (
    <PageSection ref={projectsRef} showSection={showSection} about id="about">
      <SectionTitleAndLine>
        <SectionTitle title nomargin links>
          About
        </SectionTitle>
        <SectionLine />
      </SectionTitleAndLine>

      <AboutDivWrapper>
        <AboutParagraphWrapper>
          <AboutMiniParagraph>
            Hello! My name is{" "}
            <SectionParagraphColor>Santiago Pablo Ortiz</SectionParagraphColor>{" "}
            and I enjoy creating things that live on the internet. I'm a
            self-taught{" "}
            <SectionParagraphColor>
              MERN Full Stack Developer.
            </SectionParagraphColor>{" "}
            My interest in web development started in 2020 when I created my
            first WordPress website for a small business I had at that time.{" "}
          </AboutMiniParagraph>

          <AboutMiniParagraph>
            A bit about me: I graduated with a{" "}
            <SectionParagraphColor>Bachelor of Economics</SectionParagraphColor>{" "}
            in 2013 and then I got a{" "}
            <SectionParagraphColor>Master in Finance</SectionParagraphColor>{" "}
            Degree which I ended up in 2016. Since 2013, I worked in several
            companies, mostly as a{" "}
            <SectionParagraphColor>
              stock, bonds & derivatives trader/financial advisor
            </SectionParagraphColor>
            . From 2018 on, I worked as an independent financial advisor and
            with my{" "}
            <SectionParagraphColor>
              personal brand/business, Inverfree,
            </SectionParagraphColor>{" "}
            which was an e-learning site for Cryptocurrency investing education
            (mostly) and more traditional finance.{" "}
          </AboutMiniParagraph>

          {showMore ? null : <AboutMiniParagraph> [...] </AboutMiniParagraph>}

          {showMore ? (
            <>
              <AboutMiniParagraph>
                I always had a big taste for programming. Back to high school, I
                graduated with a{" "}
                <SectionParagraphColor>
                  computing and informatics oriented degree,
                </SectionParagraphColor>{" "}
                which was mostly centered in{" "}
                <SectionParagraphColor>Visual Basic</SectionParagraphColor> and
                core programming principles. Then, during my Master's time, I
                took some <SectionParagraphColor>Python</SectionParagraphColor>{" "}
                programming optional seminars, because it was the booming
                language at that time.{" "}
              </AboutMiniParagraph>
              <AboutMiniParagraph>
                But my real passion and{" "}
                <SectionParagraphColor>
                  Full-Stack journey started in 2020
                </SectionParagraphColor>{" "}
                when I created my first site for Inverfree. Since then, I've
                been{" "}
                <SectionParagraphColor>
                  learning Full-Stack everyday (5-6 hours a day).
                </SectionParagraphColor>{" "}
                I'm mostly centered on{" "}
                <SectionParagraphColor>MERN Stack,</SectionParagraphColor> but
                planning to learn more technologies because I love learning and
                trying new tech stuff. My passion for Full-Stack, Programming
                and Computer Science led me to a{" "}
                <SectionParagraphColor>career change</SectionParagraphColor> and
                breaking into web development.
              </AboutMiniParagraph>
              <AboutMiniParagraph>
                I also must mention that{" "}
                <SectionParagraphColor>
                  I love Crypto so much.
                </SectionParagraphColor>{" "}
                I'm really full into{" "}
                <SectionParagraphColor>
                  Blockchain tech, Defi, NFT's
                </SectionParagraphColor>{" "}
                and all the nerd stuff. I'm not only interested in this industry
                as an investor standpoint, but as a developer's too. As a side
                hobby, I'm learning{" "}
                <SectionParagraphColor>
                  Solidity programming
                </SectionParagraphColor>{" "}
                and doing some Blockchain Development too.
              </AboutMiniParagraph>
            </>
          ) : null}
        </AboutParagraphWrapper>

        <SectionButton about onClick={() => setShowMore(!showMore)}>
          Show {showMore ? "less" : "more"}
        </SectionButton>

        <AboutImgDiv>
          <AboutImgOverlay>
            <AboutImg src="/Images/me.jpeg" alt="profile-picture" />
            <AboutImgOverflow className="overflow" />
          </AboutImgOverlay>
        </AboutImgDiv>
      </AboutDivWrapper>

      <SectionDivSeparator>
        <SectionSeparator about />
      </SectionDivSeparator>

      <Timeline />
    </PageSection>
  );
};

export default About;
