import { getMediaQueryCSS, getRatioSize } from "@common/util";
import React from "react";
import styled from "styled-components";

const Partners = () => {
  return (
    <PartnersLayout>
      <PartnersTitle>Partners</PartnersTitle>
      <PartnersImageList>
        <PartnersLogo src={"/love300/logo_2.png"} alt={""} />
        <PartnersLogo src={"/love300/logo_2.png"} alt={""} />
        <PartnersLogo src={"/love300/logo_2.png"} alt={""} />
        <PartnersLogo src={"/love300/logo_2.png"} alt={""} />
        <PartnersLogo src={"/love300/logo_2.png"} alt={""} />
        <PartnersLogo src={"/love300/logo_2.png"} alt={""} />
        <PartnersLogo src={"/love300/logo_2.png"} alt={""} />
        <PartnersLogo src={"/love300/logo_2.png"} alt={""} />
        <PartnersLogo src={"/love300/logo_2.png"} alt={""} />
      </PartnersImageList>
    </PartnersLayout>
  );
};

const PartnersLayout = styled.section`
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

const PartnersTitle = styled.h3`
  font-weight: 700;
  line-height: normal;
  font-size: ${getRatioSize(30)};
  margin-bottom: ${getRatioSize(70)};
  ${getMediaQueryCSS(`
    font-size: ${getRatioSize(20, true)};
    margin-bottom: ${getRatioSize(25, true)};
  `)}
`;

const PartnersImageList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${getRatioSize(70)} ${getRatioSize(100)}; /* 세로 갭 70px, 가로 갭 100px */
  align-items: center;
  justify-items: center;
  justify-content: space-evenly;
  padding: 0 ${getRatioSize(310)};

  ${getMediaQueryCSS(`
    gap: ${getRatioSize(20, true)} ${getRatioSize(
    30,
    true
  )}; /* 세로 갭 70px, 가로 갭 100px */
  padding: 0 ${getRatioSize(20, true)};
  `)}
`;

const PartnersLogo = styled.img`
  ${getMediaQueryCSS(`
    width: ${getRatioSize(74, true)};
    }; /* 세로 갭 70px, 가로 갭 100px */
  `)}
`;

export default Partners;
