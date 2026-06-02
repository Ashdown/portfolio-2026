'use client';

import { useEffect, useRef } from 'react';
import styles from './ContentContainer.module.css';

export default function ContentContainer({ children }: { children: React.ReactNode }) {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateHeight = () => {
      if (bgRef.current) {
        const maxScroll = document.body.scrollHeight - window.innerHeight;
        bgRef.current.style.height = `${window.innerHeight + maxScroll * 0.5}px`;
      }
    };

    const handleScroll = () => {
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(-${window.scrollY * 0.5}px)`;
      }
    };

    const observer = new ResizeObserver(updateHeight);
    observer.observe(document.body);
    updateHeight();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.contentContainer}>
      <div ref={bgRef} className={styles.background} />
      {children}
    </div>
  );
}
