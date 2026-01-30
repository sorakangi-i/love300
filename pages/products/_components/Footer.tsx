import { getMediaQueryCSS } from "@common/util";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: 40px 20px;
  background: linear-gradient(to right, #d8ebf5, #f2d8d8);

  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;

  padding: 70px 15.625vw; // header의 left 값

  ${getMediaQueryCSS(`
    flex-direction: column;
    align-items: start;
    gap: 40px;
    padding: 64px 5.556vw; 
`)}
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContactTitle = styled.h2`
  color: transparent;
  background: linear-gradient(to right, #064567 0%, #e71139 30%);
  background-clip: text;

  font-size: 32px;
  font-weight: 700;
  line-height: 38.4px;
  letter-spacing: -0.02em;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;

  margin-bottom: 4px;

  ${getMediaQueryCSS(`
    font-size: 28px;
    line-height: 33.6px;

    margin-bottom: 8px;
  `)}
`;

const PhoneNumber = styled.p`
  color: #101010;
  font-size: 40px;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: -0.02em;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;

  margin-bottom: 52px;

  ${getMediaQueryCSS(`
    font-size: 32px;
    line-height: 38.4px;

    margin-bottom: 48px;
  `)}
`;

const Address = styled.p`
  color: #101010;
  font-size: 16px;
  font-weight: 400;
  line-height: 19.2px;
  letter-spacing: -0.02em;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;

  strong {
    font-weight: 700;
    margin-right: 6px;
  }

  ${getMediaQueryCSS(`
    font-size: 16px;
    line-height: 19.2px;
  `)}
`;

const ButtonList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  ${getMediaQueryCSS(`
    width: 100%;

  `)}
`;

const DownloadButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  text-decoration: none;
  transition: all 0.3s ease;
  border-radius: 8px;

  padding: 24px 16px;
  background: #0000001a;

  color: #ffffff;
  width: 243px;

  font-size: 16px;
  font-weight: 700;
  line-height: 19.2px;
  letter-spacing: -0.02em;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;

  &:hover {
    background: #eaeaea;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  }

  ${getMediaQueryCSS(`
    width: 100%;
  `)}
`;

const Footer = () => {
  const files = [
    { name: "LOVE300 영문 백서", link: "/files/english_whitepaper.pdf" },
    { name: "LOVE300 국문 백서", link: "/files/korean_whitepaper.pdf" },
  ];

  return (
    <Container>
      <ContactInfo>
        <ContactTitle>Contact</ContactTitle>
        <PhoneNumber>1588-2616</PhoneNumber>
        <Address>
          <strong>주소</strong> 광주광역시 북구 태봉로 송가빌딩 4층
        </Address>
        <Address>
          <strong>메일</strong> love300srh@gmail.com
        </Address>
      </ContactInfo>
      <ButtonList>
        {files.map((file, index) => (
          <DownloadButton key={index} href={file.link} download>
            {file.name}{" "}
            <Icon
              width={16}
              height={16}
              src="/love300/download-icon-white.png"
              alt="experiment results"
            />
          </DownloadButton>
        ))}
      </ButtonList>
    </Container>
  );
};

export default Footer;

const Icon = styled.img`
  /* width: 24px; */
  /* height: 24px; */
`;
