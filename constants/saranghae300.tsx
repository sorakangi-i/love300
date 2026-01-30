import { ReactNode } from "react";
import { Lang } from "../pages/_app";
import { AquaSectionProps } from "../pages/products/saranghae300/_components/AquaSection";

interface ScrollAnimationProps {
  id: number;
  color?: string;
  element: ReactNode;
}

export const OVERLAY_SECTION: Record<Lang, Record<string, string>> = {
  [Lang.ENG]: {
    title: "SaRangHae300",
    sub: "The Premium Deep Sea Water",
    desc: "Saranghae 300 is expanding domestically and abroad by utilizing the LOVE300 blockchain ecosystem, along with drinking water, salt, and daily necessities",
    btn: "MORE",
  },
  [Lang.KOR]: {
    title: "SaRangHae300",
    sub: "The Premium Deep Sea Water",
    desc: "사랑해300은 해양심층수인 마시는 물과 소금, 생필품을 중심으로 LOVE300 블록체인 생태계를 활용하여 국내 및 해외로 확장하고 있습니다.",
    btn: "바로가기",
  },
};

export const SCROLL_ANIMATION_TEXT_SECTION: Record<
  Lang,
  Record<string, ScrollAnimationProps[]>
> = {
  [Lang.ENG]: {
    contents: [
      { id: 1, element: <p>Where nothing can be reached,</p> },
      {
        id: 2,
        color: `#064567 0%, #e71139`,
        element: <p>The deep sea water of the East Sea</p>,
      },
      { id: 3, element: <span>A depth of less than 200 meters.</span> },
      {
        id: 4,
        element: (
          <span>
            It starts in Greenland and Antarctica, passes through cold seas,
            warm seas,
          </span>
        ),
      },
      {
        id: 5,
        element: (
          <span>
            and circulates the Earth for 2000 years to the East Sea of Korea.
          </span>
        ),
      },
    ],
  },
  [Lang.KOR]: {
    contents: [
      { id: 1, element: <p>아무도 닿지 않는 곳,</p> },
      {
        id: 2,
        color: `#064567 0%, #e71139`,
        element: <p>동해의 해양심층수</p>,
      },
      { id: 3, element: <span>수심 200미터 이상</span> },
      {
        id: 4,
        element: (
          <span>
            그린란드와 남극에서 시작해 차가운 바다를 지나 따뜻한 바다로
          </span>
        ),
      },
      {
        id: 5,
        element: (
          <span>대한민국의 동해까지 2,000년 동안 지구를 순환합니다.</span>
        ),
      },
    ],
  },
};

export const AQUA_SECTION: Record<Lang, AquaSectionProps> = {
  [Lang.ENG]: {
    content: (
      <>
        Deep sea water is
        <strong>seawater that is below 200 meters deep</strong>
        <br />
        and does not mix with ordinary sea water.
        <br />
        Additionally, it creates its own deep sea water belt
        <br />
        due to distinct density and temperature differences.
      </>
    ),
    img: "/love300/aqua.png",
    bg: "/love300/bg-aqua.png",
    children: {
      content: (
        <>
          As such, deep sea water forms
          <br />
          its own belt and circulates
          <br />
          every 700 to 1,000 years.
          <br />
          <br />
          In addition, the results of the water
          <br />
          quality test in the East Sea show higher
          <br />
          cleanliness, superior mineral balance,
          <br />
          and abundant mineral content
          <br />
          compared to the deep sea water
          <br />
          in other countries.
        </>
      ),
      img: "/love300/aqua-map.png",
    },
  },
  [Lang.KOR]: {
    content: (
      <>
        해양심층수는 온도차에 의해 침강된
        <br />
        <strong>수심 200m 이상 깊은 곳의 바닷물,</strong>
        <br />
        표층수와 섞이지 않은 뚜렷한 밀도 차이로 <br />
        독자적인 해양심층수 벨트를 생성합니다.
      </>
    ),
    img: "/love300/aqua.png",
    bg: "/love300/bg-aqua.png",
    children: {
      content: (
        <>
          이처럼 독자적인 띠를 형성하여
          <br />
          700 ~ 1,000년을 주기로 순환하고 있으며
          <br />
          <br />
          동해 해양심층수의 수질 검사 결과는
          <br />
          타국 대비 높은 청정성과 우수한 미네랄 밸런스,
          <br />
          풍부한 무기질 함량을 보유하고 있습니다.
        </>
      ),
      img: "/love300/aqua-map.png",
    },
  },
};

