import React from "react";

import { useAtom } from "jotai";
import { globalLang } from "../../_app";

import {
  ImageContainer,
  ImageContentWrapper,
  MobileImage,
  DesktopImage,
  DirectButton,
} from "../../../src/styles/styled";
import ProductSection from "../apexell/_components/ProductSection";
import FacilitySection from "../apexell/_components/FaciltySection";
import ReferenceSection from "../_components/ReferenceSection";

import Link from "next/link";

import Layout from "../layout";
import PurposeSection from "../_components/PurposeSection";
import { BUTTON } from "../../../constants/apexell";

export default function Apexell(): JSX.Element {
  const [lang, _setLang] = useAtom(globalLang);

  return (
    <Layout>
      <section>
        <ImageContainer>
          <DesktopImage
            src={"/love300/product-apexell.png"}
            alt="apexell product imag "
          />
          <MobileImage
            src={"/love300/product-apexell-mobile.png"}
            alt="apexell product imag "
          />

          <ImageContentWrapper>
            <strong>APEXELL</strong>
            <p>Beyond Our Health With Love300</p>

            <Link href="http://apexell.com/" target="_blank">
              <DirectButton>{BUTTON[lang]}</DirectButton>
            </Link>
          </ImageContentWrapper>
        </ImageContainer>
      </section>
      <ProductSection lang={lang} />
      <PurposeSection lang={lang} type="apexell" />
      <FacilitySection lang={lang} />
      <ReferenceSection type="apexell" lang={lang} />
    </Layout>
  );
}
