import { Colors, ScreenBoundary } from "@common/constant";
import styled from "styled-components";

/** 
 * view: 360px - 1920px 
 * font: 22px - 36px => 6.111vw - 1.875vw
 * line-height: 30px - 44px => 8.333vw - 2.291vw
 * */
const CommonTitle = styled.h3<{ $align?: "left" | "center" | "right" }>`
  color: ${Colors.White};
  font-size: 1.875vw;
  line-height: 2.291vw;
  text-align: ${({ $align }) => $align ?? ''};
  font-weight: 500;
  @media screen and (max-width: ${ScreenBoundary.Phone2PC}) {
    font-size: 6.111vw;
    line-height: 8.333vw;
  }
`;

/** 
 * view: 360px - 1920px 
 * font: 12px - 22px => 3.333vw - 1.145vw
 * line-height: 18px - 33px => 5vw - 1.718vw
 * */
const CommonComment = styled.p`
  color: ${Colors.White};
  font-size: 1.145vw;
  line-height: 1.718vw;
  font-weight: 300;
  text-shadow: 0px 3px 6px ${Colors.Black};
  transition: 1s;
  word-break: keep-all;
  @media screen and (max-width: ${ScreenBoundary.Phone2PC}) {
    font-size: 3.333vw;
    line-height: 5vw;
  }
  
`;



export { CommonTitle, CommonComment };