export const BLUE_AQUA_SECTION: Record<Lang, AquaSectionProps> = {
  [Lang.ENG]: {
    content: (
      <>
        <strong>The bottled water market is growing as demand </strong>
        <br />
        for water surges due to population growth and globalization.
      </>
    ),
    img: "/love300/aqua-blue.png",
    children: {
      content: (
        <>
          As the global shortage of water intensifies, interest in the bottled
          water industry is increasing, and large domestic and foreign companies
          that judged the growth potential of the bottled water market highly
          are entering the market.
          <br />
          <br />
          In addition, it is showing an annual growth rate of 4.9% worldwide,
          with the domestic market value reaching about KRW 2 trillion and the
          global market value reaching KRW 979 trillion
        </>
      ),
      img: "/love300/aqua-chart.png",
    },
  },
  [Lang.KOR]: {
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
          전 세계적인 물 부족 심화로 생수 산업에 대한 관심이 고조되고 있으며,
          생수 시장의 성장 가능성을 높게 판단한 국내외 대기업들이 시장에
          진출하고 있습니다.
          <br />
          또한 전 세계적으로 연평균 4.9%씩 성장하고 있으며, 전세계 979조
          국내에서는 약 2조 원 시장 가치를 보이고 있습니다.
        </>
      ),
      img: "/love300/aqua-chart.png",
    },
  },
};

export const MINERAL_SECTION: Record<Lang, Record<string, ReactNode>> = {
  [Lang.ENG]: {
    title: (
      <>
        100% <strong>Natural Minerals</strong>
      </>
    ),
    desc: (
      <>
        The deep sea water, made up of 100% natural minerals,
        <br />
        has a ratio of about 70 minerals and magnesium, calcium, and potassium
        of 3:1:1,
        <br />
        the most similar balance between the body fluid and the fetus`s amniotic
        fluid ratio,
        <br />
        so it has excellent absorption power.
      </>
    ),
  },
  [Lang.KOR]: {
    title: (
      <>
        <strong>천연 미네랄</strong> 100%
      </>
    ),
    desc: (
      <>
        해양심층수는 약 70여가지 미네랄과 마그네슘, 칼슘, 칼륨의 비율이 3:1:1로
        <br />
        인체의 체액과 태아의 양수비율과 가장 유사한 밸런스를 가지고 있어
        흡수력이 매우 뛰어납니다.
      </>
    ),
  },
};

export const CERTIFICATION_SECTION: Record<Lang, Record<string, ReactNode>> = {
  [Lang.ENG]: {
    title: (
      <>
        <strong>World Class Water</strong>
      </>
    ),
    desc: (
      <>
        SaRangHae 300 has been recognized for its stability and quality
        <br />
        by overseas and domestic certification agencies.
      </>
    ),
  },
  [Lang.KOR]: {
    title: (
      <>
        <strong>World Class Water</strong>
      </>
    ),
    desc: "사랑해300은 해외 및 국내 인증기관에서 안정성과 품질을 인정받았습니다.",
  },
};

export const PREMIER_SECTION: Record<Lang, Record<string, ReactNode>> = {
  [Lang.ENG]: {
    title: (
      <>
        <strong>Winning the Gold Award for No. 1</strong>
        <br />
        in the 2024 The Fine water Society Contest
      </>
    ),
    desc: (
      <>
        The Fine water Society Contest is the world`s most prestigious
        <br />
        bottled water contest, with premium bottled water from
        <br /> more than 60 countries around the world participating, and among
        them, I love you was selected as the premium bottled water.
      </>
    ),
    title2: (
      <>
        <strong>Microplastic undetected bottled water</strong> <br />
      </>
    ),
    desc2: (
      <>
        SaRangHae 300 is a premium bottled
        <br />
        water with Test Report of Non-Detection
        <br />
        Microplastic Identification
      </>
    ),
  },
  [Lang.KOR]: {
    title: (
      <>
        2024년 국제 파인워터 대회 <br />
        <strong>1등 골드상 수상</strong>
      </>
    ),
    desc: (
      <>
        국제파인워터 대회는 전세계에서 가장 권위있는 대회로서
        <br /> 전세계 60여개 국가 프리미엄생수들이 출전하였고
        <br /> 사랑해300이 프리미엄급 생수로 선정되었습니다.
      </>
    ),
    title2: (
      <>
        <strong>미세플라스틱 불검출</strong> <br />
        프리미엄 생수
      </>
    ),
    desc2: (
      <>
        사랑해300은
        <br /> 미세플라스틱 불검출 인증서를 받은
        <br /> 프리미엄 생수입니다.
      </>
    ),
  },
};

interface PDGProps {
  name: string;
  link: string;
}

export const MORE_INFORMATION_SECTION: Record<Lang, PDGProps[]> = {
  [Lang.ENG]: [
    {
      name: "SaRangHae 300 Catalog (Korean)",
      link: "/love300/pdfs/catalog-korean.pdf",
    },
    {
      name: "SaRangHae 300 Catalog (English)",
      link: "/love300/pdfs/catalog-english.pdf",
    },
    {
      name: "SaRangHae 300 Catalog (Chinese)",
      link: "/love300/pdfs/catalog-chinese.pdf",
    },
    {
      name: "Love300 Arabic Business Proposal",
      link: "/love300/pdfs/business-propsal-arabic.pptx",
    },
  ],
  [Lang.KOR]: [
    {
      name: "사랑해300 카달로그 국문",
      link: "/love300/pdfs/catalog-korean.pdf",
    },
    {
      name: "사랑해300 카달로그 영문",
      link: "/love300/pdfs/catalog-english.pdf",
    },
    {
      name: "사랑해300 카달로그 중문",
      link: "/love300/pdfs/catalog-chinese.pdf",
    },
    {
      name: "사랑해300 아랍 사업제안서",
      link: "/love300/pdfs/business-propsal-arabic.pptx",
    },
  ],
};

