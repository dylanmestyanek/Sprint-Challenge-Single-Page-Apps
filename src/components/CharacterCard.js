import React from "react";

export default function CharacterCard({ character }) {
  console.log(character)
  return  (
    <div>
      <img src={character.image} alt="Rick and Morty Toon" />
      <h2>{character.name}</h2>
      <p>Gender: {character.gender}</p>
      <p>Species: {character.species}</p>
    </div>
  );
}
