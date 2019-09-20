import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

import CharacterCard from "./CharacterCard";

const CharacterPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .homeLink {
    text-decoration: none;
    background: #97cbd8;
    color: black;
    padding: 5px 10px;
    border-radius: 3px;
    margin: 0 auto 30px;
    width: 200px;
    text-align: center;
    transition: all .3s;

    &:hover {
      background: #2b91a9;
      color: white;
    }
  }
`;

const CharacterContainer = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character/")
      .then(respo => setCharacters(respo.data.results))
      .catch(err => console.log('Failed axios', err));
  }, []);

  return (
    <CharacterPageContainer>
      <NavLink to="/" className="homeLink">Return to Main Page</NavLink>
      <CharacterContainer>
        {
          characters.map(character => 
            <CharacterCard key={character.id} character={character} />
          )
        }
      </CharacterContainer>
    </CharacterPageContainer>
  );
}
