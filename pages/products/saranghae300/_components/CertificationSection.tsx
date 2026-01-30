"use client";

import { ScreenBoundary } from "@common/constant";
import { getMediaQueryCSS } from "@common/util";
import { SectionContainer } from "@styles/styled";

import styled, { css, keyframes } from "styled-components";

import { CERTIFICATION_SECTION } from "../../../../constants/saranghae300";
import { Lang } from "../../../_app";

const images = [
  {
    src: "/love300/certification-1.png",
    alt: "certification-1",
  },
  {
    src: "/love300/certification-2.png",
    alt: "certification-2",
  },
  {
    src: "/love300/certification-3.png",
    alt: "certification-3",
  },
  {
    src: "/love300/certification-4.png",
    alt: "certification-4",
  },
  {
    src: "/love300/certification-5.png",
    alt: "certification-5",
  },
  {
    src: "/love300/certification-6.png",
    alt: "certification-6",
  },
  {
    src: "/love300/certification-7.png",
    alt: "certification-7",
  },
  {
    src: "/love300/certification-8.png",
    alt: "certification-8",
  },
  {
    src: "/love300/certification-9.png",
    alt: "certification-9",
  },
  {
    src: "/love300/certification-10.png",
    alt: "certification-10",
  },
];

const animation = (position: number) => {
  return keyframes`
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(${-position}%);
    }
    75% {
      transform: translateX(${position}%);
    }
    100% {
      transform: translateX(0);
    }
  `;
};

const CertificationSection = ({ lang }: { lang: Lang }) => {
  if (!CERTIFICATION_SECTION[lang]) return;
  const { title, desc } = CERTIFICATION_SECTION[lang];
  return (
    <Container>
      <div style={{ overflow: "hidden" }}>
        <Content>
          <h2>{title}</h2>
          <p>{desc}</p>
        </Content>

        <ImageContainer>
          <Blur />
          <Blur $right />

          <ListWrapper $right>
            {images.slice(0, 5).map((image) => (
              <ImgWrapper key={image.alt}>
                <StyledImage {...image} />
              </ImgWrapper>
            ))}
          </ListWrapper>
          <ListWrapper>
            {images.slice(5, 10).map((image) => (
              <ImgWrapper key={image.alt}>
                <StyledImage {...image} />
              </ImgWrapper>
            ))}
          </ListWrapper>
        </ImageContainer>
      </div>
    </Container>
  );
};

export default CertificationSection;

const Content = styled.div`
  text-align: center;
  font-weight: 700;
  margin-bottom: 78px;

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
    margin-bottom: 60px;

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
  background: #eff4f7;

  gap: 78px;

  ${getMediaQueryCSS(`
    gap: 60px;
    padding-block: 120px;

  `)}
`;

const StyledImage = styled.img`
  width: 100%;
`;

const ImageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const ListWrapper = styled.ul<{ $right?: boolean }>`
  display: flex;
  gap: 10px;

  animation: ${animation(20)} 10s linear infinite;

  ${({ $right }) => {
    if ($right)
      return css`
        animation: ${animation(-20)} 10s linear infinite;
      `;

    return css``;
  }}

  ${getMediaQueryCSS(`
    > li {
      flex: 0 0 calc(100% / 3);
    }
  `)};

  // getMediaQueryCSS 안에서 keyframe 사용 불가
  @media screen and (max-width: ${ScreenBoundary.Phone2PC}) {
    animation: ${animation(70)} 20s linear infinite;

    ${({ $right }) => {
      if ($right)
        return css`
          animation: ${animation(-70)} 20s linear infinite;
        `;

      return css``;
    }}
  }
`;

const ImgWrapper = styled.li`
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #eaeaea;
  background: #fff;

  /* 12 */
  box-shadow: 0px 6px 14px 2px rgba(0, 0, 0, 0.1);
`;

const Blur = styled.div<{ $right?: boolean }>`
  z-index: 9;
  position: absolute;
  background: linear-gradient(90deg, #eff4f7 0%, rgba(239, 244, 247, 0) 100%);
  left: -10px;
  height: 100%;
  width: 20%;

  ${({ $right }) => {
    if ($right)
      return css`
        background: linear-gradient(
          270deg,
          #eff4f7 0%,
          rgba(239, 244, 247, 0) 100%
        );
        right: -10px;
        left: unset;
      `;
  }}
`;
