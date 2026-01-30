import { getMediaQueryCSS } from "@common/util";
import useScrollProgress from "@hooks/useScrollProgress";
import { ReactNode, useRef } from "react";
import styled from "styled-components";
import { SCROLL_ANIMATION_TEXT_SECTION } from "../../../../constants/saranghae300";

import { Lang } from "../../../_app";

export default function ScrollAnimationText({ lang }: { lang: Lang }) {
  if (!SCROLL_ANIMATION_TEXT_SECTION[lang]) return;
  return (
    <Container>
      {SCROLL_ANIMATION_TEXT_SECTION[lang].contents.map((section) => (
        <SectionItem
          key={section.id}
          color={section.color}
          element={section.element}
        />
      ))}
    </Container>
  );
}

const SectionItem = ({
  color,
  element,
}: {
  color?: string;
  element: ReactNode;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const progress = useScrollProgress(ref); // 스크롤 진행률 가져오기

  return (
    <Section
      ref={ref}
      style={
        {
          "--progress": progress,
          "--color": color || "#101010",
        } as React.CSSProperties
      }
    >
      {element}
    </Section>
  );
};

const Container = styled.div`
  padding-block: 240px 160px;
  padding-inline: 1.2rem;
  display: flex;
  flex-direction: column;

  :nth-of-type(2) {
    margin-bottom: 48px;
  }

  ${getMediaQueryCSS(`
        margin-bottom: 40px;
        padding-block: 120px 40px;
    `)}
`;

const Section = styled.div`
  color: transparent; /* 기본적으로 글자 색상을 투명하게 설정 */
  background: linear-gradient(
    to right,
    var(--color) calc(var(--progress) * 100%) /* 채워질 부분 */,
    #d1d1d1 calc(var(--progress) * 100%) /* 나머지 부분 */
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: background-color 0.2s ease-out;

  text-align: center;
  p {
    font-size: 40px;
    letter-spacing: -0.8px;
    font-weight: 700;
    line-height: 150%;
  }

  span {
    font-size: 24px;
    letter-spacing: -0.48px;
    font-weight: 700;
    line-height: 150%;
  }

  ${getMediaQueryCSS(`
    p {
        font-size: 32px;
        letter-spacing: -0.64px;
    }
    span {
        font-size: 18px;
        letter-spacing: -0.36px;
    }
  `)}
`;
