import { useEffect, useRef, useState } from 'react';

interface VisibilityResult<T extends HTMLElement> {
    ref: React.RefObject<T>;
    isVisible: boolean;
}

export function useVisibilityAndHover<T extends HTMLElement>(): VisibilityResult<T> {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const ref = useRef<T>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            {
                root: null,
                rootMargin: '300px', // 길게하면 깜빡거리는 현상 사라짐
                threshold: 0.01, // Element should be fully in view
            }
        );

        const element = ref.current;
        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [ref]);

    return { ref, isVisible };
}