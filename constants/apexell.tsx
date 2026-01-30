import { ReactNode } from "react";
import { Lang } from "../pages/_app";

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

interface PDGProps {
  name: string;
  link: string;
}

interface ProductProps {
  title: ReactNode;
  desc?: string;
  lis?: string[];
  liDesc?: string;
  subDesc?: ReactNode;
}

export const BUTTON: Record<Lang, string> = {
  [Lang.ENG]: "MORE",
  [Lang.KOR]: "바로가기",
};

export const PRODUCT_FIRST_SECTION: Record<Lang, ProductProps> = {
  [Lang.ENG]: {
    title: "APEXELL",
    desc: "Established for the purpose of intellectual property and medical and pharmaceutical research and development, CoOPharm is a company valued at trillions of won. CTO Dr. Sangbong Lee secured the status of patent holder in the United States and registered a new patent under the name of Aipexel Co., Ltd. in June 2024. Additionally, through the LOVE300 blockchain ecosystem and L300 AI, the company is growing into a global intellectual property company.",
  },
  [Lang.KOR]: {
    title: "APEXELL",
    desc: "지적재산권과 의학 및 약학연구 개발을 목적으로 설립된 회사로 수조원의 가치를 지녔던 코O팜의 특허권을 CTO로 있는 이상봉 박사가 미국의 특허를 특허권자의 지위를 확보하여 2024년 6월 신규특허를 ㈜에이펙셀의 명의로 등록하였습니다. 나아가, LOVE300의 블록체인 생태계 및 L300 AI를 통하여 글로벌 지식재산권 회사로 성장하고 있습니다.",
  },
};

export const PRODUCT_SECOND_SECTION: Record<Lang, ProductProps> = {
  [Lang.ENG]: {
    title: "APEXELL Patent Certificate",
    desc: "As of 2024, APEXELL has conducted Phase 1 or Phase 2 clinical trials for prostate cancer, lung cancer, bile duct cancer, brain tumors (glioblastoma), liver cancer, and malignant lymphoma. Since 2016, the company has undergone the FDA`s fast-track approval process in the United States and received approval in 2022. Over 20 years of numerous clinical trials have shown the following Disease Control Rates (DCR)",
    lis: [
      "Inoperable bile duct cancer : 50%",
      "Malignant lymphoma after failure of existing treatments : 78.57%",
      "Liver cancer after failure of first-line treatment : 32%",
      "Prostate cancer : 72%",
      "Emergency cancer patients/emergency drugs not eligible for clinical trials : 28%",
    ],
    subDesc: (
      <>
        The average Disease Control Rate for
        <strong> APEXELL products is approximately 70%,</strong> and
        <br />
        <strong>
          the new drug substance has no reported side effects or resistance.
        </strong>
      </>
    ),
  },
  [Lang.KOR]: {
    title: "APEXELL 특허증",
    desc: "2024년 현재까지 전립선암, 폐암, 단도암/담관암, 뇌종양(교모세포종), 간암, 악성림프종 등의 임상을 1상 또는 2상까지 진행했습니다. 2016년부터 미국의 FDA 신속승인 절차를 거쳐 2022년 승인지정을 받았습니다. 20여년 간의 십 수차례의 임상실험 결과의 DCR(DISEASE CONTROL RATE : 질병 조정률)을 보면 다음과 같습니다.",
    lis: [
      "수술 불가한 담도암: 50%",
      "기존 치료 실패한 악성 림프종: 78.57%",
      "1차 치료 실패한 간암: 32%",
      "전립선암: 72%",
      "임상참여 불가한 응급 암환자/응급의약품: 28%",
    ],
    subDesc: (
      <>
        평균적인 <strong>APEXELL 제품의 질병 조정률은 약 70%</strong>이며,
        <strong>보고된 부작용과 내성이 없는 신약 물질</strong>입니다.
        물질입니다.
      </>
    ),
  },
};

