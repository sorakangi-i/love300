import { getMediaQueryCSS, getRatioSize } from "@common/util";
import React, { useState } from "react";
import styled from "styled-components";
import { globalLang, Lang } from "../../pages/_app";
import { useAtomValue } from "jotai";
import { Colors } from "@common/constant";

const BusinessModel = (): JSX.Element => {
  const lang = useAtomValue(globalLang);
  const [onHover, setOnHover] = useState([false, false, false]);

  const obj: Record<
    Lang,
    Record<"title" | "content" | "content2" | "id", string>[]
  > = {
    [Lang.ENG]: [
      {
        title: "Data Marketplace",
        content:
          "The LOVE300 data marketplace processes health data collected from individuals and companies with the help of AI 'L300AI', providing health data that benefits humanity.",
        content2:
          "Users can utilize this data to develop new healthcare business items or obtain essential data for existing businesses. All data transactions are recorded on the blockchain, ensuring they are managed securely and transparently.",
        id: "0",
      },
      {
        title: "B2C Premium Service",
        content:
          "The LOVE300 B2C premium service is offered on a subscription basis. When individual users input their health data, the AI 'L300AI' analyzes it and periodically provides personalized healthcare information.",
        content2:
          "This service includes a customized health management plan tailored to the user's health goals, allowing users to continuously manage their health with regularly updated information.",
        id: "1",
      },
      {
        title: "B2B Premium Service",
        content:
          "The LOVE300 B2B premium service is a subscription-based data service for businesses.",
        content2:
          "Companies can select their industry or a healthcare field of interest and receive relevant data on a regular basis. This service is tailored to the specific data needs of businesses, providing high-quality data that can be reliably used for product development, market research, and marketing strategy planning.",
        id: "2",
      },
    ],
    [Lang.KOR]: [
      {
        title: "데이터 마켓플레이스",
        content:
          "LOVE300 데이터 마켓플레이스는 개인과 기업으로부터 수집된 헬스 데이터를 인공지능 'L300AI'의 도움을 받아 가공하여, 인류에 유익한 헬스 데이터를 제공합니다.",
        content2:
          "사용자는 이 데이터를 활용해 새로운 헬스 케어 사업 아이템 개발하거나 기존 사업을 위한 필수적인 데이터를 얻을 수 있으며, 모든 데이터 거래는 블록체인에 기록되어 안전하고 투명하게 관리됩니다.",
        id: "0",
      },
      {
        title: "B2C 프리미엄 서비스",
        content:
          "LOVE300 B2C 프리미엄 서비스는 구독 기반으로 제공되며, 개인 사용자가 자신의 헬스 데이터를 입력하면, 인공지능 'L300AI'가 이를 분석하여 개인에게 적합한 헬스 케어 정보를 주기적으로 제공합니다.",
        content2:
          "이 서비스는 개인의 건강 목표에 맞춘 맞춤형 건강 관리 계획을 포함하며, 사용자는 정기적으로 업데이트된 정보를 통해 건강을 지속적으로 관리할 수 있습니다.",
        id: "1",
      },
      {
        title: "B2B 프리미엄 서비스",
        content:
          "LOVE300 B2B 프리미엄 서비스는 기업을 대상으로 한 구독 기반의 데이터 제공 서비스입니다.",
        content2:
          "기업은 자신이 속한 산업 분야 또는 관심 있는 헬스 케어 영역을 선택하여 관련 데이터를 주기적으로 공급받을 수 있으며 기업이 원하는 데이터에 따라 맞춤형으로 제공되어, 제품 개발, 시장 조사, 마케팅 전략 수립 등에 활용 할 수 있는 고품질의 데이터를 안정적으로 제공합니다.",
        id: "2",
      },
    ],
  };
  return (
    <BusinessModelLayout>
      <BusinessModelTitle>Business Model</BusinessModelTitle>
      <BusinessModelList>
        {obj[lang].map((bm, index) => (
          <BusinessModelItemBundle
            key={index}
            onMouseEnter={() => {
              setOnHover((prev) => {
                const newArray = [...prev]; // 배열을 복사
                newArray[index] = true; // 복사한 배열을 수정
                return newArray;
              });
            }}
            onMouseLeave={() => {
              setOnHover((prev) => {
                const newArray = [...prev]; // 배열을 복사
                newArray[index] = false; // 복사한 배열을 수정
                return newArray;
              });
            }}
          >
            <BusinessModelItem $on={onHover[index]}>
              <BusinessModelItemTitle>{bm.title}</BusinessModelItemTitle>
              <BusinessModelItemContent>{bm.content}</BusinessModelItemContent>
              <br />
              <BusinessModelItemContent>{bm.content2}</BusinessModelItemContent>
            </BusinessModelItem>
            <BusinessModelDetailButton $on={onHover[index]}>
              {lang === Lang.KOR ? "자세히 보기" : "View details"}
            </BusinessModelDetailButton>
          </BusinessModelItemBundle>
        ))}
      </BusinessModelList>
    </BusinessModelLayout>
  );
};

