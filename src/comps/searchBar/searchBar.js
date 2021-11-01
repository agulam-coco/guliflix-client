import React from "react";
import URL from "../../hostname/hostname";
import { useState } from "react";

import "./search.css";
import SearchResult from "./searchResult";

export default function SearchBar(props) {
  const [searchResults, setSearchResults] = useState([null]);

  return (
    <div id="search-bar-container">
      <input
        type="text"
        role="searchbox"
        placeholder="Search Shows..."
        onKeyUp={async (event) => {
          let matches = await fetchSearchData(event.target, props.allowSeasons);
          setSearchResults(matches);
        }}
      />
      <section id="search-results-section">
        {
          //no results found
          (!searchResults.length && <SearchResult noResults={true} />) ||
            //search result is too short or is a whitespace
            (!searchResults[0] && <div></div>) ||
            //map reuslts to components
            searchResults.map((match, index) => {
              let genre = true;
              let textContent;

              if (match) {
                let temp = match.split("/");

                if (temp.length > 1) {
                  textContent = temp.slice(1);
                  genre = false;
                }
              }

              return (
                <SearchResult
                  target={match}
                  key={index}
                  genre={genre}
                  textContent={textContent}
                />
              );
            })
        }
      </section>
    </div>
  );
}

async function fetchSearchData(params, allowSeasons) {
  let query = params.value.trim();

  //return if data is null or query is too short
  if (!query | (query.length < 3)) return [null];

  let data = await fetch(`${URL}/search-query`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query: params.value, allowSeasons: allowSeasons }),
  });

  let json = await data.json();
  let matches = json.matches;

  return matches;
}
