import { useEffect, useState } from 'react';

export function useMediaQuery(query: string): boolean {
    const [matches, setMatches] = useState<boolean>(false);

    useEffect(() => {
        const getMatches = (query: string): boolean => {
            // Prevents SSR issues
            if (typeof window !== 'undefined') {
                return window.matchMedia(query).matches;
            }
            return false;
        };

        const handleChange = () => {
            setMatches(getMatches(query));
        };

        const matchMedia = window.matchMedia(query);

        // Set initial state
        setMatches(getMatches(query));

        // Add event listener
        matchMedia.addEventListener('change', handleChange);

        // Clean up event listener
        return () => {
            matchMedia.removeEventListener('change', handleChange);
        };
    }, [query]);

    return matches;
}