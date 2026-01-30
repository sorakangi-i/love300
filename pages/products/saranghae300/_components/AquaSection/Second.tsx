"use client";

import { getMediaQueryCSS } from "@common/util";
import { SectionContainer } from "@styles/styled";

import styled, { css } from "styled-components";
import { Data } from ".";

const AquaSectionSecond = ({
  img,
  content,
  isBlue,
}: Data & { isBlue?: boolean }) => {
  return (
    <Container>
      <Wrapper $isBlue={isBlue}>
        <StyledImage src={img} />

        <Content>
          <p>{content}</p>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default AquaSectionSecond;

const Wrapper = styled.div<{ $isBlue?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${({ $isBlue }) => {
    if ($isBlue)
      return css`
        flex-direction: row-reverse;
      `;
  }};

  ${getMediaQueryCSS(`
    flex-direction: column;
    justify-content: center;
    gap: 64px;
  `)}
`;
const Container = styled(SectionContainer)`
  padding-block: 0;
  gap: 0;
  justify-content: center;

  min-height: 100vh;

  ${getMediaQueryCSS(`
    padding-block: 120px;
  `)}
`;

const StyledImage = styled.img`
  max-width: 600px;
  margin-top: 64px;

  ${getMediaQueryCSS(`
    max-width: 100%;

    margin-top: 48px;
  `)}
`;

const Content = styled.div`
  p {
    color: #fff;

    font-size: 32px;

    font-weight: 700;
    line-height: 150%; /* 48px */
    letter-spacing: -0.64px;

    ${getMediaQueryCSS(`
      font-size: 24px;
      letter-spacing: -0.48px;
  `)}
  }
`;
