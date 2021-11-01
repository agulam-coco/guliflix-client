import React from "react";
import { useState, useEffect } from "react";
import GenreContainer from "../comps/genreContainer/genreContainer";
import { fetchShowData } from "./helperfuncs/fetchShowData";
import { serverNotificationPromise } from "./helperfuncs/toastNotificationPromise";

function GenreList() {
  const [loading, setLoadingState] = useState(true);
  const [genres, setGenreData] = useState([]);

  useEffect(() => {
    async function fetchGenres() {
      let data = await serverNotificationPromise(fetchShowData(""));
      setGenreData(data.files);
      setLoadingState(false);
    }
    //fetch genre data
    try {
      fetchGenres();
    } catch (err) {
      console.error(err);
      return;
    }
  }, []);
  return (
    <>
      {/* <SearchBar allowSeasons={false} /> */}
      <main>
        <GenreContainer loading={loading} genres={genres} folder="Genres" />
      </main>
    </>
  );
}

export default GenreList;
