import { getMediaQueryCSS } from "@common/util";
import React from "react";
import styled from "styled-components";
import {
  BasicList,
  NextImage,
  SectionContainer,
  SectionTitle,
  StyledSection,
  SubTitle,
} from "../../../src/styles/styled";

import ClinicalTrialsTable from "./ClinicalTrialsTable";
import RelatedPaperTable from "./RelatedPaperTable";
import PdfDownloadButtons, { PdfDownloadButtonsProps } from "./DownloadButtons";
import { CLINICAL_TRIALS_RESULT } from "../../../constants/apexell";

// {content[lang].sectionTitle}

const ReferenceSection = ({ type, lang }: PdfDownloadButtonsProps) => {
  if (!CLINICAL_TRIALS_RESULT[lang]) return;

  const { title1, title2, title3, title4, title5, title6, descs1, descs2 } =
    CLINICAL_TRIALS_RESULT[lang];
  return (
    <SectionContainer>
      <SubTitle>REFERENCE</SubTitle>

      <StyledSection>
        <SectionTitle>
          Clinical Trials <br /> Result & Data
        </SectionTitle>
        <div>
          <Container>
            <Card>
              <ImageWrapper
                style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}
              >
                <NextImage
                  src="/love300/cancel_atom_1.png"
                  alt="cancel atom 1"
                />
                <NextImage
                  src="/love300/cancel_atom_2.png"
                  alt="cancel atom 2"
                />
              </ImageWrapper>
              <p>{title1}</p>
            </Card>

            <BasicList>
              <li>{descs1[0]}</li>
            </BasicList>
          </Container>
          <Container>
            <Card>
              <ImageWrapper
                style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}
              >
                <NextImage
                  src="/love300/cancel_atom_3.png"
                  alt="cancel atom 3"
                />
                <NextImage
                  src="/love300/cancel_atom_4.png"
                  alt="cancel atom 4"
                />
              </ImageWrapper>
              <p>{title2}</p>
            </Card>

            <BasicList>
              <li>{descs2[0]}</li>
              <li>{descs2[1]}</li>
            </BasicList>
          </Container>

          <ResponsiveImageContainer>
            <Card>
              <ImageWrapper>
                <NextImage
                  src="/love300/result_1.png"
                  alt="experiment results"
                />
              </ImageWrapper>
              <p>{title3}</p>
            </Card>
            <Card>
              <ImageWrapper>
                <NextImage
                  src="/love300/result_2.png"
                  alt="experiment results"
                />
              </ImageWrapper>
              <p>{title4}</p>
            </Card>
            <Card>
              <ImageWrapper>
                <NextImage
                  src="/love300/result_3.png"
                  alt="experiment results"
                />
                <NextImage
                  src="/love300/result_4.png"
                  alt="experiment results"
                />
              </ImageWrapper>
              <p>{title5}</p>
            </Card>
            <Card>
              <ImageWrapper>
                <NextImage
                  src="/love300/result_5.png"
                  alt="experiment results"
                />
              </ImageWrapper>
              <p>{title6}</p>
            </Card>
          </ResponsiveImageContainer>
        </div>
      </StyledSection>
      <StyledSection>
        <SectionTitle>Clinical Trials</SectionTitle>
        <ClinicalTrialsTable lang={lang} />
      </StyledSection>
      <StyledSection>
        <SectionTitle>Related Paper</SectionTitle>
        <RelatedPaperTable lang={lang} />
      </StyledSection>
      <MoreInformation type={type} lang={lang} />
    </SectionContainer>
  );
};

const MoreInformation = ({ type, lang }: PdfDownloadButtonsProps) => {
  return (
    <StyledSection>
      <SectionTitle>More Information</SectionTitle>
      <PdfDownloadButtons type={type} lang={lang} />
    </StyledSection>
  );
};

ReferenceSection.MoreInformation = MoreInformation;
export default ReferenceSection;

const Container = styled.div`
  ::-webkit-scrollbar {
    height: 4px !important;
    width: 4px !important;
  }

  display: flex;
  flex-direction: column;
  gap: 32px;

  margin-bottom: 64px;

  ${getMediaQueryCSS(`
    gap: 24px;
    margin-bottom: 40px;
  `)}
`;

const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  ${getMediaQueryCSS(`
    display: flex;
    flex-direction: column;
  `)}
`;

const ResponsiveImageContainer = styled(ImageContainer)`
  @media screen and (min-width: 1024px) and (max-width: 1300px) {
    display: flex;
    flex-direction: column;
  }
`;

const ImageWrapper = styled.div`
  justify-content: center;

  background-color: #f5f5f5;
  padding: 29px 0;
  border-radius: 8px;

  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;

  ${getMediaQueryCSS(`
    padding: 16px;
  `)}
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  p {
    background-color: #064567;
    padding: 14px 0;
    gap: 10px;
    border-radius: 0px 0px 8px 8px;

    color: #ffffff;

    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: -0.02em;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;

    ${getMediaQueryCSS(`
      padding: 14px 0;
      font-size: 18px;
      line-height: 27px;
    `)}
  }
`;
