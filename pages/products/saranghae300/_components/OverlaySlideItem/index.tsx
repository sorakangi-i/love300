import { getMediaQueryCSS } from "@common/util";
import { DirectButton } from "@styles/styled";
import { useAtom } from "jotai";
import Link from "next/link";
import styled from "styled-components";
import { Lang, globalLang } from "../../../../_app";
import { OVERLAY_SECTION } from "../../../../../constants/saranghae300";

const Cover = ({ lang }: { lang: Lang }) => {
  const { title, sub, desc, btn } = OVERLAY_SECTION[lang];

  return (
    <Container key={1}>
      <h2>{title}</h2>
      <h1>{sub}</h1>
      <p>{desc}</p>
      <Link href="http://www.deepbada.com/" passHref target="_blank">
        <DirectButton>{btn}</DirectButton>
      </Link>
    </Container>
  );
};

const OverlaySlideItem = () => {
  return <StyledImage key={0} src="/love300/product-saranghae300.png" />;
};

OverlaySlideItem.Cover = Cover;

export default OverlaySlideItem;

const StyledImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const Container = styled.div`
  /* padding-inline: 1.2rem; */

  align-content: center;

  background: rgba(6, 69, 103, 0.9);
  height: 100%;

  color: #fff;
  text-align: center;

  h1 {
    font-size: 72px;
    font-weight: 700;
    line-height: 100%; /* 72px */
    letter-spacing: -1.44px;
    margin-bottom: 48px;
  }

  h2 {
    font-size: 40px;
    font-weight: 700;
    line-height: 100%; /* 40px */
    letter-spacing: -0.8px;

    margin-bottom: 30px;
  }

  p {
    font-size: 20px;
    font-weight: 400;
    line-height: 165%; /* 33px */
    letter-spacing: -0.4px;

    margin-bottom: 56px;
  }

  ${getMediaQueryCSS(`
    h1 {
        font-size: 36px;
        line-height: 120%; /* 43.2px */
        letter-spacing: -0.72px;

        margin-bottom: 36px;
    }

    h2 {
        font-size: 20px;
        line-height: 100%; /* 20px */
        letter-spacing: -0.4px;

        margin-bottom: 22px;
    }

    p {
        font-size: 18px;
        line-height: 165%; /* 29.7px */
        letter-spacing: -0.36px;

        margin-bottom: 36px;
    }
  `)}
`;
