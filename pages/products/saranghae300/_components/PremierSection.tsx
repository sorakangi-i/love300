"use client";

import { getMediaQueryCSS } from "@common/util";
import useIntersectionObserver from "@hooks/useIntersectionObserver";
import { SectionContainer } from "@styles/styled";

import { useRef } from "react";
import styled from "styled-components";
import { Lang } from "../../../_app";
import { PREMIER_SECTION } from "../../../../constants/saranghae300";

const keyframe = [
  {
    opacity: 0.1,
    transform: "translateY(10%)",
  },
  {
    opacity: 1,
    transform: "translateY(0%)",
  },
];

const PremierSection = ({ lang }: { lang: Lang }) => {
  const ref = useRef<HTMLDivElement>(null);

  useIntersectionObserver(ref, {
    threshold: 0.5,
    freezeOnceVisible: true,
    onIntersect: (observer) => {
      if (!ref.current) return;

      ref.current.animate(keyframe, {
        duration: 500,
        easing: "linear",
        fill: "forwards",
        // iterations: Infinity,
      });
    },
  });

  if (!PREMIER_SECTION[lang]) return;
  const { title, title2, desc, desc2 } = PREMIER_SECTION[lang];
  return (
    <Container ref={ref}>
      <Wrapper style={{ flexDirection: "column-reverse" }}>
        <StyledImage src="/love300/premier1.png" />

        <Content>
          <h2>{title}</h2>
          <p>{desc}</p>
        </Content>
      </Wrapper>
      <Wrapper>
        <Content>
          <h2>{title2}</h2>
          <p>{desc2}</p>
        </Content>

        <StyledImage src="/love300/premier2.png" />
      </Wrapper>
    </Container>
  );
};

export default PremierSection;

const Wrapper = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 128px;

  justify-items: center;

  ${getMediaQueryCSS(`
    display: flex;
    flex-direction: column;
    gap: 56px;
  `)};
`;

const Content = styled.div`
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
    color: #101010;
    font-size: 20px;
    font-weight: 400;
    line-height: 150%; /* 30px */
    letter-spacing: -0.4px;
  }

  ${getMediaQueryCSS(`

    h2 {
      margin-bottom: 16px;
      font-size: 28px;
      letter-spacing: -0.64px;
    }

    p {
      font-size: 18px;
      letter-spacing: -0.36px;
    }
  `)}
`;

const Container = styled(SectionContainer)`
  opacity: 0;
  transform: translateY(10%);
  gap: 178px;

  ${getMediaQueryCSS(`
    gap: 119px;
    padding-block: 120px;
  `)}
`;

const StyledImage = styled.img`
  max-width: 588px;
  width: 100%;
`;
