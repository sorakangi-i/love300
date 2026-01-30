import { useEffect, useState } from "react";

const useScrollProgress = (ref: React.RefObject<HTMLElement>) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) {
        setProgress(0); // 완전히 보이지 않으면 progress 초기화
        return;
      }

      const element = ref.current;
      const { height, bottom, top } = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const rootMargin = windowHeight - height - top / 3;

      const visibleHeight = Math.min(bottom, rootMargin) - Math.max(top, 0);

      const scrollProgress = Math.max(0, Math.min(1, visibleHeight / height));

      setProgress(scrollProgress);
    };

    document.addEventListener("scroll", handleScroll);
    handleScroll(); // 초기 실행

    return () => document.removeEventListener("scroll", handleScroll);
  }, [ref]);

  return progress;
};

export default useScrollProgress;
