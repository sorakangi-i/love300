"use client";

import {
  useRef,
  useMemo,
  Children,
  ReactElement,
  HTMLAttributes,
  forwardRef,
} from "react";
import styled from "styled-components";

import useIntersectionObserver from "@hooks/useIntersectionObserver";

interface Props extends HTMLAttributes<HTMLElement> {}

interface ItemProps extends HTMLAttributes<HTMLElement> {
  transform?: string;
}

const Item = forwardRef<HTMLElement, ItemProps>(
  ({ children, transform, ...props }, ref) => {
    return (
      <StyledSection ref={ref} $transform={transform} {...props}>
        {children}
      </StyledSection>
    );
  }
);

Item.displayName = "ScaleSlide.Item";

const ScaleSlide = ({ children, ...props }: Props) => {
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
    onIntersect: (observer) => {
      const handleScroll = () => {
        const container = observer.target as HTMLElement;
        const sections = sectionsRef.current;

        if (!container) return;

        const { top, height } = container.getBoundingClientRect();

        const isOut = top > 0;

        const sectionHeight = height / sections.length;

        // console.log(top / sectionHeight);
        const maxSnap = sections.length;
        const currentSnap = Math.min(
          maxSnap,
          Math.abs(Math.floor(top / sectionHeight))
        );

        // console.log(maxSnap, Math.abs(Math.floor(top / sectionHeight)));
        // console.log(currentSnap);

        const currentSection = sections[currentSnap];
        const lastSection = sections[maxSnap - 1];
        const firstSectionChild = sections[0].firstElementChild
          ?.firstElementChild as HTMLElement;

        if (isOut) document.removeEventListener("scroll", handleScroll);

        if (currentSnap === 0) {
          lastSection.style.opacity = "0";

          sections.forEach((section, index) => {
            if (index === 0) return;
            section.style.removeProperty("transform");
            // section.classList.remove("isFixed");
          });
          return;
        }

        if (currentSection) {
          const scrollTop = top + sectionHeight * (currentSnap - 1);
          const per = Math.abs((scrollTop / sectionHeight) * 100);

          if (firstSectionChild) {
            if (currentSnap === 1) {
              firstSectionChild.style.borderRadius = "16px";

              if (per > 45) {
                firstSectionChild.style.width = `${per}vw`;
                firstSectionChild.style.height = `${per}vh`;
              }
            } else if (currentSnap > 1) {
              firstSectionChild.style.width = `100vw`;
              firstSectionChild.style.height = `100vh`;
              firstSectionChild.style.borderRadius = "0";
            }
          }

          if (currentSnap === 2) {
            lastSection.style.position = "fixed";
            lastSection.style.opacity = `${per / 100}`;
          }
        } else {
          lastSection.style.position = "sticky";
          lastSection.style.transform = `translateY(0)`;
          lastSection.style.opacity = "1";

          if (Math.abs(top) >= sectionHeight) {
            sections.forEach((section, index) => {
              if (index === 0) return;
              // section.style.transform = `translateX(0px)`;
              section.classList.remove("isFixed");
            });
            document.removeEventListener("scroll", handleScroll);
          }
        }
      };

      document.addEventListener("scroll", handleScroll);

      return () => {
        document.removeEventListener("scroll", handleScroll);
      };
    },
  });

  if (hasNonItemComponent)
    throw "ScaleSlide child should be Item in ScaleSlide";

  return (
    <ScrollContainer
      {...props}
      $count={childrenArray.length}
      ref={containerRef}
    >
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

ScaleSlide.Item = Item;

export default ScaleSlide;

const ScrollContainer = styled.div<{ $count: number }>`
  position: relative;
  width: 100vw;
  height: ${({ $count }) => $count * 100}vh;
`;

const StyledSection = styled.section<{ $transform?: string }>`
  position: -webkit-sticky;
  position: sticky;
  height: 100vh;
  width: 100vw;

  top: 0;
  left: 0;

  &:not(:first-child) {
    transform: translateY(-100vh);
  }

  &:last-child {
    opacity: 0;
    transform: unset;
  }

  &.isFixed {
    position: fixed;
  }
`;
