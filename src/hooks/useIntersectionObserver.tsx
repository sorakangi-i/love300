import {
  useEffect,
  RefObject,
  useRef,
  useCallback,
  useMemo,
  useState,
} from "react";

declare const window: Window;

export interface UseIntersectionObserverEntry
  extends IntersectionObserverEntry {
  isLock: boolean;
  observe: () => void;
  unObserve: () => void;
  lockScroll: () => void;
  unlockScroll: () => void;
}

interface IntersectionObserverOptions extends IntersectionObserverInit {
  freezeOnceVisible?: boolean; // 한 번 감지되면 observer를 해제하는 옵션
  scrollLock?: boolean; // 현재 뷰포트에서 고정
  enableScrollAdjust?: boolean;
  scrollOffset?: number; // 스크롤 조정 시 뷰포트와의 거리

  onIntersect?: (entry: UseIntersectionObserverEntry) => void;
  onBeforeEnter?: (entry: UseIntersectionObserverEntry) => void; // 뷰포트에 들어오기 직전
}

export default function useIntersectionObserver<T extends HTMLElement>(
  ref: RefObject<T>,
  options: IntersectionObserverOptions = {}
) {
  const {
    threshold = 1,
    root = null,
    rootMargin = "0px",
    freezeOnceVisible = false,
    scrollLock = false,
    enableScrollAdjust = false,
    scrollOffset = 0,

    onIntersect,
    onBeforeEnter,
  } = options;

  const observerRef = useRef<IntersectionObserver | null>(null);
  const isPaused = useRef(false); // ✅ 감지 중지 상태 확인
  const scrollLockRef = useRef(scrollLock);

  const unObserve = useCallback(() => {
    if (ref.current && observerRef.current) {
      observerRef.current.unobserve(ref.current);
      isPaused.current = true;
    }
  }, [ref]);

  const observe = useCallback(() => {
    if (ref.current && observerRef.current) {
      observerRef.current.observe(ref.current);
      isPaused.current = false;
    }
  }, [ref]);

  const lockScroll = useCallback(() => {
    if (ref.current && observerRef.current) {
      observerRef.current.observe(ref.current);
      scrollLockRef.current = true;
    }
  }, [ref]);

  const unlockScroll = useCallback(() => {
    if (ref.current && observerRef.current) {
      observerRef.current.observe(ref.current);
      scrollLockRef.current = false;
    }
  }, [ref]);

  useEffect(() => {
    if (!ref.current) return;

    observerRef.current = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!window) return;

          const customEntry: UseIntersectionObserverEntry = Object.assign(
            entry,
            {
              isLock: scrollLockRef.current,
              observe,
              unObserve,
              lockScroll,
              unlockScroll,
            }
          );

          const targetRect = entry.boundingClientRect;
          const viewportHeight = window.innerHeight;

          if (typeof threshold === "object") {
            threshold.forEach(
              (ratio) =>
                entry.intersectionRatio >= ratio && onBeforeEnter?.(customEntry)
            );
          } else {
            onBeforeEnter?.(customEntry);
          }

          if (isPaused.current) return;
          const intersectedThreshold =
            typeof threshold === "object"
              ? threshold[threshold.length - 1]
              : threshold;

          if (entry.intersectionRatio >= intersectedThreshold) {
            onIntersect?.(customEntry);

            if (scrollLockRef.current) {
              const deltaY = entry.boundingClientRect.y;
              if (deltaY > 0) {
                window.scrollTo({ top: window.scrollY, behavior: "auto" });
              } else if (deltaY < 0) {
                window.scrollTo({
                  top: window.scrollY + entry.boundingClientRect.height,
                  behavior: "auto",
                });
              }
            } else if (enableScrollAdjust) {
              const isApproachingViewport =
                targetRect.top < viewportHeight - scrollOffset;
              if (isApproachingViewport) {
                window.scrollTo({
                  top:
                    window.scrollY +
                    targetRect.top -
                    (viewportHeight - scrollOffset),
                  behavior: "smooth",
                });
              }
            }

            if (freezeOnceVisible) {
              observer.disconnect();
            }
          }
        });
      },
      {
        root,
        rootMargin,
        threshold,
      }
    );

    observerRef.current.observe(ref.current);

    return () => observerRef.current?.disconnect();
  }, [ref, threshold, root, rootMargin, freezeOnceVisible]);

  return {
    ...observerRef.current,
    isLock: scrollLockRef.current,
    unObserve,
    observe,
    lockScroll,
    unlockScroll,
  };
}
