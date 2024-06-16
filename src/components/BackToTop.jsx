import React, { useEffect, useState } from "react";

const BackToTop = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  // SCROLL TO TOP FUNCTION WHEN CLICK ON THIS PAGE SCROLL TOP
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  // TO FIND SCROLL Y POSITION
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  // THIS USEFFECT GIVE US POSITION OF SCROLL IN EVERY PIXELS WE SCROLL
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* // IF PAGE SCROLL VALUE GRATER THAN 500 THEN SHOW BACK TO TOP BUTTON */}
      {scrollPosition > 50 ? (
        <div
          className="back-to-top fs-3 ff_inter text-white"
          onClick={() => scrollToTop()}
        >
 <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_6_982)">
<rect opacity="0.2" x="54" width="54" height="54" transform="rotate(90 54 0)" fill="#D9D9D9"/>
<path d="M28 35.9999V21.4139L33.293 26.7069L34.707 25.2929L27 17.5859L19.293 25.2929L20.707 26.7069L26 21.4139V35.9999H28Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_6_982">
<rect x="54" width="54" height="54" rx="27" transform="rotate(90 54 0)" fill="white"/>
</clipPath>
</defs>
</svg>
        </div>
      ) : (
        " "
      )}
    </>
  );
};

export default BackToTop;
