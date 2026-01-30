import { Colors } from "@common/constant";
import { getMediaQueryCSS, getRatioSize } from "@common/util";
import React, { useState } from "react";
import styled from "styled-components";
import Slider, { Settings } from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

export interface OgData {
  url: string;
  title: string;
  description: string | null;
  image: string | null;
}

export interface OgPageProps {
  ogDataList: OgData[];
}

const News: React.FC<OgPageProps> = ({ ogDataList }): JSX.Element => {
  const [onHover, setOnHover] = useState(Array(ogDataList.length).fill(false));
  const settings: Settings = {
    dots: true, // 인덱스된 점들을 표시
    infinite: true, // 무한 반복
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 3, // 데스크탑에서 3개씩
    slidesToScroll: 3, // 데스크탑에서 3개씩 넘기기
    responsive: [
      {
        breakpoint: 1024, // 모바일에서는
        settings: {
          slidesToShow: 1, // 1개씩 표시
          slidesToScroll: 1, // 1개씩 넘기기
        },
      },
    ],
  };

  return (
    <NewsLayout>
      <NewsHeaderTitle>News</NewsHeaderTitle>

      <NewsBundle>
        <CustomStyledSlider {...settings}>
          {ogDataList.map((item, index) => (
            <Link
              key={index}
              href={item.url}
              passHref
              target={"_blank"}
              rel={"noopener noreferrer"}
            >
              <NewsItem
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
                $on={onHover[index]}
              >
                <NewsImg src={item.image ?? ""} alt={"image"} />
                <NewsTextArea>
                  <NewsItemTitle>{item.title}</NewsItemTitle>
                  <NewsItemContent>{item.description}</NewsItemContent>
                </NewsTextArea>
              </NewsItem>
            </Link>
          ))}
        </CustomStyledSlider>
      </NewsBundle>

      <NewsMedicalMachineImg
        src={"/love300/medical_machine_1.png"}
        alt={"medical machine"}
      />
    </NewsLayout>
  );
};

const NewsLayout = styled.section`
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

const NewsMedicalMachineImg = styled.img`
  width: ${getRatioSize(320)};
  position: absolute;
  right: 0;
  transform: scaleX(-1);
  top: ${getRatioSize(50)};
  ${getMediaQueryCSS(`
  top: unset;
    width: ${getRatioSize(100, true)};
    bottom: -${getRatioSize(400)};
  `)}
`;

const NewsHeaderTitle = styled.h3`
  font-size: ${getRatioSize(30)};
  font-weight: 700;
  line-height: normal;
  ${getMediaQueryCSS(`
    font-size: ${getRatioSize(20, true)};
    font-weight: 700;
    line-height: normal;  
  `)}
`;

const NewsBundle = styled.div`
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

const NewsItem = styled.div<{ $on?: boolean }>`
  height: 100%;
  box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: grid;
  grid-template-rows: 280px 100px;
  cursor: pointer;
  position: relative;
  transition: transform 0.5s ease;
  background: linear-gradient(180deg, #064567 0%, #e71139 100%);
  padding: 1px 1px 0;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${Colors.White}; /* 내부 배경색 */
    border-radius: 10px; /* 동일한 border-radius 적용 */
    margin: ${({ $on }) => ($on ? 1 : 0)}px; /* 그라데이션 border 두께 */
    z-index: 1;

    ${getMediaQueryCSS(`
        margin: 0;
        padding: 0;
    `)}
  }
  ${getMediaQueryCSS(`
        grid-template-rows: 280px 100px;
    `)}
`;

const NewsImg = styled.img`
  width: 100%;
  height: 280px;
  object-fit: contain;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  z-index: 1;
`;

const NewsTextArea = styled.div`
  padding: 0 ${getRatioSize(20)} ${getRatioSize(20)};
  ${getMediaQueryCSS(`
    padding: ${getRatioSize(10, true)};
  `)}
  z-index:1;
`;

const NewsItemTitle = styled.p`
  word-break: keep-all;
  font-size: 20px;
  font-weight: 700;
  line-height: normal;
  word-break: keep-all;
  display: -webkit-box; /* Flexbox와 유사한 레이아웃 */
  -webkit-box-orient: vertical; /* 세로 방향으로 레이아웃 설정 */
  overflow: hidden; /* 넘치는 텍스트 숨김 */
  text-overflow: ellipsis; /* 넘치는 텍스트에 줄임표 적용 */
  -webkit-line-clamp: 1; /* 최대 줄 수를 2줄로 제한 */
  line-clamp: 1; /* 최신 브라우저용 */
  ${getMediaQueryCSS(`
    font-size: 16px;
    font-weight: 500;
  `)}
`;

const NewsItemContent = styled.p`
  margin-top: 10px;
  word-break: keep-all;
  display: -webkit-box; /* Flexbox와 유사한 레이아웃 */
  -webkit-box-orient: vertical; /* 세로 방향으로 레이아웃 설정 */
  overflow: hidden; /* 넘치는 텍스트 숨김 */
  text-overflow: ellipsis; /* 넘치는 텍스트에 줄임표 적용 */
  -webkit-line-clamp: 2; /* 최대 줄 수를 2줄로 제한 */
  line-clamp: 2; /* 최신 브라우저용 */
  color: ${Colors.Grey};
  font-size: 20px;
  font-weight: 400;
  line-height: normal;
  ${getMediaQueryCSS(`
    font-size: 13px;
    font-weight: 300;
    margin-top: 5px;
    -webkit-line-clamp: 2;
    line-clamp: 2;
  `)}
`;

const CustomStyledSlider = styled(Slider)`
  .slick-dots {
    z-index: 10;
  }
  .slick-dots li button:before {
    background: #5e5e5e;
    border-radius: 50%;
    opacity: 0.3;
    color: transparent;
  }
  li.slick-active {
  }

  .slick-slide {
    padding: 0 ${getRatioSize(10)}; /* 슬라이드 항목 사이에 좌우 간격 추가 */
  }
  .slick-slide img {
    padding: ${getRatioSize(10)} 0;
  }

  .slick-list {
    padding: ${getRatioSize(10)} 0;
    margin: 45px -${getRatioSize(10)}; /* padding으로 생긴 전체 슬라이더 리스트의 여백을 제거 */
  }

  .slick-active > button::before {
    background: linear-gradient(
      180deg,
      #064567 0%,
      #e71139 100%
    ) !important; /* 원하는 색으로 변경 */
    opacity: 1 !important;
  }
  ${getMediaQueryCSS(`
  .slick-slide {
    padding: 0 ${getRatioSize(
      10,
      true
    )}; /* 슬라이드 항목 사이에 좌우 간격 추가 */
  }
  .slick-slide img {
    padding: ${getRatioSize(10, true)} 0;
  }

  .slick-list {
    padding: ${getRatioSize(10, true)} 0;
    margin: 45px -${getRatioSize(
      10,
      true
    )}; /* padding으로 생긴 전체 슬라이더 리스트의 여백을 제거 */
  }
  .slick-dots li {
    margin: 0 3px;
    width: 10px;
    height: 10px;
  }
  
  .slick-dots li button:before {
    width: 10px;
    height: 10px;
  }

  `)}
`;

export default News;
