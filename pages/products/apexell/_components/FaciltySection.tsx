import { getMediaQueryCSS } from "@common/util";
import React from "react";
import styled from "styled-components";
import {
  BasicList,
  DesktopImage,
  DirectButton,
  MobileImage,
  NextImage,
  SectionContainer,
  SectionSubTitle,
  SectionTitle,
  StyledSection,
  SubTitle,
} from "@styles/styled";

import Link from "next/link";
import Slide from "../../_components/Slide";
import { Lang } from "../../../_app";
import { FACILITY_SECTION } from "../../../../constants/apexell";

interface Props {
  lang: Lang;
}
// {content[lang].sectionTitle}
const FacilitySection = ({ lang }: Props) => {
  if (!FACILITY_SECTION[lang]) return;

  const { title, sectionTitles, subTitles, descs1, desc2, desc3, button } =
    FACILITY_SECTION[lang];
  return (
    <SectionContainer
      style={{
        backgroundColor: "#EFF4F7",
      }}
    >
      <SubTitle>{title}</SubTitle>
      <StyledSection>
        <SectionTitle>{sectionTitles[0]}</SectionTitle>
        <div>
          <ImageContainer>
            <Slide
              urls={[
                "/love300/cambodia-slide-1.png",
                "/love300/cambodia-slide-2.png",
                "/love300/cambodia-slide-3.png",
                "/love300/cambodia-slide-4.png",
              ]}
            />

            <ul>
              <InfoListItem>
                <IconWrapper>
                  <NextImage
                    src="/love300/icon_hospital.png"
                    alt="hospital icon"
                  />
                </IconWrapper>

                <span>{descs1[0]}</span>
              </InfoListItem>
              <InfoListItem>
                <IconWrapper>
                  <NextImage
                    src="/love300/icon_location.png"
                    alt="location icon"
                  />
                </IconWrapper>
                <span>{descs1[1]}</span>
              </InfoListItem>
              <InfoListItem>
                <IconWrapper>
                  <NextImage
                    src="/love300/icon_representative.png"
                    alt="representatitive icon"
                  />
                </IconWrapper>
                <span>{descs1[2]}</span>
              </InfoListItem>
              <InfoListItem>
                <IconWrapper>
                  <NextImage src="/love300/icon_scale.png" alt="scale icon" />
                </IconWrapper>
                <span>{descs1[3]}</span>
              </InfoListItem>
            </ul>
          </ImageContainer>
          <div>
            <SectionSubTitle>{subTitles[0]}</SectionSubTitle>

            <DesktopImage src="/love300/memorandum.png" alt="memorandum" />
            <MobileImageWrapper>
              <Slide
                urls={[
                  "/love300/memorandum-slide-1.png",
                  "/love300/memorandum-slide-2.png",
                ]}
              />
            </MobileImageWrapper>
          </div>
        </div>
      </StyledSection>
      <StyledSection>
        <SectionTitle>{sectionTitles[1]}</SectionTitle>
        <div>
          <ImageContainer>
            <ImageContentWrapper>
              <TextWrapper>{desc2}</TextWrapper>

              <Link href="https://chungwookmh.com/" target="_blank">
                <DirectButton>{button}</DirectButton>
              </Link>
            </ImageContentWrapper>
            <DesktopImage src="/love300/doctors.png" alt="doctors" />
            <MobileImage src="/love300/doctors_mobile.png" alt="doctors" />
          </ImageContainer>
          <div>
            <SectionSubTitle> {subTitles[1]}</SectionSubTitle>
            <Slide
              urls={[
                "/love300/product-slide-1.png",
                "/love300/product-slide-2.png",
                "/love300/product-slide-3.png",
                "/love300/product-slide-4.png",
                "/love300/product-slide-5.png",
              ]}
            />

            <BasicList>{desc3}</BasicList>
          </div>
        </div>
      </StyledSection>
    </SectionContainer>
  );
};

export default FacilitySection;

const MobileImageWrapper = styled.div`
  display: none;
  ${getMediaQueryCSS(`
  
    display: block;
  `)}
`;

const ImageContainer = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 32px;

  margin-bottom: 64px;

  ${getMediaQueryCSS(`
    gap: 24px;
    margin-bottom: 40px;
  `)}
`;

const InfoListItem = styled.li`
  word-break: keep-all;
  overflow-wrap: break-word;

  display: flex;
  align-items: center;
  margin-bottom: 10px;

  font-size: 20px;
  font-weight: 400;
  line-height: 33px;
  letter-spacing: -0.02em;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;

  ${getMediaQueryCSS(`
    font-size: 18px;
    line-height: 26px; 
  `)}
`;

const IconWrapper = styled.span`
  width: 16px;

  margin-right: 4px;

  ${getMediaQueryCSS(`
    width: 24px;
    margin-right: 12px;

  `)}
`;

export const ImageContentWrapper = styled.div`
  position: absolute;

  left: 0;

  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #ffffff;

  strong {
    font-size: 32px;
    line-height: 52.8px;
    letter-spacing: -0.02em;
  }

  p {
    font-size: 18px;
    font-weight: 400;
    letter-spacing: -0.02em;

    margin-top: 6px;
  }

  padding-left: 7.38%; // header의 left 값
  top: 16.49%;

  @media screen and (min-width: 1024px) and (max-width: 1800px) {
    /* display: flex; */
  }

  ${getMediaQueryCSS(`
    top: 6.25%;
    padding-right: 5.556vw;
    padding-left: 5.556vw;
    // margin-bottom: 24px;



    strong {
      font-size: 28px;
      line-height: 46.2px;
    }

    p {
      font-size: 16px;
      line-height: 26.4px;
    }
  `)}
`;

const TextWrapper = styled.div`
  margin-bottom: 38px;

  ${getMediaQueryCSS(`
    // margin-bottom: 24px;
  `)}
`;
