"use client";
import { useState } from "react";
import Image from "next/image";
import "./galeriaComponent.css";
//import FotosProps from '../../types/types.ts'; -- aqui é qdo eu importo do arquivo Types

interface FotoProps {
  src: string;
  alt: string;
}

export default function GaleriaComponent({ src, alt }: FotoProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!src || src === "") {
    return <div>Imagem não encontrada</div>;
  }

  const toggleZoom = () => setIsExpanded(!isExpanded);

  return (
    <>
      <div className="container-foto">
        <div
          className={`wrapper-img ${isExpanded ? "expandida" : "pequena"}`}
          onClick={toggleZoom}
        >
          <Image
            src={src}
            alt={alt}
            width={500}
            height={300}
            className="imagem-style"
            priority
          />
        </div>
      </div>
    </>
  );
}