export const PURPOSE_APEXELL_SECTION: Record<Lang, PurposeProps> = {
  [Lang.ENG]: {
    boxes: [
      {
        icon: "icon-purpose-consortium",
        title: "Consortium",
        desc: "Enhancing payment networks, distribution lines, and reliability through cooperation with domestic Cheongwoo Oriental Medicine Hospital and Cambodia National Hospital abroad.",
      },
      {
        icon: "icon-purpose-license",
        title: "Licensing Out",
        desc: "Engaging with global pharmaceutical companies and securing data from clinical trials to provide and utilize the blockchain ecosystem network.",
      },
    ],
  },
  [Lang.KOR]: {
    boxes: [
      {
        icon: "icon-purpose-consortium",
        title: "컨소시엄",
        desc: "국내 청우한방병원, 해외 캄보디아 국립병원과의 협력을 통한 결제망, 유통라인 확대 및 신뢰도 향상",
      },
      {
        icon: "icon-purpose-license",
        title: "라이센스 아웃",
        desc: "글로벌 제약사와 접촉 및 임상시험에 따른 데이터를 확보하여 블록체인 생태계망의 제공 및 활용",
      },
    ],
  },
};

export const PRODUCT_THIRD_SECTION: Record<Lang, ProductProps> = {
  [Lang.ENG]: {
    title: "APEXELL Patent Certificate",
    lis: [
      `Barriers in the New Drug Development Process`,
      `The new drug development business typically takes nearly 20 years from candidate discovery to approval.`,
      `If issues such as human toxicity, side effects, or insufficient disease control rates arise, the time required for corrective procedures is unpredictable.`,
      `Generally, the success rate of candidate compounds reaching the preclinical stage is 0.5%, and the success rate of reaching the clinical trial stage is 0.05%.`,

      `Overcoming APEXELL's Risks`,
      `Our anticancer substance has progressed to Phase II clinical trials, and we aim to own the results by conducting additional trials led by SPC.`,
      `Based on the results showing no side effects or limited toxicity and a disease control rate of 60-80, we estimate the time required to reach the preclinical stage to be 1-2 years.`,
      `The company has achieved the 0.05% success rate stage in new drug development, making the outcome of 'business success' foreseeable.`,
    ],
  },
  [Lang.KOR]: {
    title: (
      <>
        일반적인
        <br />
        신약 개발 절차
      </>
    ),

    lis: [
      `신약 개발 과정의 장벽`,
      `신약 개발 사업은 일반적으로 후보물질 발굴~허가 단계까지 약 20년 가까이 소요됨`,
      `인체 독성, 부작용, 질병조정률 미달 등의 문제점이 발생할 경우, 이에 대한 보완 절차의 소요시간은 예상할 수 없음`,
      `일반적으로 후보물질 10,000개 중 전임상 단계까지의 도달률은 0.5%, 임상 시험 단계까지의 도달율은 0.05%로 낮은 확률`,

      `APEXELL의 RISK 극복 요인`,
      `자사의 항암 물질은 임상 II상까지 진행을 한 바 있으며, 현재는 SPC 주도의 임상을 재실시하여 해당 결과물을 소유하고자함`,
      `본 물질이 부작용 및 제한 독성이 없고, 질병조정율 60~80인 결과에 근거하여 전임상까지의 소요되는 시간은 1~2년을 예상함`,
      `자사는 신약 개발의 성공 확률 0.05%의 단계를 달성한 것으로, ‘사업 성공‘이라는 결과물을 예상 가능한 상황`,
    ],
  },
};

