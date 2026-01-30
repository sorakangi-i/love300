"use client";

import { getMediaQueryCSS } from "@common/util";
import { SectionContainer } from "@styles/styled";

import styled from "styled-components";
import { Lang } from "../../../_app";
import { SWIPER_SECTION } from "../../../../constants/saranghae300";
import Slide from "../../_components/Slide";

const SwiperSection = ({ lang }: { lang: Lang }) => {
  if (!SWIPER_SECTION[lang]) return;
  const { title, desc } = SWIPER_SECTION[lang];

  return (
    <Container>
      <Content>
        <h2>{title}</h2>
        <p>{desc}</p>
      </Content>

      <Slide
        urls={[
          "/love300/swiper1.png",
          "/love300/swiper2.png",
          "/love300/swiper3.png",
          "/love300/swiper4.png",
        ]}
      />
    </Container>
  );
};

export default SwiperSection;

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
  background-color: #dae2e7;
  align-items: center;
  gap: 66px;

  ${getMediaQueryCSS(`
    gap: 45px;
    padding-block: 120px;

  `)}
`;
