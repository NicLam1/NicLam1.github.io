import React, { useEffect, useRef } from "react";

const LINE_COUNT = 4;

/**
 * Animated sine-wave lines that fill their parent element. Handles device
 * pixel ratio, window resizing, reduced-motion preference, and cleans up its
 * animation frame on unmount.
 */
function WaveCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext && canvas.getContext("2d");
    if (!ctx) return undefined;

    let width = 0;
    let height = 0;
    let rafId = 0;
    let time = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.max(1, Math.round(width * dpr));
      canvas.height = Math.max(1, Math.round(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const lines = Array.from({ length: LINE_COUNT }, (_, i) => ({
      frequency: 0.006 + i * 0.0018,
      amplitude: 44 - i * 6,
      phase: (i * Math.PI) / 3,
      drift: 0.4 + i * 0.18,
      offset: (i - (LINE_COUNT - 1) / 2) * 46,
    }));

    const drawFrame = () => {
      ctx.clearRect(0, 0, width, height);
      const midY = height / 2;

      lines.forEach((line) => {
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.strokeStyle = "rgba(245, 245, 242, 0.22)";

        for (let x = 0; x <= width; x += 3) {
          const lean = line.offset * (x / width - 0.5) * 2;
          const y =
            midY +
            lean +
            Math.sin(x * line.frequency + time * line.drift + line.phase) *
              line.amplitude;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();

        // A glowing dot travelling along each line.
        const dotX = ((time * line.drift * 60) % (width + 120)) - 60;
        const dotLean = line.offset * (dotX / width - 0.5) * 2;
        const dotY =
          midY +
          dotLean +
          Math.sin(dotX * line.frequency + time * line.drift + line.phase) *
            line.amplitude;
        ctx.beginPath();
        ctx.arc(dotX, dotY, 2.4, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(167, 139, 250, 0.85)";
        ctx.fill();
      });
    };

    const reducedMotion =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const loop = () => {
      time += 0.016;
      drawFrame();
      rafId = window.requestAnimationFrame(loop);
    };

    resize();
    if (reducedMotion) {
      time = 4; // draw a single interesting static frame
      drawFrame();
    } else {
      rafId = window.requestAnimationFrame(loop);
    }

    const onResize = () => {
      resize();
      if (reducedMotion) drawFrame();
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="wave-canvas" aria-hidden="true" />;
}

export default WaveCanvas;