export const PURPOSE_MORE_INFORMATION_SECTION: Record<Lang, PDGProps[]> = {
  [Lang.ENG]: [
    {
      name: "Apexel Business Proposal",
      link: "/love300/pdfs/에이펙셀사업제안서.pdf",
    },
    {
      name: "Cambodia Hospital Business Proposal",
      link: "/love300/pdfs/병원사업제안서.pdf",
    },
    {
      name: "Clinical Progress Report (External)",
      link: "/love300/pdfs/임상진행현황.pdf",
    },
    { name: "Clinical Results (External)", link: "/love300/pdfs/임상결과.pdf" },
    {
      name: "Prostate Cancer Clinical Trial Results (External)",
      link: "/love300/pdfs/임상시험결과.pdf",
    },
    {
      name: "APEXELL & Cheongwoo Oriental Medicine Hospital Joint Research Data (24-9-01)",
      link: "/love300/pdfs/공동연구자료.pdf",
    },
  ],
  [Lang.KOR]: [
    {
      name: "에이펙셀 사업제안서",
      link: "/love300/pdfs/에이펙셀사업제안서.pdf",
    },
    {
      name: "캄보디아 병원 사업제안서",
      link: "/love300/pdfs/병원사업제안서.pdf",
    },
    { name: "임상진행현황(외부용)", link: "/love300/pdfs/임상진행현황.pdf" },
    { name: "임상결과(외부용)", link: "/love300/pdfs/임상결과.pdf" },
    {
      name: "전립선암 임상시험결과(외부용)",
      link: "/love300/pdfs/임상시험결과.pdf",
    },
    {
      name: "APEXELL & 청우한방병원 공동연구자료(24-9-01)",
      link: "/love300/pdfs/공동연구자료.pdf",
    },
  ],
};

export const CLINICAL_TRIALS_HEADER: Record<Lang, string[]> = {
  [Lang.ENG]: ["Date", "country", "Phase", "Disease", "Result", "Remarks"],
  [Lang.KOR]: ["일자", "국가", "단계", "질병", "결과", "비교"],
};

