import { Colors } from "@common/constant";
import { getMediaQueryCSS, getRatioSize } from "@common/util";
import { useAtomValue } from "jotai";
import React from "react";
import styled from "styled-components";
import { globalLang, Lang } from "../../pages/_app";

export default function Download() {
  const lang = useAtomValue(globalLang);
  const isKor = lang === Lang.KOR;
  return (
    <ButtonGroup>
      <a href={`/LOVE300_Whitepaper_V1_KOR.pdf`} download>
        <Button>
          {isKor ? "LOVE300 국문 백서" : "LOVE300 Whitepaper_KOR"}
          <DownloadIcon src="/love300/Icon_download.png" alt="download" />
        </Button>
      </a>
      <a href={`/LOVE300_Whitepaper_V1_ENG.pdf`} download>
        <Button>
          {isKor ? "LOVE300 영문 백서" : "LOVE300 Whitepaper_ENG"}
          <DownloadIcon src="/love300/Icon_download.png" alt="download" />
        </Button>
      </a>
    </ButtonGroup>
  );
}

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  gap: ${getRatioSize(15)};
  ${getMediaQueryCSS(`
    flex-direction: column;
  gap: ${getRatioSize(15, true)};
  `)}
`;

const Button = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${Colors.Black};
  font-size: ${getRatioSize(16)};
  line-height: normal;
  padding: ${getRatioSize(6)} 8px;
  border: 1px solid ${Colors.Black};
  border-radius: 18px;
  gap: 2px;
  ${getMediaQueryCSS(`
  flex-direction: row;
	  font-size: ${getRatioSize(13, true)};
  `)}
`;
const DownloadIcon = styled.img`
  display: block;
  width: ${getRatioSize(24)};
  ${getMediaQueryCSS(`
    width: ${getRatioSize(24, true)};
  `)}
`;
