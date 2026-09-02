import React, { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Carousel.css";

const SWIPE_THRESHOLD_PX = 40;

/**
 * Minimal accessible image carousel: arrow buttons, dot indicators,
 * touch swipe, and arrow-key navigation while focused.
 */
function Carousel({ images, label }) {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef(null);
  const count = images.length;

  const go = (delta) => setIndex((i) => (i + delta + count) % count);

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(dx) > SWIPE_THRESHOLD_PX) go(dx < 0 ? 1 : -1);
  };

  const onKeyDown = (e) => {
    if (e.key === "ArrowLeft") go(-1);
    if (e.key === "ArrowRight") go(1);
  };

  return (
    <div
      className="carousel"
      role="group"
      aria-roledescription="carousel"
      aria-label={label}
      tabIndex={count > 1 ? 0 : -1}
      onKeyDown={onKeyDown}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((src, i) => (
          <div key={i} className="carousel-slide" aria-hidden={i !== index}>
            <img
              src={src}
              alt={`${label} — screenshot ${i + 1} of ${count}`}
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {count > 1 && (
        <>
          <button
            type="button"
            className="carousel-arrow carousel-arrow-prev"
            onClick={() => go(-1)}
            aria-label="Previous image"
          >
            <FaChevronLeft />
          </button>
          <button
            type="button"
            className="carousel-arrow carousel-arrow-next"
            onClick={() => go(1)}
            aria-label="Next image"
          >
            <FaChevronRight />
          </button>
          <div className="carousel-dots">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                className={`carousel-dot ${i === index ? "is-active" : ""}`}
                onClick={() => setIndex(i)}
                aria-label={`Go to image ${i + 1}`}
                aria-current={i === index}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Carousel;
