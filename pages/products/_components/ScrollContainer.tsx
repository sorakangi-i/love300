import { ReactNode } from "react";
import styled from "styled-components";

const ScrollContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Container>
      <Wrapper>{children}</Wrapper>
      <Label>&lt;&lt; Scroll &gt;&gt;</Label>
    </Container>
  );
};

export default ScrollContainer;

export const Container = styled.div`
  position: relative;
  width: 100%;

  overflow: hidden;
  padding-bottom: 8px;

  /* Custom Scrollbar */
`;

export const Wrapper = styled.div`
  position: relative;
  width: 100%;

  overflow-x: scroll;
  overflow-y: visible;
  padding-bottom: 26px;

  border-top: 3px solid #000000;

  /* Custom Scrollbar */
`;

const Label = styled.div`
  position: absolute;

  font-size: 14px;
  font-weight: 700;
  line-height: 16.8px;
  letter-spacing: -0.02em;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;

  color: #9e9e9e;
  background-color: #ffffff;
  left: 0;
  /* left: calc(30.65% + 32px); */
  bottom: 0;
`;
