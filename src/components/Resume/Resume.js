import React, { useRef } from "react";
import ScrollableAnchor from "react-scrollable-anchor";

const Resume = () => {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <button onClick={() => scrollToRef(section1Ref)}>
        Scroll to Section 1
      </button>
      <button onClick={() => scrollToRef(section2Ref)}>
        Scroll to Section 2
      </button>
      <button onClick={() => scrollToRef(section3Ref)}>
        Scroll to Section 3
      </button>

      <ScrollableAnchor id={"section1"}>
        <div ref={section1Ref}>{/* Content for section 1 */}</div>
      </ScrollableAnchor>

      <ScrollableAnchor id={"section2"}>
        <div ref={section2Ref}>{/* Content for section 2 */}</div>
      </ScrollableAnchor>

      <ScrollableAnchor id={"section3"}>
        <div ref={section3Ref}>{/* Content for section 3 */}</div>
      </ScrollableAnchor>
    </div>
  );
};

export default Resume;
