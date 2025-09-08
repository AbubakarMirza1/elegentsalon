import React, { useRef, useEffect, useState } from 'react';
import './FifthSection.css';
import useElementorMotion from '../../hooks/useElementorMotion';

// Ensure useElementorMotion is accessible, either by putting it in a shared utility file
// or copying it to this file if it's only used here.
// For demonstration, let's assume it's in FourthSection and you export it.
// If you put it in a separate file like 'src/hooks/useElementorMotion.ts', you'd import:
// import { useElementorMotion } from '../hooks/useElementorMotion';

const FifthSection: React.FC = () => {
  // Motion settings for the rotating image (7a5e4b7)
  // This one has a static rotation from Elementor's _transform_rotateZ_effect,
  // not a scrolling motion effect. We'll apply it directly via style.
  const rotateImageStyle = {
    transform: 'rotateZ(-8deg)', // Directly from data-settings for _transform_rotateZ_effect
    transition: 'transform 0.3s ease-out', // Add a small transition for good measure
  };

  // Motion settings for the translateY negative image (73a3a29)
  const negativeTranslateYImageMotionSettings = {
    motion_fx_motion_fx_scrolling: 'yes',
    motion_fx_translateY_effect: 'yes',
    motion_fx_translateY_direction: 'negative',
    motion_fx_translateY_speed: { unit: 'px', size: 1.2, sizes: [] },
    motion_fx_translateY_affectedRange: { unit: '%', size: '', sizes: { start: 2, end: 50 } },
    motion_fx_devices: ['desktop'],
    // No scale effect on this one based on data-settings
  };

  const negativeTranslateYImageRef = useElementorMotion<HTMLDivElement>(negativeTranslateYImageMotionSettings);


  return (
    <section className="elementor-section elementor-top-section elementor-element elementor-element-e4413b3 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="e4413b3" data-element_type="section">
      <div className="elementor-container elementor-column-gap-no">
        {/* Left Column (Text Content and Button) */}
        <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-bc0a171" data-id="bc0a171" data-element_type="column">
          <div className="elementor-widget-wrap elementor-element-populated">
            {/* Image 1 (Static) */}
            <div className="vamtam-has-theme-widget-styles elementor-element elementor-element-ec7a626 elementor-widget elementor-widget-image" data-id="ec7a626" data-element_type="widget" data-widget_type="image.default">
              <div className="elementor-image">
                <img
                  loading="lazy"
                  decoding="async"
                  width={1200}
                  height={1498}
                  src="https://essentialkirklandsalon.celsiussolutions.tech/wp-content/uploads/2023/01/GettyImages-1305492118.jpg"
                  className="attachment-full size-full wp-image-556"
                  alt="Styling hair"
                  srcSet="https://essentialkirklandsalon.celsiussolutions.tech/wp-content/uploads/2023/01/GettyImages-1305492118.jpg 1200w, https://essentialkirklandsalon.celsiussolutions.tech/wp-content/uploads/2023/01/GettyImages-1305492118-640x799.jpg 640w, https://essentialkirklandsalon.celsiussolutions.tech/wp-content/uploads/2023/01/GettyImages-1305492118-240x300.jpg 240w, https://essentialkirklandsalon.celsiussolutions.tech/wp-content/uploads/2023/01/GettyImages-1305492118-820x1024.jpg 820w, https://essentialkirklandsalon.celsiussolutions.tech/wp-content/uploads/2023/01/GettyImages-1305492118-768x959.jpg 768w"
                  sizes="(max-width: 1200px) 100vw, 1200px"
                />
              </div>
            </div>
            {/* Spacer */}
            <div className="elementor-element elementor-element-7c9ac2e elementor-widget elementor-widget-spacer" data-id="7c9ac2e" data-element_type="widget" data-widget_type="spacer.default">
              <div className="elementor-spacer">
                <div className="elementor-spacer-inner"></div>
              </div>
            </div>
            {/* Heading H6 */}
            <div className="elementor-element elementor-element-0475d84 elementor-widget elementor-widget-heading" data-id="0475d84" data-element_type="widget" data-widget_type="heading.default">
              <h6 className="elementor-heading-title elementor-size-default">Philosophy •</h6>
            </div>
            {/* Heading H2 */}
            <div className="elementor-element elementor-element-9d07a87 elementor-widget elementor-widget-heading" data-id="9d07a87" data-element_type="widget" data-widget_type="heading.default">
              <h2 className="elementor-heading-title elementor-size-default">If my hair looks good, I can deal with anything.</h2>
            </div>
            {/* Text Editor */}
            <div className="elementor-element elementor-element-4fb7a7e elementor-widget elementor-widget-text-editor" data-id="4fb7a7e" data-element_type="widget" data-widget_type="text-editor.default">
              <p>We specialise in modern cuts and colour, with an emphasis on the long-term condition of your hair, nourishing and natural ingredients and avoid any harsh or damaging chemical additives. We specialise in modern cuts and colour, with an emphasis on the long-term condition of your hair.</p>
            </div>
            {/* Spacer */}
            <div className="elementor-element elementor-element-6867523 elementor-widget elementor-widget-spacer" data-id="6867523" data-element_type="widget" data-widget_type="spacer.default">
              <div className="elementor-spacer">
                <div className="elementor-spacer-inner"></div>
              </div>
            </div>
            {/* Button */}
            <div className="vamtam-has-theme-widget-styles elementor-element elementor-element-7754be9 vamtam-has-underline-anim elementor-widget elementor-widget-button" data-id="7754be9" data-element_type="widget" data-widget_type="button.default">
              <a className="elementor-button elementor-button-link elementor-size-sm" href="https://essentialkirklandsalon.celsiussolutions.tech/salon/">
                <span className="elementor-button-content-wrapper">
                  <span className="elementor-button-text"><span className="vamtam-btn-text">Read full story</span></span>
                </span>
              </a>
            </div>
          </div>
        </div>
        {/* Right Column (Images with Effects) */}
        <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-33ac011" data-id="33ac011" data-element_type="column">
          <div className="elementor-widget-wrap elementor-element-populated elementor-motion-effects-parent">
            {/* Image with Rotation (Static Transform) */}
            <div
              className="vamtam-has-theme-widget-styles elementor-element elementor-element-7a5e4b7 e-transform elementor-hidden-mobile elementor-widget elementor-widget-image"
              data-id="7a5e4b7"
              data-element_type="widget"
              data-widget_type="image.default"
              style={rotateImageStyle} // Apply static rotation
              data-settings='{"_transform_rotateZ_effect":{"unit":"px","size":-8,"sizes":[]},"_transform_rotateZ_effect_tablet":{"unit":"deg","size":"","sizes":[]},"_transform_rotateZ_effect_mobile":{"unit":"deg","size":"","sizes":[]}}'
            >
              <div className="elementor-image">
                <img
                  loading="lazy"
                  decoding="async"
                  width={700}
                  height={1050}
                  src="https://essentialkirklandsalon.celsiussolutions.tech/wp-content/uploads/2023/01/GettyImages-1183120759.png"
                  className="attachment-full size-full wp-image-557"
                  alt="Stylist working"
                  srcSet="https://essentialkirklandsalon.celsiussolutions.tech/wp-content/uploads/2023/01/GettyImages-1183120759.png 700w, https://essentialkirklandsalon.celsiussolutions.tech/wp-content/uploads/2023/01/GettyImages-1183120759-320x480.png 320w, https://essentialkirklandsalon.celsiussolutions.tech/wp-content/uploads/2023/01/GettyImages-1183120759-640x960.png 640w, https://essentialkirklandsalon.celsiussolutions.tech/wp-content/uploads/2023/01/GettyImages-1183120759-200x300.png 200w, https://essentialkirklandsalon.celsiussolutions.tech/wp-content/uploads/2023/01/GettyImages-1183120759-683x1024.png 683w"
                  sizes="(max-width: 700px) 100vw, 700px"
                />
              </div>
            </div>
            {/* Image with Negative TranslateY (Scrolling Motion Effect) */}
            <div
              ref={negativeTranslateYImageRef.ref} style={negativeTranslateYImageRef.style}
              className="vamtam-has-theme-widget-styles elementor-element elementor-element-73a3a29 elementor-widget elementor-widget-image elementor-motion-effects-element"
              data-id="73a3a29"
              data-element_type="widget"
              data-widget_type="image.default"
              data-settings='{"motion_fx_motion_fx_scrolling":"yes","motion_fx_translateY_effect":"yes","motion_fx_translateY_direction":"negative","motion_fx_translateY_speed":{"unit":"px","size":1.2,"sizes":[]},"motion_fx_translateY_affectedRange":{"unit":"%,"size":"","sizes":{"start":2,"end":50}},"motion_fx_devices":["desktop"]}'
            >
              <div className="elementor-image">
                <img
                  loading="lazy"
                  decoding="async"
                  width={1400}
                  height={1823}
                  src="https://essentialkirklandsalon.celsiussolutions.tech/wp-content/uploads/2023/01/GettyImages-1387228080.jpg"
                  className="attachment-full size-full wp-image-558"
                  alt="Hair treatment"
                  srcSet="https://essentialkirklandsalon.celsiussolutions.tech/wp-content/uploads/2023/01/GettyImages-1387228080.jpg 1400w, https://essentialkirklandsalon.celsiussolutions.tech/wp-content/uploads/2023/01/GettyImages-1387228080-640x833.jpg 640w, https://essentialkirklandsalon.celsiussolutions.tech/wp-content/uploads/2023/01/GettyImages-1387228080-230x300.jpg 230w, https://essentialkirklandsalon.celsiussolutions.tech/wp-content/uploads/2023/01/GettyImages-1387228080-786x1024.jpg 786w, https://essentialkirklandsalon.celsiussolutions.tech/wp-content/uploads/2023/01/GettyImages-1387228080-768x1000.jpg 768w, https://essentialkirklandsalon.celsiussolutions.tech/wp-content/uploads/2023/01/GettyImages-1387228080-1180x1536.jpg 1180w, https://essentialkirklandsalon.celsiussolutions.tech/wp-content/uploads/2023/01/GettyImages-1387228080-1360x1771.jpg 1360w"
                  sizes="(max-width: 1400px) 100vw, 1400px"
                />
              </div>
            </div>
            {/* Spacer */}
            <div className="elementor-element elementor-element-fd59c54 elementor-widget elementor-widget-spacer" data-id="fd59c54" data-element_type="widget" data-widget_type="spacer.default">
              <div className="elementor-spacer">
                <div className="elementor-spacer-inner"></div>
              </div>
            </div>
            {/* Heading H6 */}
            <div className="elementor-element elementor-element-e6ee73b elementor-widget elementor-widget-heading" data-id="e6ee73b" data-element_type="widget" data-widget_type="heading.default">
              <h6 className="elementor-heading-title elementor-size-default">Philosophy •</h6>
            </div>
            {/* Heading H2 */}
            <div className="elementor-element elementor-element-d40c660 elementor-widget elementor-widget-heading" data-id="d40c660" data-element_type="widget" data-widget_type="heading.default">
              <h2 className="elementor-heading-title elementor-size-default">Pushing the boundaries of creativity.</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FifthSection;