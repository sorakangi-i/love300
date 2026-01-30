import { useEffect, useRef, useState } from 'react';

interface VisibilityResult<T extends HTMLElement> {
    ref: React.RefObject<T>;
    isFullyVisible: boolean;
}

export function useVisibility<T extends HTMLElement>(): VisibilityResult<T> {
    const [isFullyVisible, setIsFullyVisible] = useState<boolean>(false);
    const ref = useRef<T>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsFullyVisible(entry.intersectionRatio === 1);
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 1.0,  // 100% of the element is visible
            }
        );

        const element = ref.current;
        if (element) {
            observer.observe(element);

            return () => {
                observer.unobserve(element);
            };
        }
    }, [ref]);

    return { ref, isFullyVisible };
}