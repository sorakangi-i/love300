import { getMediaQueryCSS } from "@common/util";
import React from "react";
import styled from "styled-components";
import {
  MobileImage,
  DesktopImage,
  SectionContainer,
  SectionSubTitle,
  SectionTitle,
  StyledSection,
} from "@styles/styled";

import { Lang } from "../../../_app";
import Slide from "../../_components/Slide";

import {
  PRODUCT_FIRST_SECTION,
  PRODUCT_SECOND_SECTION,
  PRODUCT_THIRD_SECTION,
} from "../../../../constants/apexell";

interface Props {
  lang: Lang;
}
// {content[lang].sectionTitle}
const ProductSection = ({ lang }: Props) => {
  if (!PRODUCT_FIRST_SECTION[lang]) return;
  if (!PRODUCT_THIRD_SECTION[lang]) return;
  const { title, desc } = PRODUCT_FIRST_SECTION[lang];
  const {
    title: title2,
    desc: desc2,
    lis: lis2,
    subDesc,
  } = PRODUCT_SECOND_SECTION[lang];
  const { title: title3, lis: lis3 } = PRODUCT_THIRD_SECTION[lang];

  return (
    <SectionContainer>
      <StyledSection>
        <SectionTitle>{title}</SectionTitle>
        <Paragraph>{desc}</Paragraph>
      </StyledSection>

      <StyledSection>
        <SectionTitle>{title2}</SectionTitle>
        <Wrapper>
          <DesktopImage src="/love300/patents.png" alt="patents" />
          <MobileImageWrapper>
            <Slide
              urls={["/love300/patent-first.png", "/love300/patent-second.png"]}
            />
          </MobileImageWrapper>

          <Paragraph>{desc2}</Paragraph>

          <Box>
            <List>
              <ListItem data-index="1">{lis2?.[0]}</ListItem>
              <ListItem data-index="2">{lis2?.[1]}</ListItem>
              <ListItem data-index="3">{lis2?.[2]}</ListItem>
              <ListItem data-index="4">{lis2?.[3]}</ListItem>
              <ListItem data-index="5">{lis2?.[4]}</ListItem>
            </List>

            <Highlight>{subDesc}</Highlight>
          </Box>
        </Wrapper>
      </StyledSection>
      <StyledSection>
        <SectionTitle>{title3}</SectionTitle>
        <ProcessContainer>
          <DesktopImage
            src={`/love300/product-process-${lang}.png`}
            alt="product process"
          />
          <MobileImage
            src={`/love300/product-process-${lang}-mobile.png`}
            alt="product process"
          />

          <div>
            <SectionSubTitle>{lis3?.[0]}</SectionSubTitle>
            <Card>
              {lis3?.slice(1, 4).map((item, index) => (
                <CardList key={index} data-index={`0${index + 1}`}>
                  <pre>{item}</pre>
                </CardList>
              ))}
            </Card>
          </div>

          <div>
            <SectionSubTitle>{lis3?.[4]}</SectionSubTitle>
            <Card>
              {lis3?.slice(5, 8).map((item, index) => (
                <CardList key={index} data-index={`0${index + 1}`}>
                  <pre>{item}</pre>
                </CardList>
              ))}
            </Card>
          </div>
        </ProcessContainer>
      </StyledSection>
    </SectionContainer>
  );
};

export default ProductSection;

const MobileImageWrapper = styled.div`
  display: none;
  ${getMediaQueryCSS(`
  
    display: block;
  `)}
`;

const ProcessContainer = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 66px;

  ${getMediaQueryCSS(`
    gap: 42px;
  `)}
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const Paragraph = styled.p`
  word-break: keep-all;
  overflow-wrap: break-word;

  font-size: 20px;
  font-weight: 400;
  line-height: 33px;
  letter-spacing: -0.02em;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;

  ${getMediaQueryCSS(`
    font-size: 18px;  
    font-weight: 400;
    line-height: 29.7px;
  `)}
`;

const Highlight = styled.div`
  padding: 18px 60px;

  background-color: #f5f5f5;
  font-size: 20px;
  line-height: 33px;
  letter-spacing: -0.02em;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;

  span {
    font-weight: 400;
  }

  strong {
    font-weight: 700;
  }

  ${getMediaQueryCSS(`
    font-size: 18px;
    line-height: 29.7px;

    padding-inline: 16px;
  `)}
`;

const List = styled.ul`
  list-style: none;
  padding: 32px;
  margin: 0;
  border-radius: 8px;

  border-bottom: 1px solid #d1d1d1;

  ${getMediaQueryCSS(`
    padding: 16px;
  `)}
`;

const ListItem = styled.li`
  font-size: 20px;
  font-weight: 400;
  line-height: 33px;
  letter-spacing: -0.02em;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;

  display: flex;
  align-items: center;
  margin: 0;

  gap: 4px;

  &:before {
    content: attr(data-index);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    margin: 6px;

    background-color: #064567;
    color: #ffffff;

    border-radius: 50%;

    font-size: 15px;
    font-weight: 600;
    line-height: 24.75px;
    letter-spacing: -0.02em;
    text-align: center;
  }

  ${getMediaQueryCSS(`
    font-size: 18px;
    font-weight: 400;
    line-height: 29.7px;

    &:before {
      gap: 8px;
      margin: 0;
      width: 16px;
      height: 16px;
      font-size: 12px;
      font-weight: 600;
    }
  `)}
`;

const Box = styled.div`
  border-radius: 8px;
  border: 1px solid #d1d1d1;
`;

const Card = styled.ul`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 20px;

  ${getMediaQueryCSS(`
    gap: 12px;
  `)}
`;

const CardList = styled.li`
  position: relative;
  padding: 24px 48px;

  border-radius: 8px;
  border: 1px solid #d1d1d1;
  color: #101010;

  font-size: 20px;
  font-weight: 400;
  line-height: 33px;
  letter-spacing: -0.02em;

  &:before {
    position: absolute;
    left: 0;
    top: 0;

    content: attr(data-index);
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #064567;
    color: #ffffff;

    width: 32px;
    height: 32px;

    border-radius: 8px 0px 8px 0px;

    font-size: 16px;
    font-weight: 700;
    letter-spacing: -0.02em;
  }

  pre {
    white-space: break-spaces;
  }

  ${getMediaQueryCSS(`
    font-size: 16px;

    line-height: 26.4px;

    &:before {
      font-size: 12px;
    }
  `)}
`;
