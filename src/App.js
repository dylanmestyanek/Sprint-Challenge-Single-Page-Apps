import React from "react";
import { Route, NavLink } from "react-router-dom";

import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";


export default function App() {
  return (
    <main>
      <Header />
      <Route path="/" exact component={WelcomePage} />
      <Route path="/character-list" component={CharacterList} />
    </main>
  );
}
