"use client";

import {
  useRef,
  useMemo,
  ReactNode,
  Children,
  ReactElement,
  HTMLAttributes,
  forwardRef,
} from "react";
import styled from "styled-components";

import useIntersectionObserver from "@hooks/useIntersectionObserver";

interface Props {
  children: ReactNode;
}

const Item = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
  ({ children, ...props }, ref) => {
    return (
      <StyledSection ref={ref} {...props}>
        {children}
      </StyledSection>
    );
  }
);

Item.displayName = "OverlaySlide.Item";

const OverlaySlide = ({ children }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLElement[]>([]);

  const childrenArray = useMemo(
    () =>
      Children.toArray(children) as unknown as ReactElement<
        Parameters<typeof Item>[0]
      >[],
    []
  );

  const hasNonItemComponent = useMemo(
    () => childrenArray.some((element) => element.type !== Item),
    [childrenArray]
  );

  useIntersectionObserver(containerRef, {
    threshold: 1 / childrenArray.length,
    onBeforeEnter: (observer) => {
      if (observer.intersectionRatio < 0.2) {
      }
    },
    onIntersect: (observer) => {
      const container = observer?.target as HTMLElement;
      const sections = sectionsRef.current;

      if (!container) return;

      const handleScroll = () => {
        const { top, height } = container.getBoundingClientRect();
        const isOut = top > 0;

        const sectionHeight = height / sections.length;

        const maxSnap = sections.length;
        const currentSnap = Math.min(
          maxSnap,
          Math.abs(Math.floor(top / sectionHeight))
        );

        const currentSection = sections[currentSnap];

        if (isOut) document.removeEventListener("scroll", handleScroll);

        console.log(currentSnap);
        if (currentSnap === 0) {
          console.log(123123);
          sections.forEach((section, index) => {
            if (index === 0) return;
            section.style.removeProperty("transform");
            section.classList.remove("isFixed");
          });
          return;
        }

        if (currentSection) {
          if (currentSnap > 1) {
            sections[currentSnap - 1].style.transform = `translateX(0px)`;
          }

          const scrollTop = top + sectionHeight * (currentSnap - 1);

          currentSection.classList.add("isFixed");
          currentSection.style.transform = `translateX(-${
            sectionHeight + scrollTop
          }px)`;
        } else {
          if (Math.abs(top) >= sectionHeight) {
            sections.forEach((section, index) => {
              if (!section) return;
              if (index === 0) return;
              section.style.transform = `translateX(0px)`;
              section.classList.remove("isFixed");
            });
          }

          document.removeEventListener("scroll", handleScroll);
        }
      };

      document.addEventListener("scroll", handleScroll);

      return () => {
        document.removeEventListener("scroll", handleScroll);
      };
    },
  });

  if (hasNonItemComponent)
    throw "OverlaySlide child should be Item in OverlaySlide";

  return (
    <ScrollContainer $count={childrenArray.length} ref={containerRef}>
      {childrenArray.map((child, index) => (
        <Item
          {...child.props}
          key={index}
          ref={(element) => {
            sectionsRef.current[index] = element!;
            // 여기도 reverse에 따라 index 바꿔야함
          }}
          style={{
            zIndex: index,
          }}
        />
      ))}
    </ScrollContainer>
  );
};

OverlaySlide.Item = Item;

export default OverlaySlide;

const ScrollContainer = styled.div<{ $count: number }>`
  width: 100vw;
  height: ${({ $count }) => $count * 100}vh;
`;

const StyledSection = styled.section`
  position: -webkit-sticky;
  position: sticky;
  height: 100vh;
  width: 100vw;

  top: 0;
  left: 0;

  &:not(:first-child) {
    transform: translateX(-100vw);
  }

  &.isFixed {
    position: fixed;
  }
`;
