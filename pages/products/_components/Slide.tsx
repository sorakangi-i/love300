"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

import { useCallback } from "react";
import styled from "styled-components";

const Slide = ({ urls }: { urls: string[] }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section>
      <CarouselWrapper>
        <EmblaRef ref={emblaRef}>
          <EmblaContainer>
            {urls?.map((url, i) => (
              <EmblaSlide key={i}>
                <CarouselImage src={url} alt={url} />
              </EmblaSlide>
            ))}
          </EmblaContainer>
          <PrevButton onClick={scrollPrev}>
            <Image src="/love300/arrow-left.png" alt="slide prev image" />
          </PrevButton>
          <NextButton onClick={scrollNext}>
            <Image src="/love300/arrow-right.png" alt="slide next image" />
          </NextButton>
        </EmblaRef>
      </CarouselWrapper>
    </section>
  );
};

export default Slide;

const Image = styled.img``;

const PrevButton = styled.button`
  z-index: 99999;
  position: absolute;
  right: left 0;
  left: 0;
  top: 50%;
  transform: translateY(-50%);

  width: 32px;
  height: 32px;
  padding: 0;
  align-items: center;

  border-radius: 4px;
  background-color: #9e9e9e;
`;

const NextButton = styled.button`
  z-index: 99999;

  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);

  width: 32px;
  height: 32px;
  padding: 0;
  align-items: center;

  border-radius: 4px;
  background-color: #9e9e9e;
`;

const CarouselWrapper = styled.div`
  margin-block: 1.5rem 3rem;
`;

const EmblaRef = styled.div`
  overflow: hidden;

  position: relative;
`;

const EmblaContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 100%;
`;

const EmblaSlide = styled.div`
  height: 100%;
  position: relative;
`;

const CarouselImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 8px;
  position: relative;
  z-index: -1;
`;
