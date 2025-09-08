import React, { useRef, useEffect, useState } from 'react';
import './ThirdSection.css';

const ThirdSection: React.FC = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  const [transformStyle, setTransformStyle] = useState({});

  // --- Elementor Motion Effects Placeholder ---
  // To fully replicate Elementor's motion effects, you would need
  // to implement a custom hook or component that handles scroll-based
  // transformations. This involves:
  // 1. Tracking scroll position.
  // 2. Getting the element's position relative to the viewport.
  // 3. Calculating the translateY and scale based on Elementor's 'data-settings'.
  //
  // Example data-settings for this image:
  // "motion_fx_motion_fx_scrolling":"yes"
  // "motion_fx_translateY_effect":"yes", "motion_fx_translateY_speed":1.5, "motion_fx_translateY_affectedRange":{"start":0,"end":50}
  // "motion_fx_scale_effect":"yes", "motion_fx_scale_speed":1, "motion_fx_scale_range":{"start":20,"end":50}, "motion_fx_scale_direction":"out-in"
  //
  // For now, the 'style' attribute from WordPress (transform: translateY(var(--translateY))scale(var(--scale));)
  // is hardcoded, but this will *not* provide the dynamic scrolling effect.
  // A dedicated React animation library (like react-scroll-parallax or custom hook) is recommended here.

  useEffect(() => {
    // This is a simplified example. For full Elementor motion effects,
    // you'd need a more robust scroll-parallax implementation.
    const handleScroll = () => {
      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        // Calculate scroll progress within the affected range (0% to 50% of viewport)
        // Adjust these calculations based on actual Elementor logic.
        const scrollProgress = Math.max(0, Math.min(1,
          (viewportHeight - rect.top) / (viewportHeight * 0.5) // Example for affectedRange 0-50%
        ));

        // translateY_speed: 1.5
        // Original style showed translateY: 75px, which is a starting offset.
        // Let's assume the effect pushes it down as you scroll, or starts down and moves up.
        // This is a guess; actual Elementor logic needs inspection.
        const translateY = 75 * (1 - scrollProgress); // Example: moves up from 75px offset

        // scale_speed: 1, scale_range: 20-50%, direction: out-in
        // This suggests it might scale down and then back up.
        // A simple scale: 1 (no scaling) for now.
        // To truly replicate, you'd need to map scrollProgress to the scale_range.
        const scale = 1; // Simplification, implement actual scale logic here

        setTransformStyle({
          transform: `translateY(${translateY}px) scale(${scale})`,
          transition: 'transform 100ms ease-out', // Elementor's transition duration
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Set initial position

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <section className="elementor-section elementor-top-section elementor-element elementor-element-3f6971e elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="3f6971e" data-element_type="section">
      <div className="elementor-container elementor-column-gap-no">
        <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-9d0a32e" data-id="9d0a32e" data-element_type="column">
          <div className="elementor-widget-wrap elementor-element-populated elementor-motion-effects-parent">
            {/* Image Widget with Motion Effects */}
            <div
              ref={imageRef}
              className="vamtam-has-theme-widget-styles elementor-element elementor-element-12f6836 elementor-widget elementor-widget-image elementor-motion-effects-element"
              data-id="12f6836"
              data-element_type="widget"
              data-widget_type="image.default"
              style={transformStyle} // Apply dynamic transform style
              // The data-settings attribute is for Elementor's JS, not directly used by React CSS
              // but kept here for reference if you implement a custom hook.
              data-settings='{"motion_fx_motion_fx_scrolling":"yes","motion_fx_translateY_effect":"yes","motion_fx_translateY_speed":{"unit":"px","size":1.5,"sizes":[]},"motion_fx_translateY_affectedRange":{"unit":"%,"size":"","sizes":{"start":0,"end":50}},"motion_fx_scale_effect":"yes","motion_fx_scale_speed":{"unit":"px","size":1,"sizes":[]},"motion_fx_devices":["desktop"],"motion_fx_scale_range":{"unit":"%,"size":"","sizes":{"start":20,"end":50}},"motion_fx_scale_direction":"out-in"}'
            >
              <div className="elementor-image">
                <img
                  fetchPriority="high"
                  decoding="async"
                  width={1252}
                  height={1876}
                  src="https://essentialkirklandsalon.celsiussolutions.tech/wp-content/uploads/2023/01/GettyImages-1006812650.jpg"
                  className="attachment-full size-full wp-image-545"
                  alt="Hairstyle"
                  // srcset and sizes are for responsive images, can be handled by Next.js <Image> or left as is
                  // If using Next.js <Image>, you'd pass src, width, height, and alt, and it handles srcset/sizes
                  srcSet="https://essentialkirklandsalon.celsiussolutions.tech/wp-content/uploads/2023/01/GettyImages-1006812650.jpg 1252w, https://essentialkirklandsalon.celsiussolutions.tech/wp-content/uploads/2023/01/GettyImages-1006812650-320x480.jpg 320w, https://essentialkirklandsalon.celsiussolutions.tech/wp-content/uploads/2023/01/GettyImages-1006812650-640x959.jpg 640w, https://essentialkirklandsalon.celsiussolutions.tech/wp-content/uploads/2023/01/GettyImages-1006812650-200x300.jpg 200w, https://essentialkirklandsalon.celsiussolutions.tech/wp-content/uploads/2023/01/GettyImages-1006812650-683x1024.jpg 683w, https://essentialkirklandsalon.celsiussolutions.tech/wp-content/uploads/2023/01/GettyImages-1006812650-768x1151.jpg 768w, https://essentialkirklandsalon.celsiussolutions.tech/wp-content/uploads/2023/01/GettyImages-1006812650-1025x1536.jpg 1025w"
                  sizes="(max-width: 1252px) 100vw, 1252px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;