/** Rasterise the board SVG to a PNG with a white background and watermark. */
export async function downloadSvgAsPng(svg: SVGSVGElement, filename: string, watermark: string) {
  const width = svg.width.baseVal.value;
  const height = svg.height.baseVal.value;
  const scale = 2;
  const clone = svg.cloneNode(true) as SVGSVGElement;
  clone.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  clone.setAttribute("width", String(width * scale));
  clone.setAttribute("height", String(height * scale));

  const xml = new XMLSerializer().serializeToString(clone);
  const url = URL.createObjectURL(new Blob([xml], { type: "image/svg+xml;charset=utf-8" }));
  try {
    const img = new Image();
    img.decoding = "async";
    await new Promise<void>((resolve, reject) => {
      img.onload = () => resolve();
      img.onerror = () => reject(new Error("Could not render chart"));
      img.src = url;
    });
    const canvas = document.createElement("canvas");
    canvas.width = width * scale;
    canvas.height = height * scale;
    const ctx = canvas.getContext("2d");
    if (!ctx) throw new Error("Canvas unsupported");
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0);
    ctx.font = `600 ${13 * scale}px system-ui, sans-serif`;
    ctx.fillStyle = "rgba(15, 23, 42, 0.45)";
    ctx.textAlign = "right";
    ctx.fillText(watermark, canvas.width - 14 * scale, canvas.height - 10 * scale);

    const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, "image/png"));
    if (!blob) throw new Error("Export failed");
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
    setTimeout(() => URL.revokeObjectURL(link.href), 1000);
  } finally {
    URL.revokeObjectURL(url);
  }
}
