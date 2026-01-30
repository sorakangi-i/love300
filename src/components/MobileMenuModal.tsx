import { getMediaQueryCSS } from "@common/util";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { LeftPart, Logo, Menu, RightPart } from "./Layout";

interface ModalProps {
  open: boolean;
  onClose: () => void;
}

// const ModalBackground = styled.div<{ $open: boolean }>`
//   position: fixed;
//   top: 0;
//   right: 0;
//   width: 100%;
//   height: 100%;
//   background: rgba(0, 0, 0, 0.5);
//   display: ${({ $open }) => ($open ? "block" : "none")};
//   z-index: 999;
// `;

const ModalContent = styled.div<{ $open: boolean }>`
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;

  background: #fff;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  transform: ${({ $open }) => ($open ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease-in-out;
  padding-inline: 20px;

  ${getMediaQueryCSS(`
    display: block
    
  `)}
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px 0 0;

  li {
    font-family: "Pretendard-Regular";
    font-size: 20px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: -0.02em;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;

    padding-block: 20px;
    font-size: 1.2rem;
    cursor: pointer;
    border-bottom: 1px solid #eaeaea;

    &:last-of-type {
      border-bottom: none;
    }
  }
`;

const MobileMenuModal: React.FC<ModalProps> = ({ open, onClose }) => {
  return (
    <>
      {/* <ModalBackground $open={open} onClick={onClose} /> */}
      <ModalContent $open={open}>
        <Menu>
          <LeftPart>
            <Logo src={"/love300/symbol.png"} />
            <Logo src={"/love300/logo.png"} />
          </LeftPart>
          <RightPart>
            <Image
              src="/love300/close.png"
              alt="close image"
              onClick={onClose}
            />
          </RightPart>
        </Menu>
        {/* <CloseButton onClick={onClose}>&times;</CloseButton> */}
        <List>
          <li>
            <Link href="/">Buy Token</Link>
          </li>
          <li>
            <Link href="/">Business Model</Link>
          </li>
          <li>
            <Link href="/">News</Link>
          </li>
          <li>
            <Link href="/">Contact</Link>
          </li>
          <li>
            <Link href="/products/apexell">Products</Link>
          </li>
        </List>
      </ModalContent>
    </>
  );
};

export default MobileMenuModal;

const Image = styled.img`
  cursor: pointer;
`;
