import { getMediaQueryCSS } from "@common/util";

import styled, { css } from "styled-components";

export const desktopResponse = css`
  ${getMediaQueryCSS(`padding-inline: 1.2rem;`, "1600px")}
`;

export const NextImage = styled.img`
  width: 100%;
  height: auto;
`;

export const ImageContainer = styled.div`
  position: relative;
`;

export const ImageContentWrapper = styled.div`
  position: absolute;
  top: 0%;
  left: 0;
  font-weight: 700;
  letter-spacing: -0.02em;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #ffffff;

  strong {
    font-size: 64px;
    line-height: 64px;
    margin-bottom: 10px;
  }

  p {
    font-size: 48px;
    line-height: 48px;

    margin-bottom: 38px;
  }

  padding-left: 15.625vw; // header의 left 값
  top: 20.67%; // 반응형 처리

  ${getMediaQueryCSS(`
    top: 10.67%;
    padding-right: 5.556vw;
    padding-left: 5.556vw;


    strong {
      font-size: 48px;
      line-height: 48px;
      margin-bottom: 8px;
    }

    p {
      font-size: 24px;
      line-height: 33.6px;

      margin-bottom: 24px;
    }
  `)}
`;

export const DesktopImage = styled(NextImage)`
  ${getMediaQueryCSS(`
    display: none;
  `)}
`;

export const MobileImage = styled(NextImage)`
  display: none;

  ${getMediaQueryCSS(`
    display: block;
  `)}
`;

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 107px;

  padding: 140px 15.625vw; // header의 left 값

  ${getMediaQueryCSS(`
    padding: 64px 5.556vw; 
  `)}

  ${desktopResponse};
`;

export const StyledSection = styled.section`
  position: relative;
  display: grid;
  gap: 32px;
  grid-template-columns: 30.65% 1fr;

  ${getMediaQueryCSS(`
    display: flex;
    flex-direction: column;
    gap: 16px;
  `)}
`;

export const SectionTitle = styled.h3`
  word-break: keep-all;
  overflow-wrap: break-word;

  font-size: 32px;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: -0.02em;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;

  ${getMediaQueryCSS(`
    font-size: 28px;
    line-height: 42px;
  `)};
`;

export const SectionSubTitle = styled.h4`
  color: #101010;
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: -0.02em;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;

  margin-bottom: 24px;

  ${getMediaQueryCSS(`
    font-size: 20px;
    line-height: 30px;

    margin-bottom: 16px;
  `)}
`;

export const SubTitle = styled.h2`
  font-size: 48px;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: -0.02em;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;

  border-bottom: 1px solid #d1d1d1;

  padding-bottom: 36px;

  ${getMediaQueryCSS(`
    padding-bottom: 32px;
    font-size: 36px;
    line-height: 36px;
  `)}
`;

export const BasicList = styled.ul`
  list-style-type: disc;
  padding-left: 20px;

  font-size: 20px;
  font-weight: 400;
  line-height: 33px;
  letter-spacing: -0.02em;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  margin-top: 32px;

  ${getMediaQueryCSS(`
    font-size: 18px;
    line-height: 29.7px;
    margin-top: 24px;
  `)}
`;

export const DirectButton = styled.button`
  transition: 0.3s;
  position: relative;

  background-color: #ffffff33;
  color: #ffffff;
  height: 40px;

  padding: 8px 36px 8px 16px;
  border-radius: 4px;
  border: 1px solid #ffffff26;

  font-size: 18px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.02em;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;

  &::after {
    content: " ";
    position: absolute;
    background-image: url("/love300/direct_button_icon.png");
    width: 16px;
    height: 16px;
    right: 16px;
  }

  &:hover {
    background: rgba(72, 122, 155, 1);
    border: 1px solid rgba(255, 255, 255, 0.7);
    color: #ffffff;
  }

  ${getMediaQueryCSS(`
    font-size: 16px;
    line-height: 16px;
  `)}
`;

export const TableContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const Table = styled.table`
  width: 100%;
  min-width: 894px;

  border-collapse: collapse;
  font-family: "Arial", sans-serif;
  font-size: 0.9rem;
  text-align: left;
`;

export const TableHeader = styled.th`
  text-align: center;
  background-color: #f4f4f4;
  padding: 10px;
  border: 1px solid #ddd;

  font-size: 18px;
  font-weight: 700;
  line-height: 21.6px;
  letter-spacing: -0.02em;

  text-underline-position: from-font;
  text-decoration-skip-ink: none;

  ${getMediaQueryCSS(`
    font-size: 16px;
    line-height: 19.2px;
  `)}
`;

export const TableRow = styled.tr``;

export const TableCell = styled.td`
  text-align: center;
  padding: 10px;
  border: 1px solid #ddd;

  font-size: 18px;
  font-weight: 400;
  line-height: 21.6px;
  letter-spacing: -0.02em;

  /* &:first-child {
    font-weight: 700;
  } */

  ${getMediaQueryCSS(`
    font-size: 16px;
    line-height: 19.2px;

  `)}
`;
