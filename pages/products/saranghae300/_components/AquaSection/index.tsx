"use client";

import { getMediaQueryCSS } from "@common/util";

import styled from "styled-components";
import AquaSectionSecond from "./Second";
import { ReactNode, useEffect, useRef } from "react";
import useIntersectionObserver from "@hooks/useIntersectionObserver";
import ScaleSlide from "../ScaleSlide";

export interface Data {
  bg?: string;
  img: string;
  content: ReactNode;
}

export interface AquaSectionProps extends Data {
  children: Omit<Data, "bg">;
  isBlue?: boolean;
}

const AquaSection = ({
  isBlue,
  bg,
  img,
  content,
  children,
}: AquaSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {}, [ref.current]);

  return (
    <ScaleSlide
      style={{
        background: `no-repeat  url(${bg})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <ScaleSlide.Item>
        <ImgWrapper>
          <Image src={img} />
        </ImgWrapper>
      </ScaleSlide.Item>
      <ScaleSlide.Item>
        <Container ref={ref}>
          <p>{content}</p>
        </Container>
      </ScaleSlide.Item>
      <ScaleSlide.Item>
        <AquaSectionSecond isBlue={isBlue} {...children} />
      </ScaleSlide.Item>
    </ScaleSlide>
  );
};

export default AquaSection;

const Container = styled.div<{ $bg?: string }>`
  position: relative;
  padding-block: 0;
  gap: 0;
  justify-content: center;
  background-image: url(${({ $bg }) => $bg});

  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;

  p {
    text-align: start;
    /* (100vh - 45vh)/2 - margin - height*4 */
    top: 30px;

    /* top: calc(50% - 27.5vh - 64px - 240px); */

    left: 15.625vw;

    position: absolute;
    color: #101010;

    font-size: 40px;

    font-weight: 700;
    line-height: 150%; /* 60px */
    letter-spacing: -0.8px;

    > strong {
      background: var(
        --Linear,
        linear-gradient(90deg, #064567 0%, #e71139 118.52%)
      );
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    margin-bottom: 64px;

    ${getMediaQueryCSS(`
      left: 5.556vw;
      font-size: 24px;

      letter-spacing: -0.48px;
      padding-block: 120px;
      margin-bottom: 48px;
  `)}
  }
`;

const Image = styled.img``;

const ImgWrapper = styled.div`
  width: 100%;
  height: 100%;
  align-content: center;
  text-align: center;
  img {
    /* margin-left: 15.625vw; */
    object-fit: cover;
    width: 45vw;
    height: 45vh;
    border-radius: 16px;

    ${getMediaQueryCSS(`
    // margin-left: 0;
    // width: 100%;
    // height: 100%;
  `)}
  }
`;
