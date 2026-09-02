import React, { useCallback, useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
import useReveal from "../hooks/useReveal";
import "./GraphicDesign.css";

const importAll = (context) => context.keys().map(context);

const images = importAll(
  require.context("../images/graphic design", false, /\.(png|jpe?g|svg|webp)$/)
);

const altFromPath = (src) => {
  const file = String(src).split("/").pop() || "";
  const name = file
    .replace(/\.[^/.]+$/, "")
    .replace(/\.[0-9a-f]{8,}$/, "") // strip webpack content hash
    .replace(/[-_]+/g, " ")
    .trim();
  return name || "Poster design";
};

function GraphicDesign() {
  const revealRef = useReveal();
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const closeButtonRef = useRef(null);
  const isOpen = lightboxIndex !== null;

  const step = useCallback((delta) => {
    setLightboxIndex((i) =>
      i === null ? i : (i + delta + images.length) % images.length
    );
  }, []);

  useEffect(() => {
    if (!isOpen) return undefined;

    const onKeyDown = (e) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "ArrowRight") step(1);
    };
    window.addEventListener("keydown", onKeyDown);

    // Lock page scroll behind the lightbox and move focus into it.
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    if (closeButtonRef.current) closeButtonRef.current.focus();

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, step]);

  return (
    <section id="design" className="section gd" ref={revealRef}>
      <div className="section-inner">
        <div className="section-head reveal">
          <span className="section-index">02</span>
          <div>
            <h2 className="section-title">Graphic Design</h2>
            <p className="section-sub">
              Poster and event artwork — click any piece to view it full size.
            </p>
          </div>
        </div>

        <div className="gd-masonry reveal">
          {images.map((src, i) => (
            <button
              key={i}
              type="button"
              className="gd-item"
              onClick={() => setLightboxIndex(i)}
              aria-label={`View ${altFromPath(src)} full size`}
            >
              <img src={src} alt={altFromPath(src)} loading="lazy" />
              <span className="gd-item-overlay" aria-hidden="true">
                <span className="gd-item-caption">{altFromPath(src)}</span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {isOpen && (
        <div
          className="gd-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={altFromPath(images[lightboxIndex])}
          onClick={() => setLightboxIndex(null)}
        >
          <button
            ref={closeButtonRef}
            type="button"
            className="gd-lightbox-close"
            aria-label="Close"
            onClick={() => setLightboxIndex(null)}
          >
            <FaTimes />
          </button>

          <button
            type="button"
            className="gd-lightbox-arrow gd-lightbox-prev"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
          >
            <FaChevronLeft />
          </button>

          <figure
            className="gd-lightbox-figure"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[lightboxIndex]}
              alt={altFromPath(images[lightboxIndex])}
            />
            <figcaption className="gd-lightbox-caption">
              {altFromPath(images[lightboxIndex])}
              <span className="gd-lightbox-counter">
                {lightboxIndex + 1} / {images.length}
              </span>
            </figcaption>
          </figure>

          <button
            type="button"
            className="gd-lightbox-arrow gd-lightbox-next"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
          >
            <FaChevronRight />
          </button>
        </div>
      )}
    </section>
  );
}

export default GraphicDesign;
