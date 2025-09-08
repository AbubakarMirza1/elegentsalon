import { useRef, useEffect, useState } from 'react';

const useElementorMotion = <T extends HTMLElement>(settings: any) => {
  const elementRef = useRef<T>(null);
  const [transformStyle, setTransformStyle] = useState({});

  useEffect(() => {
    if (!settings || settings.motion_fx_motion_fx_scrolling !== 'yes') {
      return;
    }

    const handleScroll = () => {
      if (!elementRef.current) return;

      const rect = elementRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // --- Progress calculation ---
      const affectedStart = parseFloat(settings.motion_fx_translateY_affectedRange?.sizes?.start || 0) / 100;
      const affectedEnd = parseFloat(settings.motion_fx_translateY_affectedRange?.sizes?.end || 100) / 100;

      const elementTop = rect.top;
      const elementHeight = rect.height;

      let progress = 0;
      if (elementTop < viewportHeight && elementTop + elementHeight > 0) {
        const scrollFraction = (viewportHeight - elementTop) / (viewportHeight + elementHeight);
        progress = Math.max(0, Math.min(1, (scrollFraction - affectedStart) / (affectedEnd - affectedStart)));
      }

      // --- TranslateY ---
      let translateY = 0;
      if (settings.motion_fx_translateY_effect === 'yes') {
        const speed = parseFloat(settings.motion_fx_translateY_speed?.size || 1);
        const direction = settings.motion_fx_translateY_direction === 'negative' ? -1 : 1;
        translateY = -window.scrollY * speed * 0.1 * direction * progress;
      }

      // --- Scale ---
      let scale = 1;
      if (settings.motion_fx_scale_effect === 'yes') {
        const scaleSpeed = parseFloat(settings.motion_fx_scale_speed?.size || 1);
        const rangeStart = parseFloat(settings.motion_fx_scale_range?.sizes?.start || 0) / 100;
        const rangeEnd = parseFloat(settings.motion_fx_scale_range?.sizes?.end || 100) / 100;
        const direction = settings.motion_fx_scale_direction;

        scale = 1 + ((rangeEnd - rangeStart) * progress * scaleSpeed);
        if (direction === 'out-in') {
          scale = 1 - (0.05 * (1 - progress));
        }
      }

      setTransformStyle({
        transform: `translateY(${translateY}px) scale(${scale})`,
        transition: 'transform 100ms ease-out',
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [settings]);

  // Apply transformStyle inline to the element
  return {
    ref: elementRef,
    style: transformStyle,
  };
};

export default useElementorMotion;
