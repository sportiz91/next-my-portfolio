import {
  WelcomeSection,
  DivWelcomeContent,
  DivWelcomeSVG,
} from "./WelcomeStyles";

import {
  SectionTitle,
  SectionParagraph,
  SectionSeparator,
} from "../../globalcomponents";

import { SectionButton } from "../../globalcomponents/Buttons";

import BackgroundAnimation from "./BackgroundAnimation";

const Welcome = () => {
  return (
    <WelcomeSection>
      <DivWelcomeContent>
        <SectionTitle>
          Welcome To <br /> My Personal Portfolio
        </SectionTitle>
        <SectionParagraph>
          The purpose of JavaScript Mastery is to help aspiring and established
          developers to take their development skills to the next level and
          build awesome apps.
        </SectionParagraph>
        <SectionButton>Learn More</SectionButton>
        <SectionSeparator />
      </DivWelcomeContent>
      <DivWelcomeSVG>
        <BackgroundAnimation />
      </DivWelcomeSVG>
    </WelcomeSection>
  );
};

export default Welcome;
