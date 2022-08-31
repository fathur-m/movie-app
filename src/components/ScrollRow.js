import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

function ScrollRow({ children, className, isLargeRow }) {
  const scrollRef = useRef();
  const [arrow, setArrow] = useState(false);

  const scrollDiv = () => {
    if (scrollRef.current.scrollLeft > 0) {
      setArrow(true);
    } else {
      setArrow(false);
    }
  };
  const nextBtn = () => {
    const nextValue = scrollRef.current.offsetWidth - 64;
    scrollRef.current.scrollBy({ top: 0, left: nextValue, behavior: "smooth" });
  };
  const prevBtn = () => {
    const prevValue = scrollRef.current.offsetWidth - 64;
    scrollRef.current.scrollBy({
      top: 0,
      left: -prevValue,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const refValue = scrollRef.current;
    refValue.addEventListener("scroll", scrollDiv);
    return () => refValue.removeEventListener("scroll", scrollDiv);
  }, []);
  return (
    <>
      <div ref={scrollRef} className={className}>
        {children}
      </div>
      {arrow && (
        <div className="left__arrow">
          <IoIosArrowForward className="arrow__btnleft" onClick={prevBtn} />
          <span
            className={isLargeRow ? "arrow__bglargeleft" : "arrow__bgleft"}
          ></span>
        </div>
      )}
      <div className="right__arrow">
        <IoIosArrowForward className="arrow__btn" onClick={nextBtn} />
        <span className={isLargeRow ? "arrow__bglarge" : "arrow__bg"}></span>
      </div>
    </>
  );
}

export default ScrollRow;
