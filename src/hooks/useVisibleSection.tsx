// hooks/useVisibleSection.ts
import { useEffect, useCallback } from 'react';

type SectionName = 'Introduction' | 'About' | 'Website' | 'Contact';

export default function useVisibleSection(
    currentPage: string,
    setCurrentPage: (page: string) => void,
    sectionRefs: { [key: string]: React.RefObject<HTMLDivElement> }
) {
  const handleScroll = useCallback((entries: IntersectionObserverEntry[]) => {
    const visibleSections = entries.filter(entry => entry.isIntersecting);

    if (visibleSections.length > 0) {
      const mostVisibleSection = visibleSections.reduce((prev, current) => {
        return current.intersectionRatio > prev.intersectionRatio ? current : prev;
      });

      const sectionId = mostVisibleSection.target.id as SectionName;
      if (currentPage !== sectionId) {
        setCurrentPage(sectionId);
      }
    }
  }, [currentPage, setCurrentPage]);

  useEffect(() => {
    const observer = new IntersectionObserver(handleScroll, {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    });

    Object.values(sectionRefs).forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(sectionRefs).forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [handleScroll, sectionRefs]);
}