export const SWIPER_SECTION: Record<Lang, Record<string, ReactNode>> = {
  [Lang.ENG]: {
    title: (
      <>
        Love300 Premium Deep Sea Water
        <br />
        <strong>Selected by Jim Rogers, the World`s Top 3 Investors</strong>
      </>
    ),
    desc: (
      <>
        Jim Rogers, one of the world`s top three investors,
        <br />
        signed an investment agreement with Deep Sea Co., Ltd.
        <br /> and was listed as an inside director.
      </>
    ),
  },
  [Lang.KOR]: {
    title: (
      <>
        <strong>세계 3대 투자가 Jim Rogers</strong>가 선택한
        <br />
        프리미엄 해양심층수 사랑해 300
      </>
    ),
    desc: (
      <>
        세계 3대 투자가인 짐 로저스 회장은 해양심층수 전문 기업 주식회사
        깊은바다와 투자 협약 체결 및 사내이사로 등재되었습니다.
      </>
    ),
  },
};

interface Boxes {
  icon: string;
  title: ReactNode;
  desc: ReactNode;
}
interface PurposeProps {
  title?: ReactNode;
  sub?: ReactNode;
  desc?: ReactNode;
  boxes?: Boxes[];
}

export const PURPOSE_SECTION: Record<Lang, PurposeProps> = {
  [Lang.ENG]: {
    title: <strong>Our Purpose</strong>,
    sub: "With LOVE300 Project",
    desc: (
      <>
        SaRangHae 300 provides business analysis and product development
        <br />
        solution ecosystem activation to the industry environment based on
        <br />
        LOVE300`s health data, L300AI, and payment system.
      </>
    ),
    boxes: [
      {
        icon: "icon-purpose-block-chain",
        title: "Using the Blockchain Ecosystem",
        desc: "By providing payment and data securing through the use of LOVE300's blockchain ecosystem, it contributes to the activation of the blockchain ecosystem",
      },
      {
        icon: "icon-purpose-partnership",
        title: "Multifaceted Partnership",
        desc: "SaRangHae 300 Utilizes the blockchain ecosystem through various partnerships with overseas buyers, Apexel Co., Ltd., and Cheongwoo Hospital",
      },
      {
        icon: "icon-purpose-rnd",
        title: "Expansion of R&D and Production Facilities",
        desc: "Strengthen consortium with LOVE300 Foundation through establishment of research institute and expansion of production facilities, etc",
      },
      {
        icon: "icon-purpose-social",
        title: "Social Activities",
        desc: "Contribute to the growth of a social enterprise by returning business profits, health data, etc. to society",
      },
    ],
  },
  [Lang.KOR]: {
    title: <strong>Our Purpose</strong>,
    sub: "With LOVE300 Project",
    desc: (
      <>
        사랑해300은 LOVE300의 헬스 데이터 및 L300AI, 결제시스템 등을 바탕으로,
        <br /> 업계 환경에 비즈니스 분석 및 제품개발 솔루션생태계 활성화 등을
        제공합니다.
      </>
    ),
    boxes: [
      {
        icon: "icon-purpose-block-chain",
        title: "블록체인 생태계 활용",
        desc: "LOVE300의 블록체인 생태계 활용을 통한 결제 및 데이터 확보를 제공하여 블록체인 생태계 활성화 기여",
      },
      {
        icon: "icon-purpose-partnership",
        title: "다방면 파트너쉽",
        desc: "사랑해300 해외 바이어 및 주식회사 에이펙셀, 청우한방병원 등과 다방면 파트너쉽을 통한 결제 및 스테이킹 등을 통한 블록체인 생태계 활용",
      },
      {
        icon: "icon-purpose-rnd",
        title: "R&D 및 생산시설 확장",
        desc: "연구소 설립 및 생산시설 등의 확장을 통하여, LOVE300 재단과의 컨소시엄 강화",
      },
      {
        icon: "icon-purpose-social",
        title: "사회적 활동",
        desc: "사업수익 및 헬스데이터 등을 사회에 환원하여 사회적 기업으로 성장하는데 기여",
      },
    ],
  },
};

export const BOTTLED_WATER_SECTION = {
  [Lang.KOR]: {
    desc: "전세계에 판매되고 있는 사랑해300",
    buttons: ["중국", "미국", "베트남", "사우디", "대만"],
  },
  [Lang.ENG]: {
    desc: "SaRangHae 300 sold all over the world",
    buttons: ["China", "U.S.A", "Vietnam", "Saudi Arabia", "Taiwan"],
  },
};
