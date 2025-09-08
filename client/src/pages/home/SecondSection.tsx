import React from 'react';
import './SecondSection.css'; // custom styles

const SecondSection = () => {
  return (
    <section className="elementor-section elementor-top-section elementor-element elementor-element-22740af elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="22740af" data-element_type="section">
      <div className="elementor-container elementor-column-gap-no">
        <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-f02a240" data-id="f02a240" data-element_type="column">
          <div className="elementor-widget-wrap elementor-element-populated">

            {/* Image Widget */}
            <div className="vamtam-has-theme-widget-styles elementor-element elementor-element-e96941f elementor-widget elementor-widget-image" data-id="e96941f" data-element_type="widget" data-widget_type="image.default">
              <div className="elementor-image">
                <img
                  decoding="async"
                  width={128}
                  height={200}
                  src="https://essentialkirklandsalon.celsiussolutions.tech/wp-content/uploads/2023/01/GettyImages-1317331156.svg"
                  className="attachment-full size-full wp-image-41"
                  alt="Hairstyle"
                />
              </div>
            </div>

            {/* Heading Widget */}
            <div className="elementor-element elementor-element-2f8c120 elementor-widget elementor-widget-heading" data-id="2f8c120" data-element_type="widget" data-widget_type="heading.default">
              <h2 className="elementor-heading-title elementor-size-default">A great hairstyle is the best accessory.</h2>
            </div>

            {/* Text Editor Widget */}
            <div className="elementor-element elementor-element-64ad954 elementor-widget elementor-widget-text-editor" data-id="64ad954" data-element_type="widget" data-widget_type="text-editor.default">
              <p>We specialise in modern cuts and colour,&nbsp;with an emphasis on the long-term condition of your hair.</p>
            </div>

            {/* Button 1 Widget */}
            <div className="vamtam-has-theme-widget-styles elementor-element elementor-element-a9c179e elementor-align-center vamtam-has-underline-anim elementor-widget elementor-widget-button" data-id="a9c179e" data-element_type="widget" data-widget_type="button.default">
              <a className="elementor-button elementor-button-link elementor-size-sm" href="#elementor-action:action=popup:open&settings=eyJpZCI6IjIzNDgiLCJ0b2dnbGUiOmZhbHNlLCJhbGlnX3dpdGhfX3BhcmVudCI6IiJ9">
                <span className="elementor-button-content-wrapper">
                  <span className="elementor-button-text"><span className="vamtam-btn-text">Book an appointment</span></span>
                </span>
              </a>
            </div>

            {/* Button 2 Widget */}
            <div className="vamtam-has-theme-widget-styles elementor-element elementor-element-31fbb3b elementor-align-center vamtam-has-underline-anim elementor-widget elementor-widget-button" data-id="31fbb3b" data-element_type="widget" data-widget_type="button.default">
              <a className="elementor-button elementor-button-link elementor-size-sm" href="https://essentialkirklandsalon.celsiussolutions.tech/contacts/">
                <span className="elementor-button-content-wrapper">
                  <span className="elementor-button-text"><span className="vamtam-btn-text">Location &amp; Hours</span></span>
                </span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondSection;