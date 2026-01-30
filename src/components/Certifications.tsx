import { Colors } from "@common/constant";
import { getMediaQueryCSS, getRatioSize } from "@common/util";
import { useAtomValue } from "jotai";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { globalLang, Lang } from "../../pages/_app";

const Certifications: React.FC = (): JSX.Element => {
  const lang = useAtomValue(globalLang);
  const obj = {
    [Lang.ENG]: {
      comment:
        "The premium deep ocean water <b>&lsquo;LOVE300&rsquo;</b>, based on LOVE300’s health data, complies with global standards and has been certified in various countries, recognized for its safety and quality.",
    },
    [Lang.KOR]: {
      comment:
        "LOVE300의 헬스 데이터를 기반으로 한 프리미엄 해양심층수 <b>&lsquo;사랑해300&rsquo;</b>은 글로벌 표준을 준수하며 다양한 국가에서 인증받아 안정성과 품질을 인정받았습니다.",
    },
  };
  return (
    <CertificationLayout>
      <CertificationHeaderTitle>
        Authentication Certificate
      </CertificationHeaderTitle>
      <AboutTitleSection>
        <AboutMainDesc
          dangerouslySetInnerHTML={{ __html: obj[lang].comment }}
        />
      </AboutTitleSection>
      <CertificationBundle>
        <AuthenticationImg src="/love300/ac.png" alt="authentication image" />
        <AuthenticationMobileImg src="/love300/ac_mobile.png" />
        {/* <AutoScrollImage imgUrl="/love300/ac2.png" reverse={true} /> */}
      </CertificationBundle>
    </CertificationLayout>
  );
};

const CertificationLayout = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: unset;
  margin-top: 120px;
  ${getMediaQueryCSS(`
    padding: 0 ${getRatioSize(18, true)} 140px;
  `)}
`;

const CertificationHeaderTitle = styled.h3`
  font-size: ${getRatioSize(30)};
  font-weight: 700;
  line-height: normal;
  ${getMediaQueryCSS(`
    font-size: ${getRatioSize(20, true)};
    font-weight: 700;
    line-height: normal;  
  `)}
`;

const CertificationBundle = styled.div`
  display: grid;
  max-width: ${getRatioSize(1309)};
  grid-template-columns: ${getRatioSize(1309)}; /* 좌측 829px, 우측 450px */
  margin-top: 30px;
  ${getMediaQueryCSS(`
    grid-template-columns: 100%;
    gap: 30px;
    max-width: 100%;
  `)}
`;

export default Certifications;

const AutoScrollImage = ({
  imgUrl,
  reverse,
}: {
  imgUrl: string;
  reverse?: boolean;
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null); // 스크롤 컨테이너를 참조하기 위한 Ref 생성
  const scrollSpeed = 2; // 스크롤 속도 설정

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer === null) return;

    const autoScroll = () => {
      if (reverse) {
        scrollContainer.scrollLeft -= scrollSpeed; // scrollLeft 값을 감소시켜 왼쪽으로 스크롤

        // 스크롤이 왼쪽 끝에 도달하면 다시 오른쪽 끝으로 설정
        if (scrollContainer.scrollLeft <= 0) {
          scrollContainer.scrollLeft = scrollContainer.scrollWidth / 2; // 중간으로 되돌림
        }
      } else {
        scrollContainer.scrollLeft += scrollSpeed;
        // 스크롤이 중간쯤(첫 이미지 끝)에 도달하면 자연스럽게 다시 처음으로 돌아감
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0; // 첫 번째 이미지로 돌아가기
        }
      }
    };
    // 마우스 휠 이벤트 처리
    const handleMouseWheel = (event: any) => {
      // 스크롤이 끝에 도달했는지 또는 시작에 도달했는지 확인
      const isAtStart = scrollContainer.scrollLeft === 0;
      const isAtEnd =
        scrollContainer.scrollLeft + scrollContainer.clientWidth ===
        scrollContainer.scrollWidth;

      // 스크롤을 상위 요소로 전파 (스크롤이 끝에 도달하면)
      if ((isAtStart && event.deltaY < 0) || (isAtEnd && event.deltaY > 0)) {
        event.preventDefault(); // 기본 스크롤 방지
        scrollContainer.parentElement?.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      }
    };

    // 마우스 휠 이벤트 리스너 추가
    // scrollContainer.addEventListener("wheel", handleMouseWheel);

    // const scrollInterval = setInterval(autoScroll, 20);

    return () => {
      // clearInterval(scrollInterval as any); // 컴포넌트 언마운트 시 스크롤 중지
      // scrollContainer.removeEventListener("wheel", handleMouseWheel);
    };
  }, [scrollContainerRef, reverse]);

  return (
    <ScrollContainer ref={scrollContainerRef}>
      <ScrollImg src={imgUrl} alt="Long Image" />
      <ScrollImg src={imgUrl} alt="Long Image" />
    </ScrollContainer>
  );
};

const ScrollContainer = styled.div`
  overflow-x: scroll; /* 가로 스크롤을 활성화 */
  white-space: nowrap; /* 줄바꿈 없이 한 줄로 유지 */
  width: 100%; /* 스크롤 영역 너비 */
  height: 500px; /* 컨테이너 높이 */

  /* 스크롤바 숨기기 */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
  display: none;
  ${getMediaQueryCSS(`
    display: block;
  `)}
`;

const AuthenticationImg = styled.img`
  display: block;
  width: 100%;

  ${getMediaQueryCSS(`
    display: none;
  `)}
`;
const AuthenticationMobileImg = styled.img`
  display: none;
  width: 100%;

  ${getMediaQueryCSS(`
    display: block;
  `)}
`;

const ScrollImg = styled.img`
  height: 100%;
  width: auto;
`;

const AboutTitleSection = styled.div`
  width: ${getRatioSize(859)};
  ${getMediaQueryCSS(`
    width: 100%;
  `)}
`;
const AboutDesc = styled.p`
  ${getMediaQueryCSS(`
    font-size: ${getRatioSize(13, true)};
  `)}
`;

const AboutMainDesc = styled(AboutDesc)`
  color: ${Colors.Black};
  margin-top: 20px;
  font-size: ${getRatioSize(21)};
  font-weight: 400;
  line-height: normal;
  color: ${Colors.Black};
  word-break: keep-all;
  text-align: center;
  ${getMediaQueryCSS(`
    font-size: ${getRatioSize(16, true)};
    font-weight: 500;
  `)}
`;
