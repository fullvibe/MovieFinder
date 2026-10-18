import { useEffect, useState } from "react";
import MovieCard from "./components/MovieCard";
import Header from "./components/Header";
import Select from "./components/Select";
import { movies } from "./movies";

function App() {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("All");
  const [favorites, setFavorites] = useState(getFavorites());
  const [onlyFavorite, setOnlyFavorite] = useState(false);

  // useEffect(() => {
  //   console.log(`search changed: ${search}`)
  // }, [search]);

  // useEffect(() =>{
  //   console.log(`after any render`)
  // })

  // useEffect(() => {
  //   console.log(`only one time`)
  // }, [])

  function filterMovies() {
    let result = movies;

    if (genre != "All") {
      result = movies.filter((movie) => movie.genre === genre);
    }

    const searchResult = result.filter((movie) =>
      movie.title.toLowerCase().includes(search.toLowerCase())
    );

    if (onlyFavorite) {
      return searchResult.filter((movie) => favorites.includes(movie.id));
    } else {
      return searchResult;
    }
  }

  function toggleFavorite(id) {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((movieId) => movieId != id));
    } else {
      setFavorites((prev) => [...prev, id]);
    }
  }

  function clearFilters() {
    setSearch("");
    setGenre("All");
    setOnlyFavorite(false);
  }

  const filteredMovies = filterMovies();

  useEffect(() => {
    if (search === "") {
      document.title = `Movie Finder`;
    } else {
      document.title = `finded: ${filteredMovies.length} movies`;
    }
  }, [filteredMovies, search]);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  function getFavorites(){
    const saveFavorites = localStorage.getItem("favorites")
    if(saveFavorites){
      return JSON.parse(saveFavorites)
    } else{
      return []
    }
  }

  return (
    <div className="container">
      <Header />
      <Select
        search={search}
        setSearch={setSearch}
        genre={genre}
        setGenre={setGenre}
        onlyFavorite={onlyFavorite}
        setOnlyFavorite={setOnlyFavorite}
        clearFilters={clearFilters}
      />
      <div className="movie__list">
        {filteredMovies.length === 0 ? (
          <p className="movie__found">Movies Not Found</p>
        ) : (
          filteredMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              isFavorite={favorites.includes(movie.id)}
              toggleFavorite={toggleFavorite}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
