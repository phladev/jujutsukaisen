'use client';

import { useState } from 'react';
import Image from 'next/image';
import { characters } from '@/data/characters';
import styles from './CharacterGrid.module.css';

export default function CharacterGrid() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = characters.find((c) => c.id === selectedId) ?? null;

  return (
    <div>
      <div className={styles.grid} role="list" aria-label="Lista de personagens">
        {characters.map((character, index) => (
          <button
            key={character.id}
            role="listitem"
            className={`${styles.card} ${selectedId === character.id ? styles.selected : ''}`}
            onClick={() => setSelectedId(character.id)}
            aria-pressed={selectedId === character.id}
            aria-label={`Ver informações sobre ${character.name}`}
            title={character.name}
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <Image
              src={character.iconSrc}
              alt={character.name}
              width={60}
              height={60}
              className="imgs"
            />
          </button>
        ))}
      </div>

      <div
        id="msg"
        role="region"
        aria-live="polite"
        aria-label="Descrição do personagem"
        className={styles.description}
      >
        {selected ? (
          <p>
            <strong>{selected.name}</strong> {selected.description}
          </p>
        ) : (
          <p>Clique na imagem do personagem que você quer saber mais sobre!</p>
        )}
      </div>
    </div>
  );
}
