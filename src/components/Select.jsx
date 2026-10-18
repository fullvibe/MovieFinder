import React from "react";
import { genreList } from "../movies";

export default function Select({
  search,
  setSearch,
  genre,
  setGenre,
  onlyFavorite,
  setOnlyFavorite,
  clearFilters,
}) {
  return (
    <div className="select">
      <input
        className="select__input"
        type="text"
        placeholder="write movie title"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <select
        type="gengre"
        className="option__select"
        value={genre}
        onChange={(event) => setGenre(event.target.value)}
      >
        <option value="All">All</option>
        {genreList.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
      <div className="favorite__input">
        <input
          id="favorite"
          type="checkbox"
          checked={onlyFavorite}
          onChange={(event) => setOnlyFavorite(event.target.checked)}
        />
        <label for="favorite">Only Favorites</label>
      </div>
      <button className="clear" onClick={clearFilters}>
        clear filters
      </button>
    </div>
  );
}