export const CLINICAL_TRIALS_TABLE: Record<Lang, Record<string, string>[]> = {
  [Lang.ENG]: [
    {
      year: "2001",
      country: "Germany",
      phase: "Test Tube",
      disease: "Prostate",
      result: "Positive",
      remark: "Toxicity tests, etc.",
    },
    {
      year: "2002",
      country: "Germany",
      phase: "Preclinical",
      disease: "Prostate",
      result: "Positive",
      remark: "Repatox",
    },
    {
      year: "2004",
      country: "Germany",
      phase: "Clinical Trials I~II",
      disease: "Prostate/Pancreatic Cancer",
      result: "Positive",
      remark: "Repatox",
    },
    {
      year: "2006",
      country: "USA",
      phase: "Test Tube",
      disease: "Lung Cancer",
      result: "Positive",
      remark:
        "University of Maryland School of Medicine, GreeneBaum Cancer Center",
    },
    {
      year: "2011",
      country: "Korea",
      phase: "Preclinical ~ Clinical Trials",
      disease: "Prostate/Lung/Sarcoma/Rare Diseases",
      result: "Positive",
      remark: "Emergency drug use approval",
    },
    {
      year: "2011",
      country: "Korea",
      phase: "Preclinical ~ Clinical Trials",
      disease: "Brain tumor/Leukemia/Liver cancer",
      result: "Positive",
      remark:
        "Seoul National University Hospital / Samsung Medical Center / Asan Medical Center / YONSEI SEVERANCE HOSPITAL",
    },
    {
      year: "2012",
      country: "Australia/New Zealand",
      phase: "Preclinical ~ Clinical Trials",
      disease: "Non-small cell lung cancer",
      result: "Positive",
      remark: "Non-narcotic analgesics/National medicine",
    },
    {
      year: "2015",
      country: "USA",
      phase: "Clinical Trials",
      disease: "Lung Cancer",
      result: "Positive",
      remark: "-",
    },
    {
      year: "2019",
      country: "USA",
      phase: "Clinical Trials I~II",
      disease: "14 Glioblastomas",
      result: "-",
      remark: "US FDA Clinical Trial Approval",
    },
    {
      year: "2020",
      country: "Taiwan",
      phase: "Clinical Trials",
      disease: "Brain metastasis lung cancer",
      result: "-",
      remark: "US FDA Clinical Trial Approval",
    },
    {
      year: "2021",
      country: "USA",
      phase: "Clinical Trials I~II",
      disease: "14 Glioblastomas",
      result: "-",
      remark: "US FDA Clinical Trial Approval",
    },
  ],
  [Lang.KOR]: [
    {
      year: "2001",
      country: "독일",
      phase: "시험관",
      disease: "전립선",
      result: "Positive",
      remark: "독성 테스트 등",
    },
    {
      year: "2002",
      country: "독일",
      phase: "전임상",
      disease: "전립선",
      result: "Positive",
      remark: "레파톡스",
    },
    {
      year: "2004",
      country: "독일",
      phase: "임상~시상",
      disease: "전립선/췌장암",
      result: "Positive",
      remark: "레파톡스",
    },
    {
      year: "2006",
      country: "미국",
      phase: "시험관",
      disease: "폐암",
      result: "Positive",
      remark: "메릴랜드 그린바움센터",
    },
    {
      year: "2011",
      country: "한국",
      phase: "전임상~임상시험",
      disease: "전립선/폐/육종/희귀질환",
      result: "Positive",
      remark: "응급의약품긴급사용 승인",
    },
    {
      year: "2011",
      country: "한국",
      phase: "전임상~임상시험",
      disease: "뇌종양/백혈병/간암",
      result: "Positive",
      remark: "서울대병원/삼성의료원/아산병원 연세세브란스/한양대학교 구리병원",
    },
    {
      year: "2012",
      country: "호주/뉴질랜드",
      phase: "전임상~임상시험",
      disease: "비소세포폐암",
      result: "Positive",
      remark: "비마약성진통제/국민의약품",
    },
    {
      year: "2015",
      country: "미국",
      phase: "~임상시험",
      disease: "폐암",
      result: "Positive",
      remark: "-",
    },
    {
      year: "2019",
      country: "미국",
      phase: "임상~시상",
      disease: "14개 교모세포종",
      result: "-",
      remark: "미국 FDA 임상 시험 승인",
    },
    {
      year: "2020",
      country: "대만",
      phase: "임상시험",
      disease: "뇌전이 폐암",
      result: "-",
      remark: "미국 FDA 임상 시험 승인",
    },
    {
      year: "2021",
      country: "미국",
      phase: "임상~시상",
      disease: "14개 교모세포종",
      result: "-",
      remark: "미국 FDA 임상 시험 승인",
    },
  ],
};

export const RELATED_TRIALS_HEADER: Record<Lang, string[]> = {
  [Lang.ENG]: ["Title", "Publication Data", "Journal"],
  [Lang.KOR]: ["논문명", "발행", "학술지"],
};

