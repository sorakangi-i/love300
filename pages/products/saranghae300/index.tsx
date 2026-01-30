import { SectionContainer } from "@styles/styled";
import PurposeSection from "../_components/PurposeSection";
import ScrollAnimationText from "./_components/ScrollAnimationText";

import Layout from "../layout";
import ReferenceSection from "../_components/ReferenceSection";
import AquaSection from "./_components/AquaSection";

import MineralSection from "./_components/MineralSection";
import CertificationSection from "./_components/CertificationSection";
import PremierSection from "./_components/PremierSection";
import BottledWaterSection from "./_components/BottledWaterSection";

import OverlaySlide from "./_components/OverlaySlide";
import OverlaySlideItem from "./_components/OverlaySlideItem";
import { useAtom } from "jotai";
import { globalLang } from "../../_app";
import {
  AQUA_SECTION,
  BLUE_AQUA_SECTION,
} from "../../../constants/saranghae300";
import SwiperSection from "./_components/SwiperSection";

const blueAquaData = {
  content: (
    <>
      생수 시장은 인구증가와 글로벌화로 인해
      <br />
      <strong>물 수요가 급증하며 성장 중인 시장</strong>입니다.
    </>
  ),
  img: "/love300/aqua-blue.png",
  // bg: "/love300/bg-aqua.png",
  children: {
    content: (
      <>
        전 세계적인 물 부족 심화로
        <br />
        생수 산업분야의 관심 고조되고 있으며
        <br />
        시장 성장성을 높게 판단한
        <br />
        국내외 대기업들 진출하여
        <br />전 세계 979조, 국내 약 2조의
        <br />
        연평균 4.9% 성장하고 있습니다.
      </>
    ),
    img: "/love300/aqua-chart.png",
  },
};

const Saranghae300 = () => {
  const [lang] = useAtom(globalLang);

  return (
    <Layout>
      <OverlaySlide>
        <OverlaySlide.Item>
          <OverlaySlideItem />
        </OverlaySlide.Item>
        <OverlaySlide.Item>
          <OverlaySlideItem.Cover lang={lang} />
        </OverlaySlide.Item>
      </OverlaySlide>
      <ScrollAnimationText lang={lang} />
      <AquaSection {...AQUA_SECTION[lang]} />

      <MineralSection lang={lang} />
      <CertificationSection lang={lang} />
      {/* <SwiperSection lang={lang} /> */}
      <PremierSection lang={lang} />
      <BottledWaterSection lang={lang} />

      <AquaSection isBlue {...BLUE_AQUA_SECTION[lang]} />

      <PurposeSection type="saranghae" lang={lang} />
      <SectionContainer>
        <ReferenceSection.MoreInformation type="saranghae" lang={lang} />
      </SectionContainer>
    </Layout>
  );
};

export default Saranghae300;
