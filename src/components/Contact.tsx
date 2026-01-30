import React from "react";
import styled from "styled-components";
import { Colors, ScreenBoundary } from "@common/constant";
import { getMediaQueryCSS, getRatioSize } from "@common/util";
import Download from "./DownloadMobile";
import { useAtom } from "jotai";
import { globalLang, Lang } from "../../pages/_app";
import Link from "next/link";

export default function Contact(): JSX.Element {
  const [lang] = useAtom(globalLang);
  return (
    <FooterStyle>
      <FooterTitle>Contact</FooterTitle>
      <FooterComment>1588-2616</FooterComment>
      <FooterComment>love300srh@gmail.com</FooterComment>
      <FooterComment>
        {lang === Lang.KOR
          ? "광주광역시 북구 태봉로 83, 송가빌딩 4층"
          : "4th floor, Songga-Building, 83, Taebong-ro, Buk-gu, Gwangju, Republic of Korea"}
      </FooterComment>
      <Download />
      <FooterIconBundle>
        {/* <Link
          href={"https://discord.com/"}
          passHref
          target={"_blank"}
          rel={"noopener noreferrer"}
        >
          <IconImg src={"/love300/Icon_discord.png"} alt={"discord"} />
        </Link> */}
        <Link
          href={"https://x.com/L300_Official"}
          passHref
          target={"_blank"}
          rel={"noopener noreferrer"}
        >
          <IconImg src={"/love300/Icon_x.png"} alt={"x"} />
        </Link>
        <Link
          href={"https://t.me/LOVE300_Official"}
          passHref
          target={"_blank"}
          rel={"noopener noreferrer"}
        >
          <IconImg src={"/love300/Icon_telegram.png"} alt={"telegram"} />
        </Link>
      </FooterIconBundle>
      <FooterBottom>Copyright 2024. Love300 All rights reserved.</FooterBottom>
    </FooterStyle>
  );
}

const FooterTitle = styled.h3`
  font-weight: 700;
  line-height: normal;
  font-size: ${getRatioSize(30)};
  margin-bottom: ${getRatioSize(70)};
  ${getMediaQueryCSS(`
    font-size: ${getRatioSize(20, true)};
    margin-bottom: ${getRatioSize(25, true)};
  `)}
`;

const FooterStyle = styled.footer`
  display: grid;
  padding-top: 16em;
  margin: 5em 0 0;
  text-align: center;
  background: url("/love300/heart_graphic.png") no-repeat center center;
  background-size: contain;
  ${getMediaQueryCSS(`
  `)}
`;

/**
 * view: 360px - 1920px
 * font: 12px - 22px => 3.333vw - 1.145vw
 * line-height: 25px - 50px => 6.944vw - 2.604vw
 * */
const FooterComment = styled.p`
  line-height: normal;
  font-size: ${getRatioSize(20)};
  font-weight: 400;
  color: ${Colors.Grey};
  margin-bottom: ${getRatioSize(20)};
  @media screen and (max-width: ${ScreenBoundary.Phone2PC}) {
    font-size: ${getRatioSize(13, true)};
    margin-bottom: ${getRatioSize(10, true)};
  }
`;

/**
 * view: 360px - 1920px
 * font: 10px - 18px => 2.777vw - 0.937vw
 * line-height: 24px - 24px => 6.666vw - 1.25vw
 * */
const FooterBottom = styled.div`
  color: #5e5e5e;
  margin: 19.375vw auto 1.563vw;
  font-weight: 400;
  line-height: 1.25vw;
  font-size: ${getRatioSize(15)};
  ${getMediaQueryCSS(`
		line-height: 1.25vw;
		font-size: 2.777vw;
		margin: 13.065vw auto 5.556vw;
    font-weight: 300;
    font-size: ${getRatioSize(10, true)};
	`)}
`;

const FooterIconBundle = styled.div`
  display: flex;
  gap: ${getRatioSize(30)};
  margin: 20px auto 0;
  align-items: center;
  ${getMediaQueryCSS(`
    gap: ${getRatioSize(30, true)};
  `)}
`;

const IconImg = styled.img``;
