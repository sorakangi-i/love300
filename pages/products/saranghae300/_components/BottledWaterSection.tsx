"use client";

import { getMediaQueryCSS } from "@common/util";
import { SectionContainer } from "@styles/styled";
import { MouseEvent, useState } from "react";
import styled from "styled-components";
import { Lang } from "../../../_app";
import { BOTTLED_WATER_SECTION } from "../../../../constants/saranghae300";

interface Props {
  lang: Lang;
}

const BottledWaterSection = ({ lang }: Props) => {
  const [active, setActive] = useState("korea");
  if (!BOTTLED_WATER_SECTION[lang]) return;
  const { desc, buttons } = BOTTLED_WATER_SECTION[lang];

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget as HTMLButtonElement;

    setActive(button.name);
  };

  return (
    <Container>
      <Content>
        <h2>
          <strong>Global SaRangHae300</strong>
        </h2>
        <p>{desc}</p>
      </Content>

      <ImageWrapper>
        <StyledImage src={`/love300/product-bottled-water-${active}.png`} />
      </ImageWrapper>
      <ButtonContainer>
        <StyledButton
          name="china"
          $isActive={active === "china"}
          onClick={handleClick}
        >
          <span>🇨🇳</span> <span>{buttons[0]}</span>
        </StyledButton>
        <StyledButton
          name="usa"
          $isActive={active === "usa"}
          onClick={handleClick}
        >
          <span>🇺🇸</span> <span>{buttons[1]}</span>
        </StyledButton>
        <StyledButton
          name="usa"
          $isActive={active === "usa"}
          onClick={handleClick}
        >
          <span>🇻🇳</span> <span>{buttons[2]}</span>
        </StyledButton>
        <StyledButton
          name="saudi"
          $isActive={active === "saudi"}
          onClick={handleClick}
        >
          <span>🇸🇦</span> <span>{buttons[3]}</span>
        </StyledButton>
        <StyledButton
          name="usa"
          $isActive={active === "usa"}
          onClick={handleClick}
        >
          <span>🇸🇦</span> <span>{buttons[4]}</span>
        </StyledButton>
      </ButtonContainer>
    </Container>
  );
};

export default BottledWaterSection;

const Content = styled.div`
  text-align: center;
  font-weight: 700;
  margin-bottom: 61px;

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

    margin-bottom: 6px;
  }

  p {
    font-size: 24px;
    line-height: 150%; /* 36px */

    color: #101010;
    letter-spacing: -0.48px;
  }

  ${getMediaQueryCSS(`
    margin-bottom: 54px;
    
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
  background-image: url("/love300/bg-bottled-water.png");
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;

  gap: 0;

  ${getMediaQueryCSS(`

    padding-block: 120px;

  `)}
`;

const ImageWrapper = styled.div`
  display: flex;
  gap: 31px;

  margin-bottom: 78px;

  ${getMediaQueryCSS(`
    margin-bottom: 48px;
  `)}
`;

const StyledImage = styled.img`
  width: 100%;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-flow: wrap;
  gap: 20px;
  justify-content: center;

  ${getMediaQueryCSS(`
    gap: 10px;
  `)}
`;

const StyledButton = styled.button<{ $isActive?: boolean }>`
  border-radius: 100px;
  transition: all 0.3s;

  background: ${({ $isActive }) =>
    $isActive
      ? "linear-gradient(90deg, #064567, #e71139)"
      : "rgba(255, 255, 255, 0.3)"};

  color: ${({ $isActive }) => ($isActive ? "color: #ffffff" : "#101010")};

  box-shadow: 0px 4px 8px 0px rgba(6, 69, 103, 0.1);

  display: flex;
  padding: 12px 36px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  text-align: center;

  font-size: 20px;

  font-weight: 700;
  line-height: 150%; /* 30px */
  letter-spacing: -0.4px;

  &:hover {
    background: linear-gradient(90deg, #064567, #e71139);

    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  }

  ${getMediaQueryCSS(`
    gap: 10px;
  
    button {
      word-break: keep-all;
      display: flex;
      padding: 8px 24px;
      gap: 4px;
    }
  `)}
`;