const BusinessModelLayout = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: unset;
  margin-top: 120px;
  ${getMediaQueryCSS(`
    padding: 0 ${getRatioSize(18, true)};
  `)}
`;

const BusinessModelTitle = styled.h3`
  font-weight: 700;
  line-height: normal;
  font-size: ${getRatioSize(30)};
  margin-bottom: ${getRatioSize(30)};
  ${getMediaQueryCSS(`
    font-size: ${getRatioSize(20, true)};
    margin-bottom: ${getRatioSize(10, true)};
  `)}
`;

const BusinessModelList = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${getRatioSize(55)};
  ${getMediaQueryCSS(`
    flex-direction: column;
    gap: ${getRatioSize(25, true)};
  `)}
`;

const BusinessModelItemBundle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const BusinessModelItem = styled.div<{ $on?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  word-break: keep-all;

  padding: ${getRatioSize(50)};
  width: ${getRatioSize(400)};
  height: ${getRatioSize(500)};
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  background: linear-gradient(180deg, #064567 0%, #e71139 100%);
  transform: translateY(${({ $on }) => ($on ? -20 : 0)}px);
  position: relative;
  transition: transform 0.5s ease;
  box-shadow: ${({ $on }) =>
    $on ? "0px 4px 10px 0px rgba(0,0,0,0.4)" : "unset"};
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: white; /* 내부 배경색 */
    border-radius: 10px; /* 동일한 border-radius 적용 */
    margin: ${({ $on }) => ($on ? 2 : 1)}px; /* 그라데이션 border 두께 */
    z-index: 1;
    animation: margin 1s ease-in-out forwards;
    ${getMediaQueryCSS(`
        margin: 1px;
    `)}
  }
  ${getMediaQueryCSS(`
        padding: ${getRatioSize(20, true)} ${getRatioSize(13, true)};
        width: ${getRatioSize(335, true)};
        height: ${getRatioSize(221, true)};
        box-shadow: unset;
        transform: unset;
        margin: 1px;
    `)}
`;

const BusinessModelItemTitle = styled.p`
  z-index: 2;
  margin-bottom: 15px;
  font-size: ${getRatioSize(25)};
  font-weight: 700;
  line-height: normal;
  ${getMediaQueryCSS(`
  font-size: ${getRatioSize(16, true)};
  font-weight: 500;
  `)}
`;

const BusinessModelItemContent = styled.p`
  z-index: 2;
  font-size: ${getRatioSize(20)};
  font-weight: 400;
  line-height: normal;
  color: ${Colors.Grey};
  ${getMediaQueryCSS(`
  font-size: ${getRatioSize(13, true)};
  font-weight: 400;
  `)}
`;

const BusinessModelDetailButton = styled.button<{ $on?: boolean }>`
  font-size: ${getRatioSize(20)};
  font-weight: 700;
  line-height: normal;
  color: ${({ $on }) => ($on ? Colors.White : Colors.Black)};
  margin-top: 10px;
  border-radius: 23px;
  position: relative;
  background: linear-gradient(180deg, #064567 0%, #e71139 100%);
  padding: ${getRatioSize(10)} ${getRatioSize(19)};
  z-index: 1;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ $on }) =>
      $on
        ? "linear-gradient(135deg, #064567 0%, #E71139 100%)"
        : Colors.White}; /* 내부 배경색 */
    border-radius: 23px; /* 동일한 border-radius 적용 */
    margin: 1px; /* 그라데이션 border 두께 */
    z-index: -1;
    transition: background-color 0.5s ease, color 0.5s ease; /* 배경색 전환 효과 */
    ${getMediaQueryCSS(`
        background: linear-gradient(135deg, #064567 0%, #E71139 100%);
    `)}
  }
  ${getMediaQueryCSS(`
    border-radius: 25px;
    background: linear-gradient(135deg, #064567 0%, #E71139 100%);
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.40);
    font-size: ${getRatioSize(13, true)};
    padding: ${getRatioSize(4, true)} ${getRatioSize(12, true)};
    font-weight: 400;
    color: ${Colors.White};
  `)}
`;

export default BusinessModel;
