import React, { useRef, useEffect, useState } from 'react';
import './FourthSection.css';
import useElementorMotion from '../../hooks/useElementorMotion';


// Reusable hook for Elementor-like scroll effects
// const useElementorMotion = <T extends HTMLElement>(settings: any) => {
//   const elementRef = useRef<T>(null);
//   const [transformStyle, setTransformStyle] = useState({});

//   useEffect(() => {
//     if (!settings || settings.motion_fx_motion_fx_scrolling !== 'yes') {
//       return; // No scrolling effect enabled
//     }

//     const handleScroll = () => {
//       if (!elementRef.current) return;

//       const rect = elementRef.current.getBoundingClientRect();
//       const viewportHeight = window.innerHeight;

//       // Determine the scroll percentage within the affected range
//       const affectedStart = parseFloat(settings.motion_fx_translateY_affectedRange?.sizes?.start || 0) / 100;
//       const affectedEnd = parseFloat(settings.motion_fx_translateY_affectedRange?.sizes?.end || 100) / 100;

//       const elementTopInViewport = rect.top;
//       const elementHeight = rect.height;

//       // Calculate progress based on element's visibility in viewport
//       let progress = 0;
//       if (elementTopInViewport < viewportHeight && elementTopInViewport + elementHeight > 0) {
//         // Element is in viewport
//         const viewportRelativeTop = Math.max(0, elementTopInViewport);
//         const viewportRelativeBottom = Math.min(viewportHeight, elementTopInViewport + elementHeight);
//         const visibleHeight = viewportRelativeBottom - viewportRelativeTop;

//         const scrollFraction = (viewportHeight - viewportRelativeTop) / (viewportHeight + elementHeight); // 0 to 1 as it scrolls from bottom to top
//         progress = Math.max(0, Math.min(1, (scrollFraction - affectedStart) / (affectedEnd - affectedStart)));
//       }

//       let translateY = 0;
//       if (settings.motion_fx_translateY_effect === 'yes') {
//         const speed = parseFloat(settings.motion_fx_translateY_speed?.size || 1);
//         const direction = settings.motion_fx_translateY_direction === 'negative' ? -1 : 1;
//         // This is a simplified calculation. Elementor's exact formula can be complex.
//         // It often means starting at an offset and moving, or moving faster than scroll.
//         // Let's assume it's a parallax effect relative to scroll.
//         translateY = -window.scrollY * speed * 0.1 * direction * progress; // Adjust multiplier for intensity
//       }


//       let scale = 1;
//       if (settings.motion_fx_scale_effect === 'yes') {
//         const scaleSpeed = parseFloat(settings.motion_fx_scale_speed?.size || 1);
//         const scaleRangeStart = parseFloat(settings.motion_fx_scale_range?.sizes?.start || 0) / 100;
//         const scaleRangeEnd = parseFloat(settings.motion_fx_scale_range?.sizes?.end || 100) / 100;
//         const scaleDirection = settings.motion_fx_scale_direction; // "out-in" implies it scales down then up, or vice versa
//         // Again, a complex mapping. This is a very simple linear scale example.
//         // For "out-in", you'd map progress to a curve.
//         scale = 1 + ((scaleRangeEnd - scaleRangeStart) * progress * scaleSpeed); // Scales up
//         if (scaleDirection === 'out-in') {
//              // More complex logic needed for out-in, potentially scales down then back to 1.
//              // For simplicity, let's make it subtly scale with scroll
//              scale = 1 - (0.05 * (1 - progress)); // Example: scales slightly smaller as it enters, then back to 1
//         }
//       }

//       setTransformStyle({
//         transform: `translateY(${translateY}px) scale(${scale})`,
//         transition: 'transform 100ms ease-out', // Elementor's default transition
//       });
//     };

//     window.addEventListener('scroll', handleScroll);
//     handleScroll(); // Set initial position

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [settings]);

//   return elementRef;
// };


