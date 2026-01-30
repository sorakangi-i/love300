import { useMediaQuery } from "./UseMediaQuery";

export default function useDeviceSize() {
    const isDesktop = useMediaQuery("(min-width: 1025px)");
    // const isTablet = useMediaQuery("(min-width:768px) and (max-width:1023px)");
    const isMobile = useMediaQuery("(max-width:1024px)");

    return { isDesktop, isMobile };
}