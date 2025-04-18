"use client";

import React, { useRef, useState, useEffect } from "react";

export default function ImageFrameComposer() {
  const [image, setImage] = useState(null);
  const [frameSvg, setFrameSvg] = useState(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    fetch("/frame.svg")
      .then((res) => res.text())
      .then((svgText) => setFrameSvg(svgText));
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    if (image && frameSvg && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      const img = new Image();
      const svg = new Blob([frameSvg], { type: "image/svg+xml;charset=utf-8" });
      const frameUrl = URL.createObjectURL(svg);
      const frameImg = new Image();

      img.onload = () => {
        // Preenche fundo com preto
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Calcula o melhor ajuste mantendo proporção
        const scale = Math.min(
          canvas.width / img.width,
          canvas.height / img.height
        );
        const newWidth = img.width * scale;
        const newHeight = img.height * scale;
        const offsetX = (canvas.width - newWidth) / 2;
        const offsetY = (canvas.height - newHeight) / 2;

        // Desenha imagem com proporções preservadas centralizada
        ctx.drawImage(img, offsetX, offsetY, newWidth, newHeight);

        frameImg.onload = () => {
          ctx.drawImage(frameImg, 0, 0, canvas.width, canvas.height);
          URL.revokeObjectURL(frameUrl);
        };
        frameImg.src = frameUrl;
      };
      img.src = image;
    }
  }, [image, frameSvg]);

  const handleDownload = () => {
    const canvas = canvasRef.current;
    const link = document.createElement("a");
    link.download = "imagem_com_frame.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      <canvas
        ref={canvasRef}
        width={1600}
        height={1600}
        className="border rounded shadow"
      />
      <button onClick={handleDownload} disabled={!image}>
        Baixar Imagem
      </button>
    </div>
  );
}
