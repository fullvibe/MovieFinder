import React from "react";

export default function Select({
  search,
  setSearch,
  genre,
  serGenre,
  onlyFavorite,
  setOnlyFavorite,
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
        onChange={(event) => serGenre(event.target.value)}
      >
        <option value="All">All</option>
        <option value="Sci-Fi">Sci-Fi</option>
        <option value="Superhero">Superhero</option>
        <option value="Horror">Horror</option>
      </select>
      <div className="favorite__input">
        <input id="favorite" type="checkbox" checked={onlyFavorite} onChange={(event) => setOnlyFavorite(event.target.checked)}/>
        <label for="favorite">Only Favorites</label>
      </div>
    </div>
  );
}