export const RELATED_TRIALS_TABLE: Record<Lang, Record<string, string>[]> = {
  [Lang.KOR]: [
    {
      title:
        "The Telomere Targeting Agent sodium metaarsenite Can Eradicate The Side Population Of Hormone",
      publishDate: "2011.04",
      journal: "미국 암 학회",
    },
    {
      title:
        "In vitro and in vivo effect of sodium metaarsenite in non-Hodgkin’s lymphoma",
      publishDate: "2012.12",
      journal: "미국 혈액 학회",
    },
    {
      title:
        "Phase I and Pharmacokinetic Trial of the Antitelomerase Agent and Cisplatin (CDDP) in Advanced Solid Tumors",
      publishDate: "2013.05",
      journal: "미국 암 학회",
    },
    {
      title: "Clinical Cancer Research",
      publishDate: "2008.07",
      journal: "국내 학술지",
    },
    {
      title:
        "Differential Cytotoxic Effects of Sodium Meta-arsenite on Human Cancer Cells...",
      publishDate: "2011.12",
      journal: "국내 학술지",
    },
    {
      title:
        "Telomere and Microtubule Targeting in Treatment-Sensitive and Treatment-Resistant Human Prostate Cancer Cells",
      publishDate: "2012.08",
      journal: "국내 학술지",
    },
    {
      title:
        "Displays Vascular Disrupting Properties and Irinotecan Combined Antitumor Activities in a Murine Tumor Model",
      publishDate: "2013.11",
      journal: "국내 학술지",
    },
    {
      title:
        "Sodium meta-arsenite induces reactive oxygen species-dependent apoptosis...",
      publishDate: "2014.01",
      journal: "국내 학술지",
    },
  ],
  [Lang.ENG]: [
    {
      title:
        "The Telomere Targeting Agent sodium metaarsenite Can Eradicate The Side Population Of Hormone",
      publishDate: "2011.04",
      journal: "American Cancer Society",
    },
    {
      title:
        "In vitro and in vivo effect of sodium metaarsenite in non-Hodgkin’s lymphoma",
      publishDate: "2012.12",
      journal: "American Society of Hematology",
    },
    {
      title:
        "Phase I and Pharmacokinetic Trial of the Antitelomerase Agent and Cisplatin (CDDP) in Advanced Solid Tumors",
      publishDate: "2013.05",
      journal: "American Cancer Society",
    },
    {
      title: "Clinical Cancer Research",
      publishDate: "2008.07",
      journal: "Domestic Journal",
    },
    {
      title:
        "Differential Cytotoxic Effects of Sodium Meta-arsenite on Human Cancer Cells...",
      publishDate: "2011.12",
      journal: "Domestic Journal",
    },
    {
      title:
        "Telomere and Microtubule Targeting in Treatment-Sensitive and Treatment-Resistant Human Prostate Cancer Cells",
      publishDate: "2012.08",
      journal: "Domestic Journal",
    },
    {
      title:
        "Displays Vascular Disrupting Properties and Irinotecan Combined Antitumor Activities in a Murine Tumor Model",
      publishDate: "2013.11",
      journal: "Domestic Journal",
    },
    {
      title:
        "Sodium meta-arsenite induces reactive oxygen species-dependent apoptosis...",
      publishDate: "2014.01",
      journal: "Domestic Journal",
    },
  ],
};

export const CLINICAL_TRIALS_RESULT: Record<Lang, any> = {
  [Lang.ENG]: {
    title1: "Treatment of Prostate and Cervical Cancer Cell Lines",
    descs1: ["Over time, the telomere length gradually shortens."],
    title2: "Inhibition of Cancer Cell Metastasis",
    descs2: [
      "In normal cells, telomeres maintain and preserve chromosomes, but cancer cells use telomerase for unlimited division.",
      "The treatment of the substance shortens telomere length and fuses chromosome ends, inhibiting the division and metastasis of unstable cancer cells.",
    ],
    title3: "Results of Tests on the Death of Over 200 Cancer Cells",
    title4: "Results of Toxicity Limitation Tests",
    title5: "Results of Phase 1 Clinical Trials for Prostate Cancer",
    title6: "Results of Clinical Trials for Metastatic Lung Cancer",
  },
  [Lang.KOR]: {
    title1: "전립선암, 자궁암의 세포주에 처리",
    descs1: ["전립선암, 자궁암의 세포주에 처리"],
    title2: "암세포의 전이 억제 결과",
    descs2: [
      "정상 세포에서 텔로미어의 역할은 염색체의 보전과 유지이나, 암세포는 텔로머라제를 이용해 무한분열을 함.",
      "물질의 처리는 텔로미어 길이 단축과 염색체 말단을 융합시켜, 불안정해진 암세포의 분열과 전이를 억제시킴",
    ],
    title3: "200여개 암세포 사멸 시험 결과",
    title4: "독성 제한 시험 결과",
    title5: "전립선 암 1상 시험 결과",
    title6: "전이 폐암 임상 시험 결과",
  },
};

