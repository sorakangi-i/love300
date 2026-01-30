// "use client";

// import { DesktopImage, ImageContainer, MobileImage } from "@styles/styled";

// const PurposeSection = ({ type } = { type: "apexell" }) => {
//   const image = `/love300/project_${type}`;
//   return (
//     <section>
//       <ImageContainer>
//         <DesktopImage src={`${image}.png`} alt="apexell product imag " />
//         <MobileImage src={`${image}_mobile.png`} alt="apexell product imag " />
//       </ImageContainer>
//     </section>
//   );
// };

// export default PurposeSection;

interface Props {
  lang: Lang;
  type: string;
}

("use client");

import { getMediaQueryCSS } from "@common/util";
import { SectionContainer } from "@styles/styled";

import styled from "styled-components";
import { Lang } from "../../_app";
import { PURPOSE_SECTION } from "../../../constants/saranghae300";
import { PURPOSE_APEXELL_SECTION } from "../../../constants/apexell";

const PurposeSection = ({ lang, type }: Props) => {
  if (!PURPOSE_SECTION[lang]) return;
  const image = `/love300/project_${type}.png`;
  const { title, sub, desc, boxes } = PURPOSE_SECTION[lang];
  return (
    <Container
      $type={type}
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
      }}
    >
      <TopWrapper>
        <Content
          style={
            type === "apexell"
              ? {
                  justifyItems: "start",
                }
              : undefined
          }
        >
          <h2>{title}</h2>
          <h1>{sub}</h1>
          <p>{desc}</p>
        </Content>

        {type === "apexell" && (
          <BoxContainer>
            {PURPOSE_APEXELL_SECTION[lang].boxes?.map((box, i) => (
              <Box key={i}>
                <img src={`/love300/${box.icon}.svg`} />
                <BoxContent>
                  <strong>{box.title}</strong>
                  <p>{box.desc}</p>
                </BoxContent>
              </Box>
            ))}
          </BoxContainer>
        )}
      </TopWrapper>

      <BoxContainer>
        {boxes?.map((box, i) => (
          <Box key={i}>
            <img src={`/love300/${box.icon}.svg`} />
            <BoxContent>
              <strong>{box.title}</strong>
              <p>{box.desc}</p>
            </BoxContent>
          </Box>
        ))}
      </BoxContainer>
    </Container>
  );
};

export default PurposeSection;

const Content = styled.div`
  text-align: center;
  font-weight: 700;

  margin-bottom: 92px;
  color: #fff;

  h1 {
    text-align: center;
    font-size: 48px;
    font-weight: 700;
    line-height: 100%; /* 48px */
    letter-spacing: -0.96px;

    margin-bottom: 32px;
  }

  h2 {
    margin-bottom: 12px;

    font-size: 32px;
    font-weight: 700;
    line-height: 150%; /* 48px */
    letter-spacing: -0.64px;

    strong {
      background: linear-gradient(90deg, #064567 0%, #e71139 68.79%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    margin-bottom: 18px;
  }

  p {
    text-align: start;
    font-weight: 400;
    font-size: 20px;
    line-height: 165%;
    letter-spacing: -2%;
  }

  ${getMediaQueryCSS(`
    justify-items: start;
    margin-bottom: 40px;

    h1 {
      font-size: 28px;
      line-height: 150%;
      letter-spacing: -2%;

      margin-bottom: 8px;
    }

    h2 {
      font-size: 36px;
      line-height: 100%; /* 36px */
      letter-spacing: -0.72px;
    }

    p {
      font-size: 20px;
      line-height: 165%; /* 33px */
      letter-spacing: -0.4px;
    }
  `)}
`;

const Container = styled(SectionContainer)<{ $type: string }>`
  background-color: #dae2e7;
  align-items: center;
  gap: ${({ $type }) => ($type === "apexell" ? "24px" : "66px")};

  ${getMediaQueryCSS(`
    gap: 45px;
    padding-block: 120px;
  `)}
`;

const BoxContainer = styled.div`
  display: flex;
  gap: 24px;

  ${getMediaQueryCSS(`
    flex-direction: column;
    gap: 20px;
  `)}
`;

const Box = styled.div`
  border-radius: 8px;
  background: #fff;
  display: flex;
  flex-direction: column;
  gap: 48px;

  padding: 32px;

  align-items: flex-start;

  flex-wrap: wrap;
  flex: 1;

  ${getMediaQueryCSS(`
    gap: 20px;
  `)}
`;

const BoxContent = styled.div`
  color: #101010;

  strong {
    font-size: 20px;

    font-weight: 700;
    line-height: 165%; /* 33px */
    letter-spacing: -0.4px;
  }

  p {
    margin-top: 9px;

    font-size: 18px;

    font-weight: 400;
    line-height: 150%; /* 27px */
    letter-spacing: -0.36px;
  }

  ${getMediaQueryCSS(`
    gap: 20px;
  `)}
`;

const TopWrapper = styled.div`
  display: flex;
  > * {
    flex: 1;
  }
  gap: 24px;

  ${getMediaQueryCSS(`

    flex-direction: column;
    width: 100%;
    margin-bottom: -25px;
  `)}
`;
