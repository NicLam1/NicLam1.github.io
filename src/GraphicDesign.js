import React, { useEffect, useState } from 'react';
import './graphicDesign.css';

const importAll = (r) => r.keys().map(r);

function GraphicDesign() {
  const images = importAll(
    require.context('./images/graphic design', false, /\.(png|jpe?g|svg|webp)$/)
  );
  const [modalSrc, setModalSrc] = useState(null);

  const getAltFromPath = (src) => {
    try {
      const match = src.toString().split('/').pop();
      return match ? match.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ') : 'graphic design image';
    } catch {
      return 'graphic design image';
    }
  };

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        setModalSrc(null);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const openModal = (src) => setModalSrc(src);
  const closeModal = () => setModalSrc(null);

  return (
    <div id="graphic-design" className="container-fluid gd-section">
      <div className="row">
        <div className="col-12">
          <h2 className="section-title">Graphic Design</h2>
          <div className="gd-grid">
            {images.map((src, idx) => (
              <figure key={idx} className="gd-item">
                <img
                  className="gd-image"
                  src={src}
                  alt={getAltFromPath(src)}
                  loading="lazy"
                  onClick={() => openModal(src)}
                />
              </figure>
            ))}
          </div>
        </div>
      </div>

      {modalSrc && (
        <div
          className="gd-modal"
          role="dialog"
          aria-modal="true"
          aria-label="Full size image"
          onClick={closeModal}
        >
          <button
            type="button"
            className="gd-modal-close"
            aria-label="Close"
            onClick={closeModal}
          >
            <span className="gd-x">×</span>
          </button>
          <img
            className="gd-modal-img"
            src={modalSrc}
            alt={getAltFromPath(modalSrc)}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}

export default GraphicDesign;

