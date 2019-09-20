import React, { useState, useEffect } from "react";

export default function SearchForm({ 
  characters,
  setSearchResults
}) {
 const [searchTerm, setSearchTerm] = useState('')

 useEffect(() => {
    const results = characters.filter(character => character.name.toLowerCase().includes(searchTerm));
    // const results = characters.filter(character => character.name[0].toLowerCase() === searchTerm);
    searchTerm === '' 
      ? setSearchResults(characters)
      : setSearchResults(results);
 }, [searchTerm])

 const handleChange = (e) => {
   setSearchTerm(e.target.value);
 }

  return (
    <section className="search-form">
     <form>
       <input
        name="search"
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
       />
     </form>
    </section>
  );
}
