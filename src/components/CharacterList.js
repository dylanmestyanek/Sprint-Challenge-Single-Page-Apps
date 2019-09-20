import React, { useEffect, useState } from "react";
import axios from "axios";

import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character/")
      .then(respo => setCharacters(respo.data.results))
      .catch(err => console.log('Failed axios', err));
  }, []);

  return (
    <section className="character-list">
      {
        characters.map(character => 
          <CharacterCard key={character.id} character={character} />
        )
      }
    </section>
  );
}
