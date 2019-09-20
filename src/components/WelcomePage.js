import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HeaderStyles = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;

  .characterLink {
    text-decoration: none;
    background: #97cbd8;
    color: black;
    padding: 5px 10px;
    border-radius: 3px;
    margin: 30px auto 0;
    width: 200px;
    text-align: center;
    transition: all .3s;

    &:hover {
      background: #2b91a9;
      color: white;
    }
  }
`;

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <HeaderStyles>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
        <NavLink className="characterLink" to="/character-list">View Characters</NavLink>
      </HeaderStyles>
    </section>
  );
}


