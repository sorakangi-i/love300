import React from "react";
import styled from "styled-components";

import { getMediaQueryCSS } from "@common/util";
import { Lang } from "../../_app";
import { MORE_INFORMATION_SECTION } from "../../../constants/saranghae300";
import { PURPOSE_MORE_INFORMATION_SECTION } from "../../../constants/apexell";

export interface PdfDownloadButtonsProps {
  type: string;
  lang: Lang;
}

const PdfDownloadButtons = ({ type, lang }: PdfDownloadButtonsProps) => {
  const SECTION =
    type === "apexell"
      ? PURPOSE_MORE_INFORMATION_SECTION
      : MORE_INFORMATION_SECTION;

  if (!SECTION[lang]) return;
  const files = SECTION[lang];

  return (
    <Container>
      <ButtonList>
        {files.map((file, index) => (
          <Button key={index} href={file.link} download>
            {file.name}
            <Icon
              width={24}
              height={24}
              src="/love300/download-icon.png"
              alt="experiment results"
            />
          </Button>
        ))}
      </ButtonList>
    </Container>
  );
};

export default PdfDownloadButtons;

const Icon = styled.img`
  /* width: 24px; */
  /* height: 24px; */
`;

const Container = styled.div`
  width: 100%;
  margin: 20px auto;
  font-family: "Arial", sans-serif;
`;

const ButtonList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Button = styled.a`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;

  padding: 24px 32px;

  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.02em;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  background-color: #f5f5f5;
  color: #9e9e9e;

  &:hover {
    background: linear-gradient(90deg, #064567, #e71139);
    color: #ffffff;
  }

  ${getMediaQueryCSS(`
    padding: 16px 24px;
    font-size: 16px;
    line-height: 19.2px;
  `)}
`;
