import React from "react";
import { Link } from "react-router-dom";

const CTA: React.FunctionComponent = () => (
  <section className="cta">
    <p className="cta-text">
      Have a project in mind? <br className="sm:block hidden" />
      Let’s build something together!
    </p>
    <Link
      to="/contact"
      className="cta-btn"
      style={{
        clipPath:
          "polygon(15% 0, 85% 0, 100% 50%, 85% 100%, 15% 100%, 0% 50%)",
      }}
    >
      Contact
    </Link>
  </section>
);

export default CTA;
