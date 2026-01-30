import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { AppProps } from "next/app";
import { Colors } from "@common/constant";
import { Link as ScrollLink } from "react-scroll";
import { getMediaQueryCSS, getRatioSize } from "@common/util";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import MobileMenuModal from "./MobileMenuModal";

export default function Layout({
  Component,
  pageProps,
}: AppProps): JSX.Element {
  const pathname = usePathname();
  const router = useRouter();

  // const [lang, setLang] = useAtom(globalLang);
  const [isVideoActive, setIsVideoActive] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [videoHeight, setVideoHeight] = useState(0);
  const [videoWidth, setVideoWidth] = useState(0);
  const [buttonWidth, setButtonWidth] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);
  const onEnd = () => {
    setIsVideoActive(false);
  };

  const isProductsPage = pathname.includes("products");

  useEffect(() => {
    if (videoRef.current) {
      const handleResize = () => {
        const height = videoRef.current?.offsetHeight ?? 0;
        const width = videoRef.current?.offsetWidth ?? 0;
        setVideoHeight(height);
        setVideoWidth(width);
      };

      // 처음 비디오 높이를 설정
      handleResize();

      // 창 크기 변경 시 비디오 높이 재계산
      window.addEventListener("resize", handleResize);

      // 정리 함수
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [videoRef, pathname]);

  useEffect(() => {
    if (spanRef.current) {
      const width = spanRef.current?.offsetWidth ?? 0;
      setButtonWidth(width);
    }
  }, [spanRef, pathname]);

  useEffect(() => {
    if (isModalOpen) setIsModalOpen(false);
  }, [pathname]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleLinkClick = () => {
    if (isProductsPage) {
      router.push("/");
    }
  };

  if (isVideoActive && !isProductsPage)
    return (
      <VideoContainer>
        <Video
          autoPlay
          playsInline
          controls
          ref={videoRef}
          onEnded={onEnd}
          muted
        >
          <source src="/love300/ads.mp4" type="video/mp4" />
          Your browser does not support the video tag. Skip
        </Video>
        <Button
          ref={spanRef}
          $offsetY={videoHeight}
          $offsetX={videoWidth}
          $buttonWidth={buttonWidth}
          onClick={onEnd}
        >
          Skip &gt;
        </Button>
      </VideoContainer>
    );

  return (
    <LayoutStyle>
      <Menu>
        <LeftPart>
          <Logo src={"/love300/symbol.png"} />
          <Logo src={"/love300/logo.png"} />
        </LeftPart>
        <RightPart>
          <StyledScrollLink
            to={"buy-token"}
            offset={-150}
            onClick={handleLinkClick}
          >
            <MenuItem>Buy Token</MenuItem>
          </StyledScrollLink>
          <StyledScrollLink
            to={"business-model"}
            offset={-150}
            onClick={handleLinkClick}
          >
            <MenuItem>Business Model</MenuItem>
          </StyledScrollLink>

          <StyledScrollLink to={"news"} offset={-150} onClick={handleLinkClick}>
            <MenuItem>News</MenuItem>
          </StyledScrollLink>

          <StyledScrollLink
            to={"contact"}
            offset={-150}
            onClick={handleLinkClick}
          >
            <MenuItem>Contact</MenuItem>
          </StyledScrollLink>

          <StyledLink href="/products/apexell">
            <MenuItem>Products</MenuItem>
          </StyledLink>

          {!isProductsPage && <WaveLightImg src={"/love300/mri.png"} />}
        </RightPart>
        <MenuButton onClick={toggleModal}>
          <Image src="/love300/menu-mobile.png" alt="menu image" />
        </MenuButton>
        <MobileMenuModal open={isModalOpen} onClose={toggleModal} />
        {/* <LangButton
          onClick={() => {
            setLang((prev) => (prev === Lang.KOR ? Lang.ENG : Lang.KOR));
          }}
        >
          {lang === Lang.KOR ? Lang.ENG.toUpperCase() : "한글"}
        </LangButton> */}
      </Menu>
      <>
        <Component {...pageProps} />
      </>
    </LayoutStyle>
  );
}

const MenuButton = styled.button`
  display: none;
  border: none;
  padding: none;
  background: none;
  width: 24px;
  height: 24px;

  ${getMediaQueryCSS(`
    
    display: block; 
  `)}
`;

const Image = styled.img``;

// const LangButton = styled.span`
//   display: none;
//   cursor: pointer;
//   &::before {
//     content: "";
//     position: absolute;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     background: linear-gradient(135deg, #064567 0%, #e71139 100%);
//     border-radius: 10px; /* 동일한 border-radius 적용 */
//     margin: 1px; /* 그라데이션 border 두께 */
//     z-index: -1;
//     ${getMediaQueryCSS(`
//         background: ${Colors.White};
//     `)}
//   }
//   ${getMediaQueryCSS(`
//         display: block;
//         background: ${Colors.White};
//         font-size: ${getRatioSize(13, true)};
//         font-weight: 700;
//         line-height: normal;
//         color: ${Colors.Black};
//         border-radius: 10px;
//         position: relative;
//         background: linear-gradient(135deg, #064567 0%, #e71139 100%);
//         padding: ${getRatioSize(10)} ${getRatioSize(20)};
//         z-index: 1;
//         width: ${getRatioSize(34, true)};
//     `)}
// `;

export const Menu = styled.div`
  position: relative;
  display: flex;
  justify-content: left;
  align-items: center;
  padding-top: 40px;
  padding-right: 15.625vw;
  padding-left: 15.625vw;
  ${getMediaQueryCSS(`
    padding-right: 5.556vw;
    padding-left: 5.556vw;
  `)}
`;

export const LeftPart = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  gap: 10px;
  ${getMediaQueryCSS(`
    width: 100%;`)}
`;

export const Logo = styled.img`
  cursor: pointer;
`;

const StyledLink = styled(Link)`
  display: block;
  z-index: 1;
  ${getMediaQueryCSS(`
      display: none;
  `)}
`;

const StyledScrollLink = styled(ScrollLink)`
  display: block;
  z-index: 1;
  ${getMediaQueryCSS(`
      display: none;
  `)}
`;

export const RightPart = styled.div`
  margin-left: ${getRatioSize(50, false)};
  display: flex;
  gap: ${getRatioSize(70, false)};
  align-items: center;
  z-index: 10;
`;

const MenuItem = styled.span`
  cursor: pointer;
  color: ${Colors.Black};
`;

const LayoutStyle = styled.div`
  width: 100%;
  background-color: ${Colors.White};
  min-width: 360px;
  margin: 0 auto;
`;

const WaveLightImg = styled.img`
  width: 50%;
  position: absolute;
  right: 0%;
  top: -10%;
  ${getMediaQueryCSS(`
    top: ${getRatioSize(100, true)};
  `)}
  z-index:0;
`;

const VideoContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: 10;
  background-color: ${Colors.Black};
`;

const Video = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70vw;
  object-fit: contain;
  ${getMediaQueryCSS(`
  width: 90vw;
  `)}
`;
const Button = styled.span<{
  $offsetY: number;
  $offsetX: number;
  $buttonWidth: number;
}>`
  cursor: pointer;
  position: absolute;
  top: ${({ $offsetY }) =>
    `calc(50% + ${$offsetY / 2}px + 20px)`}; /* 비디오 절반 높이와 간격 추가 */
  left: ${({ $offsetX, $buttonWidth }) =>
    `calc(50% + (${
      $offsetX / 2
    }px - ${$buttonWidth}px))`}; /* 비디오 절반 높이와 간격 추가 */

  border: none;
  cursor: pointer;
  color: ${Colors.White};
  z-index: 20; /* 비디오 위에 보이도록 z-index를 높임 */
  ${getMediaQueryCSS(`
  `)}
`;
