"use client";

import { getMediaQueryCSS } from "@common/util";
import React, { ReactNode, useMemo } from "react";
import styled from "styled-components";
import { useAtom } from "jotai";
import { globalLang } from "../../_app";
import { Colors } from "@common/constant";
import { content } from "../../../constants/product";

import Footer from "../_components/Footer";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ReferenceSection from "../_components/ReferenceSection";

export default function Layout({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const [lang, _setLang] = useAtom(globalLang);
  const pathname = usePathname();

  const isApexell = useMemo(() => pathname === "/products/apexell", [pathname]);

  const isSaranghae300 = useMemo(
    () => pathname === "/products/saranghae300",
    [pathname]
  );

  return (
    <Container>
      <section style={{ zIndex: "9" }}>
        <Title>{content[lang].title}</Title>
        <ProductButtonContainer>
          <Link passHref href="/products/apexell">
            <ProductButton $active={isApexell}>
              {content[lang].products[0]}
            </ProductButton>
          </Link>
          <Link passHref href="/products/saranghae300">
            <ProductButton $active={isSaranghae300}>
              {content[lang].products[1]}
            </ProductButton>
          </Link>
        </ProductButtonContainer>
      </section>

      {children}
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  font-family: "Pretendard-Regular";
  * {
    font-family: "Pretendard-Regular";
  }

  padding-top: 80px;
  display: flex;
  flex-direction: column;

  width: 100%;

  position: relative;

  ${getMediaQueryCSS(`
    padding-top: 65px;
  `)}
`;

const Title = styled.h1`
  font-size: 64px;
  font-weight: 700;
  line-height: 64px;
  letter-spacing: -0.02em;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;

  text-align: center;

  margin-bottom: 34px;

  ${getMediaQueryCSS(`
    margin-bottom: 24px;
    font-size: 44px;
    line-height: 44px;
  `)}
`;

const ProductButtonContainer = styled.div`
  gap: 10px;
  color: ${Colors.White};
  display: flex;
  justify-content: center;
  cursor: pointer;

  margin-bottom: 48px;

  ${getMediaQueryCSS(`
    margin-bottom: 36px;
  `)}
`;

const ProductButton = styled.button<{ $active?: boolean }>`
  font-family: "Pretendard-Regular";
  font-size: 18px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: -0.02em;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;

  transition: 0.3s;
  padding: 11px 16px;
  border-radius: 22.5px;

  background: ${({ $active }) =>
    $active
      ? "linear-gradient(to right, #064567 0%, #e71139 100%)"
      : "#ebebeb"};
  color: ${({ $active }) => ($active ? Colors.White : "#9E9E9E")};

  ${getMediaQueryCSS(`
    font-size: 16px;
  `)}
`;
