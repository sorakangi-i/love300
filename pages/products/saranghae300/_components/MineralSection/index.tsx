"use client";

import { getMediaQueryCSS } from "@common/util";
import { SectionContainer } from "@styles/styled";

import styled from "styled-components";

import { MINERAL_SECTION } from "../../../../../constants/saranghae300";
import { Lang } from "../../../../_app";

const MineralSection = ({ lang }: { lang: Lang }) => {
  if (!MINERAL_SECTION[lang]) return;
  const { title, desc } = MINERAL_SECTION[lang];
  return (
    <Container>
      <Content>
        <h2>{title}</h2>
        <p>{desc}</p>
      </Content>

      <ImageWrapper>
        <StyledImage src="/love300/minerals-animation.svg" />
        <span>MINERALS</span>
      </ImageWrapper>
    </Container>
  );
};

export default MineralSection;

const Content = styled.div`
  text-align: center;
  font-weight: 700;

  h2 {
    color: #101010;

    font-size: 48px;
    line-height: 150%; /* 36px */

    letter-spacing: -0.96px;

    strong {
      background: linear-gradient(90deg, #064567 0%, #e71139 68.79%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    margin-bottom: 18px;
  }

  p {
    font-size: 24px;
    line-height: 150%; /* 36px */

    color: #101010;
    letter-spacing: -0.48px;
  }

  ${getMediaQueryCSS(`
    
    h2 {
      margin-bottom: 16px;
      text-align: center;
      font-size: 32px;
      letter-spacing: -0.64px;
    }

    p {
      font-size: 18px;
      letter-spacing: -0.36px;
    }
  `)}
`;

const Container = styled(SectionContainer)`
  align-items: center;
  gap: 66px;

  ${getMediaQueryCSS(`
    gap: 90px;
    padding-block: 120px;

  `)}
`;

const StyledImage = styled.img`
  max-width: 792px;

  ${getMediaQueryCSS(`
    max-width: 100%;
  `)}
`;

const ImageWrapper = styled.div`
  position: relative;

  span {
    right: 50%;
    bottom: 50%;
    transform: translate(50%, 50%);

    position: absolute;
    color: #fff;
    text-align: center;

    font-size: 24px;

    font-weight: 700;
    line-height: 150%; /* 36px */
    letter-spacing: -0.48px;
  }
`;
