import { getMediaQueryCSS, getRatioSize } from "@common/util";
import React from "react";
import styled, { keyframes } from "styled-components";
import { useAtom } from "jotai";
import { globalLang, Lang } from "../../pages/_app";
import { Colors } from "@common/constant";
import { useVisibility } from "@hooks/UseFullyVisibility";

export default function About(): JSX.Element {
  const [lang] = useAtom(globalLang);
  const { ref, isFullyVisible } = useVisibility<HTMLImageElement>();
  const obj: Record<
    Lang,
    Record<"title" | "desc1" | "desc2" | "desc3" | "desc4", string>
  > = {
    [Lang.ENG]: {
      title:
        "The goal of the LOVE300 project is to build an ecosystem that enhances human health by securely and transparently managing and utilizing personal health data through blockchain technology, while providing various healthcare solutions.",
      desc1:
        "It addresses the lack of transparency in DB management, difficulties in privacy protection, and inefficiencies in data utilization within the healthcare industry.",
      desc2:
        "Through blockchain, it ensures DB integrity and provides an environment where individuals can benefit from their own data.",
      desc3:
        "We aim to provide tangible benefits to users by managing personalized health data transparently and securely, with a vision to democratize the healthcare ecosystem.",
      desc4:
        "Through the development of various healthcare solutions, including deep-sea water, we will contribute to improving the overall health of humanity.",
    },
    [Lang.KOR]: {
      title:
        "LOVE300 프로젝트의 목표는 블록체인 기술을  통해 개인 헬스 데이터를 안전하고 투명하게 관리하고 활용하여 다양한 헬스 케어 솔루션을 제시하여 인류의 건강을 증진 시키는 것입니다",
      desc1:
        "헬스 케어 산업에서의 데이터 관리 투명성 부족, 개인 정보 보호의 어려움, 데이터 활용의 비효율성 등을 LOVE300이 해결합니다.",
      desc2:
        "블록체인을 통해 데이터의 무결성을 보장하고, 사용자가 자신의 데이터로 직접 혜택을 누릴 수 있는 환경을 제공합니다.",
      desc3:
        "LOVE300은 개인화된 헬스 데이터를 투명하고 안전하게 관리하여 사용자에게 실질적인 이익을 제공하고, 헬스 케어 생태계의 민주화를 이루려는 비전을 가지고 있습니다.",
      desc4:
        "해양심층수 등 다양한 헤스 케어 솔루션 개발을 통해 인류의 전반적인 건강 수준을 향상시키는데 기여할 것입니다.",
    },
  };
  return (
    <AboutLayout>
      <MedicalMachineImg
        alt={"medical machine"}
        src={"/love300/medical_machine2.png"}
      />
      <AboutTitle>About LOVE300</AboutTitle>
      <AboutTitleSection>
        <AboutMainDesc>{obj[lang].title}</AboutMainDesc>
      </AboutTitleSection>
      <AboutDescSection>
        <Line $on={isFullyVisible} />
        <HeartIcon
          alt={"heart"}
          src={"/love300/heart_icon2.png"}
          $on={isFullyVisible}
        />
        <AboutDesc $on={isFullyVisible}>{obj[lang].desc1}</AboutDesc>
        <br />
        <AboutDesc $on={isFullyVisible}>{obj[lang].desc2}</AboutDesc>
        <Line $on={isFullyVisible} />
        <HeartIcon
          alt={"heart"}
          src={"/love300/heart_icon2.png"}
          $on={isFullyVisible}
          ref={ref}
        />
        <AboutDesc $on={isFullyVisible}>{obj[lang].desc3}</AboutDesc>
        <br />
        <AboutDesc $on={isFullyVisible}>{obj[lang].desc4}</AboutDesc>
      </AboutDescSection>
    </AboutLayout>
  );
}

const MedicalMachineImg = styled.img`
  position: absolute;
  top: ${getRatioSize(353, false, "px")};
  left: 0;
  width: ${getRatioSize(506)};
  height: unset;
  transform: scaleY(-1);
  ${getMediaQueryCSS(`
    top: unset;
    bottom: -${getRatioSize(100, true)};
    height: 30%;
  `)}
`;

const AboutLayout = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: unset;
  margin-top: ${getRatioSize(175)};
  ${getMediaQueryCSS(`
    padding: 0 ${getRatioSize(18, true)} 120px;
    margin-top: ${getRatioSize(165, true)};
  `)};
`;

const Line = styled.div<{ $on?: boolean }>`
  margin-top: 5px;
  width: ${getRatioSize(2)};
  height: ${getRatioSize(50)};
  border-radius: 1px;
  background: linear-gradient(180deg, #064567 0%, #e71139 100%);
  animation: ${({ $on }) => ($on ? fadeUpIn : fadeUpOut)} 1s ease-in-out
    forwards;
  ${getMediaQueryCSS(`
    width: ${getRatioSize(1.5, true)};
    height: ${getRatioSize(40, true)};
  `)}
`;

const AboutTitleSection = styled.div`
  width: ${getRatioSize(859)};
  ${getMediaQueryCSS(`
    width: 100%;
  `)}
`;

const AboutTitle = styled.h2`
  font-size: ${getRatioSize(45)};
  font-weight: 700;
  ${getMediaQueryCSS(`
    font-size: ${getRatioSize(20, true)};
  `)}
`;

const AboutDescSection = styled.div`
  width: ${getRatioSize(562)};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  ${getMediaQueryCSS(`
    width: 100%;
  `)}
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px); /* 아래에서 시작 */
  }
  to {
    opacity: 1;
    transform: translateY(0); /* 제자리 */
  }
`;

// fade-out 애니메이션
const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0); /* 제자리 */
  }
  to {
    opacity: 0;
    transform: translateY(20px); /* 아래로 이동 */
  }
`;

const fadeUpIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px); /* 아래에서 시작 */
  }
  to {
    opacity: 1;
    transform: translateY(0); /* 제자리 */
  }
`;

// fade-out 애니메이션
const fadeUpOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0); /* 제자리 */
  }
  to {
    opacity: 0;
    transform: translateY(-20px); /* 아래로 이동 */
  }
`;

const HeartIcon = styled.img<{ $on?: boolean }>`
  margin: 5px 0;
  transition-duration: 0.5s;
  opacity: 0;
  animation: ${({ $on }) => ($on ? fadeUpIn : fadeUpOut)} 1s ease-in-out
    forwards;
`;

const AboutDesc = styled.p<{ $on?: boolean }>`
  font-size: ${getRatioSize(20)};
  font-weight: 400;
  line-height: normal;
  color: ${Colors.Grey};
  word-break: keep-all;
  text-align: center;
  opacity: 0;
  animation: ${({ $on }) => ($on ? fadeIn : fadeOut)} 1s ease-in-out forwards;
  ${getMediaQueryCSS(`
    font-size: ${getRatioSize(13, true)};
  `)}
`;

const AboutMainDesc = styled(AboutDesc)`
  color: ${Colors.Black};
  margin-top: 10px;
  animation: unset;
  opacity: unset;
  ${getMediaQueryCSS(`
    font-size: ${getRatioSize(16, true)};
    font-weight: 500;
  `)}
`;
