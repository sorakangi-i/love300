// components/Modal.tsx
import React, { ReactNode, useEffect } from "react";
import styled from "styled-components";
import { Lang } from "../../pages/_app";

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20;
`;

const ModalContent = styled.div`
  background: white;
  padding: 0 0 20px;
  border-radius: 5px;
  width: 100vw;
  max-width: 100%;
  height: 90vh;
  position: relative;
  overflow: auto;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 3rem;

  cursor: pointer;
`;

const DownloadButton = styled(CloseButton)`
  font-size: 2rem;
  display: flex;
  justify-content: center;
`;

interface ModalProps {
  show: Lang | null;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ show, onClose, children }) => {
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [show]);

  if (!show) return null;
  return (
    <ModalBackground onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <form
            method="get"
            action={`/One-Q Whitepaper ver. 1 ${show.toUpperCase()}.pdf`}
          >
            <DownloadButton>
              <DownloadImg
                src={"/love300/Icon_download.png"}
                alt={"download button"}
              />
            </DownloadButton>
          </form>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </ModalHeader>

        {children}
        {[
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        ].map((imgIndex) => (
          <Img
            key={imgIndex}
            src={`/whitepaper/one-q_whitepaper_ver.1_${show}_${imgIndex}.jpg`}
            alt={"whitepaper image"}
          />
        ))}
      </ModalContent>
    </ModalBackground>
  );
};

export default Modal;

const ModalHeader = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: right;
  width: 100%;
  padding: 0 20px;
  background-color: white;
  border-radius: 5px;
`;

const Img = styled.img`
  width: 100%;
`;

const DownloadImg = styled.img`
  padding: 0.4rem 0 0;
  width: 1.8rem;
`;
