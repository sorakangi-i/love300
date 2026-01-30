import { useState, useEffect, RefObject } from 'react';

function useOnScreen<T extends Element>(ref: RefObject<T>, rootMargin: string = '0px'): boolean {
    // State to keep track of whether element is visible
    const [isIntersecting, setIntersecting] = useState<boolean>(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Update state when observer callback fires
                setIntersecting(entry.isIntersecting);
            },
            {
                rootMargin,
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref, rootMargin]); // Only re-run the effect if ref or rootMargin changes

    return isIntersecting;
}

export default useOnScreen;