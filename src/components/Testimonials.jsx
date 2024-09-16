import React from 'react';
import '../styled/Testimonials.css';

import { testimonials } from '../constants/testimonials';

function Testimonials() {
  return (
    <div id="testimonials" className="testimonials">
      <h2 className="testimonials-title">What People Are Saying</h2>
      <div className="testimonials-wrapper">
        <div className="testimonials-content">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial">
              <p className="testimonial-text">{testimonial.text}</p>
              <p className="testimonial-author">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