export const FACILITY_SECTION = {
  [Lang.KOR]: {
    title: "의료시설 확장 및 협업",
    sectionTitles: ["캄보디아", "청우한방병원"],
    subTitles: [
      <>
        <span>Memorandum of Understanding</span>{" "}
        <span style={{ whiteSpace: "nowrap" }}>(캄보디아 병원 – APEXELL)</span>
      </>,
      "제암단, 해당단",
    ],
    descs1: [
      <>
        <strong>정식명칭 :</strong> Techo Santepheap National Hospital
      </>,
      <>
        <strong>위치 :</strong> JRC6+JR Win Blvd, Phnom Penh 12000, Cambodia
      </>,
      <>
        <strong>대표자 :</strong> Sourn Samith, MD
      </>,
      <>
        <strong>규모 :</strong> 현재 약 2,000 베드 내외, (향후 10,000 베드로
        확장 예정)
      </>,
    ],
    desc2: (
      <>
        <strong>청우 암센터는</strong>
        <p>다년간의 임상경험을 바탕으로</p>
        <p>개인 체질별 한의치료와 현대의학의</p>
        <p>면역치료를 통합하여 건강한 몸을 회복하고</p>
        <p>삶의 질 향상을 목표로 하고 있습니다.</p>
      </>
    ),

    desc3: (
      <>
        <li>과거 세포실험결과 180여개 암 종에 대한 반응성을 가짐</li>
        <li>구강 투여가 가능한 약제로 인체 흡수 및 세포 반응 후 체외로 배출</li>
        <li>생체 흡수율 94.5% 이상</li>
        <li>물 용해도 98% 이상</li>
        <li>별도의 부작용 없음(임상시험)</li>
        <li>염증반응에 효과적</li>
        <li>유전자성, 세포성 질병에 효과적</li>
      </>
    ),
    button: "바로가기",
  },
  [Lang.ENG]: {
    title: "Expansion and Collaboration of Medical Facilities",
    sectionTitles: ["Cambodia", "Cheongwoo Oriental Medicine Hospital"],
    subTitles: [
      <>
        <span>Memorandum of Understanding</span>{" "}
        <span style={{ whiteSpace: "nowrap" }}>
          (Cambodia Hospital– APEXELL)
        </span>
      </>,
      "Jeamdan, Haegeumdan",
    ],
    descs1: [
      <>
        <strong>Official Name :</strong> Techo Santepheap National Hospital
      </>,
      <>
        <strong>Location :</strong> JRC6+JR Win Blvd, Phnom Penh 12000, Cambodia
      </>,
      <>
        <strong>Representative :</strong> Sourn Samith, MD
      </>,
      <>
        <strong>Scale :</strong> Currently around 2,000 beds, with plans to
        expand to 10,000 beds in the futur
      </>,
    ],
    desc2: (
      <>
        <p>Cheongwoo Cancer Center aims to restore</p>
        <p>a healthy body and improve the quality of life</p>
        <p>by integrating personalized oriental medicine</p>
        <p>treatments based on individual constitutions</p>
        <p>with modern medical immunotherapy,</p>
        <p>leveraging years of clinical experience.</p>
      </>
    ),

    desc3: (
      <>
        <li>
          Past cell experiments have shown responsiveness to over 180 types of
          cancer.
        </li>
        <li>
          It is an orally administrable drug that is absorbed by the body,
          reacts with cells, and is then excreted.
        </li>
        <li>Bioavailability is over 94.5%.</li>
        <li>Water solubility is over 98%.</li>
        <li>No specific side effects (clinical trials).</li>
        <li>Effective against inflammatory responses.</li>
        <li>Effective against genetic and cellular diseases.</li>
      </>
    ),
    button: "MORE",
  },
};
