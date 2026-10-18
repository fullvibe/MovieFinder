import { useEffect, useState } from "react";
import MovieCard from "./components/MovieCard";
import Header from "./components/Header";
import Select from "./components/Select";

function App() {
  const movies = [
    {
      id: 1,
      title: "Interstellar",
      genre: "Sci-Fi",
      year: 2014,
      rating: 8.7,
    },
    {
      id: 2,
      title: "Spider-Man",
      genre: "Superhero",
      year: 2026,
      rating: 9.1,
    },
    {
      id: 3,
      title: "Astral",
      genre: "Horror",
      year: 2010,
      rating: 7.2,
    },
  ];

  const [search, setSearch] = useState("");
  const [genre, serGenre] = useState("All");
  const [favorites, setFavorites] = useState([]);
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

  const filteredMovies = filterMovies();

  useEffect(() => {
    if (search === "") {
      document.title = `Movie Finder`;
    } else {
      document.title = `finded: ${filteredMovies.length} movies`;
    }
  }, [filteredMovies, search]);

  return (
    <div className="container">
      <Header />
      <Select
        search={search}
        setSearch={setSearch}
        genre={genre}
        serGenre={serGenre}
        onlyFavorite={onlyFavorite}
        setOnlyFavorite={setOnlyFavorite}
      />
      <div className="movie__list">
        {filteredMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            isFavorite={favorites.includes(movie.id)}
            toggleFavorite={toggleFavorite}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
