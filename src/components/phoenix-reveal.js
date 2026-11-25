// The v3 artwork is one raster. Soft, overlapping masks reveal its four regions.
export const revealDuration = 4800;

function phase(time, start, end) {
  const progress = Math.max(0, Math.min(1, (time - start) / (end - start)));
  return progress * progress * (3 - 2 * progress);
}

export function createPhoenixReveal(canvas, image) {
  const context = canvas.getContext("2d");
  const layer = document.createElement("canvas");
  const mask = layer.getContext("2d");
  if (!context || !mask) return null;

  const { width, height } = canvas;
  context.clearRect(0, 0, width, height);
  layer.width = width;
  layer.height = height;

  function ellipse(x, y, radiusX, radiusY, opacity) {
    if (opacity === 0) return;
    mask.save();
    mask.translate(x * width, y * height);
    mask.scale(radiusX * width, radiusY * height);
    const gradient = mask.createRadialGradient(0, 0, 0, 0, 0, 1);
    gradient.addColorStop(0, `rgba(255,255,255,${opacity})`);
    gradient.addColorStop(0.68, `rgba(255,255,255,${opacity})`);
    gradient.addColorStop(1, "rgba(255,255,255,0)");
    mask.fillStyle = gradient;
    mask.fillRect(-1, -1, 2, 2);
    mask.restore();
  }

  const sparks = Array.from({ length: 56 }, () => ({
    angle: Math.random() * Math.PI * 2,
    speed: 0.08 + Math.random() * 0.38,
    life: 0.35 + Math.random() * 1.15,
    radius: 0.65 + Math.random() * 1.8,
  }));

  return (progress) => {
    // Keep the prototype's timing ratios while stretching the shared timeline.
    const time = progress * 3.15;
    const body = phase(time, 0.19, 1.48);
    const left = phase(time, 0.68, 2.22);
    const right = phase(time, 1.04, 2.65);
    const coals = phase(time, 1.37, 2.75);

    mask.clearRect(0, 0, width, height);
    ellipse(0.52, 0.48, 0.025 + 0.14 * body, 0.035 + 0.48 * body, body);
    ellipse(0.49 - 0.13 * left, 0.43 - 0.09 * left, 0.025 + 0.43 * left, 0.035 + 0.49 * left, left);
    ellipse(0.55 + 0.13 * right, 0.43 - 0.07 * right, 0.025 + 0.4 * right, 0.035 + 0.43 * right, right);
    ellipse(0.51, 0.89, 0.035 + 0.48 * coals, 0.025 + 0.25 * coals, coals);
    mask.fillStyle = `rgba(255,255,255,${phase(time, 2.59, 3.15)})`;
    mask.fillRect(0, 0, width, height);
    mask.globalCompositeOperation = "source-in";
    mask.drawImage(image, 0, 0, width, height);
    mask.globalCompositeOperation = "source-over";

    const growth = 0.035 + 0.965 * phase(time, 0.12, 2.48);
    context.clearRect(0, 0, width, height);
    context.save();
    context.translate(width * 0.51, height * (0.48 + (1 - growth) * 0.06));
    context.scale(growth, growth);
    context.globalAlpha = phase(time, 0.16, 0.62);
    context.drawImage(layer, -width * 0.51, -height * 0.48);
    context.restore();

    for (const { angle, speed, life, radius } of sparks) {
      if (time >= life) continue;
      const distance = Math.log1p(time * 4) * speed;
      const x = width * (0.5 + Math.cos(angle) * distance);
      const y = height * (0.54 + Math.sin(angle) * distance - time * 0.09);
      context.fillStyle = `rgba(255,143,70,${0.9 * (1 - time / life)})`;
      context.beginPath();
      context.arc(x, y, radius, 0, Math.PI * 2);
      context.fill();
    }
  };
}
