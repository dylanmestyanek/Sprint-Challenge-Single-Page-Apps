import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

import EpisodeCard from "./EpisodeCard";

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

export default function EpisodeList() {
  const [episodes, setEpisodes] = useState([]);
  const [seasonOne, setSeasonOne] = useState([]);
  const [seasonTwo, setSeasonTwo] = useState([]);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/episode")
      .then(respo => setEpisodes(respo.data.results))
      .catch(err => console.log('Failed axios', err));
  }, []);

  useEffect(() => {
    setSeasonOne(episodes.filter(episode => episode.episode.includes('S01')));
    setSeasonTwo(episodes.filter(episode => episode.episode.includes('S02')));
  }, [episodes]);

  return (
    <CharacterPageContainer>
      <NavLink to="/" className="homeLink">Return to Main Page</NavLink>
      <CharacterContainer>
          <h2> Season 1 </h2>
        {
            seasonOne.map(episode => 
                <EpisodeCard key={episode.id} episode={episode} />
          )
        }
            <h2> Season 2 </h2>
        {
            seasonTwo.map(episode => 
                <EpisodeCard key={episode.id} episode={episode} />
          )
        }
      </CharacterContainer>
    </CharacterPageContainer>
  );
}