const FourthSection: React.FC = () => {
  // Motion settings from WordPress data-settings
  const image1MotionSettings = {
    motion_fx_motion_fx_scrolling: 'yes',
    motion_fx_translateY_effect: 'yes',
    motion_fx_translateY_speed: { unit: 'px', size: 1.3, sizes: [] },
    motion_fx_scale_effect: 'yes',
    motion_fx_scale_speed: { unit: 'px', size: 0.7, sizes: [] },
    motion_fx_scale_range: { unit: '%', size: '', sizes: { start: 0, end: 50 } },
    motion_fx_devices: ['desktop'],
    motion_fx_translateY_affectedRange: { unit: '%', size: '', sizes: { start: 0, end: 50 } },
    motion_fx_scale_direction: 'out-in',
  };

  const image2MotionSettings = {
    motion_fx_motion_fx_scrolling: 'yes',
    motion_fx_translateY_effect: 'yes',
    motion_fx_translateY_speed: { unit: 'px', size: 2, sizes: [] },
    motion_fx_translateY_affectedRange: { unit: '%', size: '', sizes: { start: 0, end: 60 } },
    motion_fx_scale_effect: 'yes',
    motion_fx_scale_speed: { unit: 'px', size: 0.6, sizes: [] },
    motion_fx_devices: ['desktop'],
    motion_fx_scale_range: { unit: '%', size: '', sizes: { start: 20, end: 50 } },
    motion_fx_scale_direction: 'out-in',
  };

  const image1 = useElementorMotion<HTMLDivElement>(image1MotionSettings);
  const image2 = useElementorMotion<HTMLDivElement>(image2MotionSettings);

  return (
    <section className="elementor-section elementor-top-section elementor-element elementor-element-1a153f4 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="1a153f4" data-element_type="section">
      <div className="elementor-container elementor-column-gap-no">
        {/* Left Column */}
        <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-11947c0" data-id="11947c0" data-element_type="column">
          <div className="elementor-widget-wrap elementor-element-populated elementor-motion-effects-parent">
            {/* Image 1 Widget with Motion Effects */}
            <div
              ref={image1.ref} style={image1.style}
              className="vamtam-has-theme-widget-styles elementor-element elementor-element-c56748e elementor-widget elementor-widget-image elementor-motion-effects-element"
              data-id="c56748e"
              data-element_type="widget"
              data-widget_type="image.default"
              // data-settings is here for reference; actual motion handled by useElementorMotion hook
              data-settings='{"motion_fx_motion_fx_scrolling":"yes","motion_fx_translateY_effect":"yes","motion_fx_translateY_speed":{"unit":"px","size":1.3,"sizes":[]},"motion_fx_scale_effect":"yes","motion_fx_scale_speed":{"unit":"px","size":0.7,"sizes":[]},"motion_fx_scale_range":{"unit":"%,"size":"","sizes":{"start":0,"end":50}},"motion_fx_devices":["desktop"],"motion_fx_translateY_affectedRange":{"unit":"%,"size":"","sizes":{"start":0,"end":50}},"motion_fx_scale_direction":"out-in"}'
            >
              <div className="elementor-image">
                <img
                  loading="lazy"
                  decoding="async"
                  width={1100}
                  height={1467}
                  src="https://essentialkirklandsalon.celsiussolutions.tech/wp-content/uploads/2023/01/GettyImages-1287384257.jpg"
                  className="attachment-full size-full wp-image-546"
                  alt="Stylist working"
                  srcSet="https://essentialkirklandsalon.celsiussolutions.tech/wp-content/uploads/2023/01/GettyImages-1287384257.jpg 1100w, https://essentialkirklandsalon.celsiussolutions.tech/wp-content/uploads/2023/01/GettyImages-1287384257-640x854.jpg 640w, https://essentialkirklandsalon.celsiussolutions.tech/wp-content/uploads/2023/01/GettyImages-1287384257-225x300.jpg 225w, https://essentialkirklandsalon.celsiussolutions.tech/wp-content/uploads/2023/01/GettyImages-1287384257-768x1024.jpg 768w"
                  sizes="(max-width: 1100px) 100vw, 1100px"
                />
              </div>
            </div>
            {/* Spacer */}
            <div className="elementor-element elementor-element-391e91d elementor-widget elementor-widget-spacer" data-id="391e91d" data-element_type="widget" data-widget_type="spacer.default">
              <div className="elementor-spacer">
                <div className="elementor-spacer-inner"></div>
              </div>
            </div>
            {/* Heading */}
            <div className="elementor-element elementor-element-903d8ef elementor-widget elementor-widget-heading" data-id="903d8ef" data-element_type="widget" data-widget_type="heading.default">
              <h2 className="elementor-heading-title elementor-size-default">Salon•</h2>
            </div>
            {/* Text Editor */}
            <div className="elementor-element elementor-element-7657f09 elementor-widget elementor-widget-text-editor" data-id="7657f09" data-element_type="widget" data-widget_type="text-editor.default">
              As a sustainably-minded salon, all of our products contain gentle, nourishing and natural ingredients and avoid any harsh or damaging chemical additives.
            </div>
            {/* Spacer */}
            <div className="elementor-element elementor-element-c5eaad1 elementor-widget elementor-widget-spacer" data-id="c5eaad1" data-element_type="widget" data-widget_type="spacer.default">
              <div className="elementor-spacer">
                <div className="elementor-spacer-inner"></div>
              </div>
            </div>
          </div>
        </div>
        {/* Right Column */}
        <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-376b27a" data-id="376b27a" data-element_type="column">
          <div className="elementor-widget-wrap elementor-element-populated elementor-motion-effects-parent">
            {/* Spacer */}
            <div className="elementor-element elementor-element-9302cd2 elementor-widget elementor-widget-spacer" data-id="9302cd2" data-element_type="widget" data-widget_type="spacer.default">
              <div className="elementor-spacer">
                <div className="elementor-spacer-inner"></div>
              </div>
            </div>
            {/* Image 2 Widget with Motion Effects */}
            <div
              ref={image2.ref} style={image2.style}
              className="vamtam-has-theme-widget-styles elementor-element elementor-element-b9697e1 elementor-widget elementor-widget-image elementor-motion-effects-element"
              data-id="b9697e1"
              data-element_type="widget"
              data-widget_type="image.default"
              data-settings='{"motion_fx_motion_fx_scrolling":"yes","motion_fx_translateY_effect":"yes","motion_fx_translateY_speed":{"unit":"px","size":2,"sizes":[]},"motion_fx_translateY_affectedRange":{"unit":"%,"size":"","sizes":{"start":0,"end":60}},"motion_fx_scale_effect":"yes","motion_fx_scale_speed":{"unit":"px","size":0.6,"sizes":[]},"motion_fx_devices":["desktop"],"motion_fx_scale_range":{"unit":"%,"size":"","sizes":{"start":20,"end":50}},"motion_fx_scale_direction":"out-in"}'
            >
              <div className="elementor-image">
                <img
                  loading="lazy"
                  decoding="async"
                  width={1400}
                  height={2100}
                  src="https://essentialkirklandsalon.celsiussolutions.tech/wp-content/uploads/2023/01/GettyImages-1132012971.jpg"
                  className="attachment-full size-full wp-image-547"
                  alt="Hair products"
                  srcSet="https://essentialkirklandsalon.celsiussolutions.tech/wp-content/uploads/2023/01/GettyImages-1132012971.jpg 1400w, https://essentialkirklandsalon.celsiussolutions.tech/wp-content/uploads/2023/01/GettyImages-1132012971-320x480.jpg 320w, https://essentialkirklandsalon.celsiussolutions.tech/wp-content/uploads/2023/01/GettyImages-1132012971-640x960.jpg 640w, https://essentialkirklandsalon.celsiussolutions.tech/wp-content/uploads/2023/01/GettyImages-1132012971-200x300.jpg 200w, https://essentialkirklandsalon.celsiussolutions.tech/wp-content/uploads/2023/01/GettyImages-1132012971-683x1024.jpg 683w, https://essentialkirklandsalon.celsiussolutions.tech/wp-content/uploads/2023/01/GettyImages-1132012971-768x1152.jpg 768w, https://essentialkirklandsalon.celsiussolutions.tech/wp-content/uploads/2023/01/GettyImages-1132012971-1024x1536.jpg 1024w, https://essentialkirklandsalon.celsiussolutions.tech/wp-content/uploads/2023/01/GettyImages-1132012971-1365x2048.jpg 1365w, https://essentialkirklandsalon.celsiussolutions.tech/wp-content/uploads/2023/01/GettyImages-1132012971-1360x2040.jpg 1360w"
                  sizes="(max-width: 1400px) 100vw, 1400px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FourthSection;