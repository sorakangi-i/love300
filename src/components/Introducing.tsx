import { getMediaQueryCSS, getRatioSize } from "@common/util";
import React from "react";
import styled from "styled-components";
import { useAtom } from "jotai";
import { globalLang, Lang } from "../../pages/_app";
import { Colors } from "@common/constant";

export default function Introducing(): JSX.Element {
  const [lang, setLang] = useAtom(globalLang);
  const obj: Record<
    Lang,
    Record<"title1" | "title2" | "description", string>
  > = {
    [Lang.ENG]: {
      title1:
        "The world's 1st Blockchain-Based Health Big Data & Health care Solution.",
      title2: "",
      description:
        "We are creating a new future for human health through transparent and secure health data management and healthcare solutions like 'Love 300'.",
    },
    [Lang.KOR]: {
      title1: "세계 최초의 블록체인 기반",
      title2: "헬스 빅데이터 & 헬스 케어 솔루션",
      description:
        "투명하고 안전한 헬스 데이터 관리와 ‘사랑해300’과 같은 헬스 케어 솔루션으로 인류 건강의 새로운 미래를 만듭니다.",
    },
  };
  return (
    <IntroducingBundle>
      <TextToggleGroup
        onClick={() => {
          setLang((prev) => (prev === Lang.KOR ? Lang.ENG : Lang.KOR));
        }}
      >
        <TextToggle $active={lang === Lang.KOR}>KOR</TextToggle>
        <TextToggle $active={lang === Lang.ENG}>ENG</TextToggle>
      </TextToggleGroup>
      <IntroducingLeft>
        <IntroducingTitle>
          {obj[lang].title1}
          <br />
          {obj[lang].title2}
        </IntroducingTitle>
        <IntroducingDescription>{obj[lang].description}</IntroducingDescription>
      </IntroducingLeft>
    </IntroducingBundle>
  );
}

const IntroducingBundle = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: ${getRatioSize(189)};
  width: 100%;
  height: 54.479vw;
  position: relative;
  overflow: hidden;
  padding-left: ${getRatioSize(310)};
  z-index: 10;
  ${getMediaQueryCSS(`
    height: 80vw;
    padding-top: ${getRatioSize(70, true)};;
    padding-right: ${getRatioSize(20, true)};
    padding-left:${getRatioSize(20, true)};
  `)}
`;
const IntroducingLeft = styled.div`
  width: ${getRatioSize(1125, false, "vw")};
  z-index: 1;
  ${getMediaQueryCSS(`
        width: 100%;
  `)}
`;

const IntroducingTitle = styled.p`
  color: ${Colors.Black};
  font-size: ${getRatioSize(65)};
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  ${getMediaQueryCSS(`
    font-size: ${getRatioSize(20, true)};
  `)}
`;

const IntroducingDescription = styled.p`
  word-break: keep-all;
  margin-top: 10px;
  color: ${Colors.Black};
  width: ${getRatioSize(914)};
  font-size: ${getRatioSize(30)};
  font-weight: 400;
  ${getMediaQueryCSS(`
        margin-top: 5px;
        width: ${getRatioSize(211, true)};
      font-size: ${getRatioSize(13, true)};
    `)};
`;

const TextToggleGroup = styled.span`
  z-index: 10;
  color: ${Colors.White};
  display: flex;
  gap: ${getRatioSize(10)};
  font-size: ${getRatioSize(20)};
  line-height: normal;
  margin-bottom: 15px;
  cursor: pointer;
  ${getMediaQueryCSS(`
    font-size: 3.333vw;
    line-height: 8.333vw;
    gap: 2vw;
  `)}
`;

const TextToggle = styled.span<{ $active?: boolean }>`
  transition: 0.3s;
  padding: 8px 23px;
  border-radius: 22.5px;
  font-size: ${getRatioSize(20)};
  background: #ebebeb;
  background: ${({ $active }) =>
    $active ? "linear-gradient(180deg, #064567 0%, #e71139 100%)" : "#ebebeb"};
  color: ${({ $active }) => ($active ? Colors.White : Colors.Grey)};
  ${getMediaQueryCSS(`
    display: none;
  `)}
`;
