'use client';
import { useState } from "react";

export default function ContadorLikes() {
    const [likes, setLikes] = useState<number>(0);

    return (
        <div style={{ padding: '20px', border: '1px solid #ccc'}}>
            <p>Total de curtidas: {likes}</p>

            <button onClick={() => setLikes(likes + 1)}>
                Curtir
            </button>

            <button onClick={() => setLikes(0)}>
                Resetar
            </button>
        </div>
    );
}