import React from "react";
import { showModal } from "@atoms/showModal";
import About from "@components/About";
import BusinessModel from "@components/BusinessModel";
import Contact from "@components/Contact";
import Introducing from "@components/Introducing";
import Modal from "@components/Modal";
import News, { OgData, OgPageProps } from "@components/News";
import Submit from "@components/Submit";
import axios from "axios";
import { useAtom } from "jotai";
import styled from "styled-components";
import * as cheerio from "cheerio";
import { GetStaticProps } from "next";
import Certifications from "@components/Certifications";

const Home: React.FC<OgPageProps> = ({ ogDataList }) => {
  const [isShowModal, setIsShowModal] = useAtom(showModal);

  const closeModal = () => setIsShowModal(null);

  return (
    <Main>
      <Modal show={isShowModal} onClose={closeModal}>
        <React.Component />
      </Modal>
      <Introducing />
      <Bundle>
        <Submit />
      </Bundle>
      <Bundle>
        <About />
      </Bundle>
      <Bundle id={"business-model"}>
        <BusinessModel />
      </Bundle>
      <Bundle id={"news"}>
        <News ogDataList={ogDataList} />
      </Bundle>
      {/* <Bundle>
        <Partners />
      </Bundle> */}
      <Bundle>
        <Certifications />
      </Bundle>
      <Bundle id={"contact"}>
        <Contact />
      </Bundle>
    </Main>
  );
};

const Main = styled.main``;

const Bundle = styled.div``;

// 서버 사이드에서 여러 URL의 Open Graph 데이터를 가져오는 함수
export const getStaticProps: GetStaticProps = async () => {
  const urls =
    (
      "https://www.wowtv.co.kr/NewsCenter/News/Read?articleId=A202404290177&t=NN,https://www.kpanews.co.kr/article/show.asp?idx=253088&category=B,https://www.wowtv.co.kr/NewsCenter/News/Read?articleId=A202310130201&t=NN,https://www.wowtv.co.kr/NewsCenter/News/Read?articleId=A202309150095&t=NN,https://www.wowtv.co.kr/NewsCenter/News/Read?articleId=A202210200251&t=NN,https://www.wowtv.co.kr/NewsCenter/News/Read?articleId=A202210110254&t=NN,https://www.wowtv.co.kr/NewsCenter/News/Read?articleId=A202401300152&t=NN,https://www.wowtv.co.kr/NewsCenter/News/Read?articleId=A202205100203&t=NN,https://www.wowtv.co.kr/NewsCenter/News/Read?articleId=A202212120169&t=NN,https://www.wowtv.co.kr/NewsCenter/News/Read?articleId=A202212130286&t=NN,https://www.wowtv.co.kr/NewsCenter/News/Read?articleId=A202306300232&t=NN,https://www.wowtv.co.kr/NewsCenter/News/Read?articleId=A202304100234&t=NN,https://www.wowtv.co.kr/NewsCenter/News/Read?articleId=A202211110317&t=NN,https://www.wowtv.co.kr/NewsCenter/News/Read?articleId=A202205260099&t=NN,https://www.wowtv.co.kr/NewsCenter/News/Read?articleId=A202209190285&t=NN,https://www.wowtv.co.kr/NewsCenter/News/Read?articleId=A202206120060&t=NN,https://www.wowtv.co.kr/NewsCenter/News/Read?articleId=A202212260032&t=NN,https://www.segye.com/newsView/20200305507744?OutUrl=naver,https://m.breaknews.com/1060734" as string
    )?.split(",") || []; // 쿼리로 전달된 URLs 배열

  if (urls.length === 0) {
    return { props: { ogDataList: [] } };
  }

  try {
    // 모든 URL에 대한 HTML 데이터를 병렬로 요청하되, 결과를 allSettled로 받음
    const results = await Promise.allSettled(
      urls.map(async (url) => {
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);

        // Open Graph 메타 태그 파싱
        const ogTitle = $('meta[property="og:title"]').attr("content");
        const ogDescription = $('meta[property="og:description"]').attr(
          "content"
        );
        const ogImage = $('meta[property="og:image"]').attr("content");

        return {
          url,
          title: ogTitle || "No title found",
          description: ogDescription || "No description found",
          image: ogImage || null,
        };
      })
    );

    // 성공한 결과만 필터링
    const ogDataList: OgData[] = results
      .filter((result) => result.status === "fulfilled") // 성공한 결과만 필터링
      .map((result) => (result as PromiseFulfilledResult<OgData>).value); // value 추출

    return {
      props: {
        ogDataList,
      },
      revalidate: 60 * 60 * 24, // 24시간마다 다시 빌드
    };
  } catch (error) {
    console.error("Error fetching OG data:", error);
    return { props: { ogDataList: [] } };
  }
};

export default Home;
