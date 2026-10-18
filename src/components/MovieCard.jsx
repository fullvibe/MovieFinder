import React from "react";
import favorite from "../assets/favorite.svg";

export default function MovieCard({ movie, isFavorite, toggleFavorite }) {
  return (
    <div className="movie__card">
      <img
        className="movie__img"
        src="https://images-s.kinorium.com/movie/1080/1606746.jpg?1725567671"
        alt=""
      />
      <h2 className="movie__h2">{movie.title}</h2>
      <div className="gategory__movie">
        <div className="movie__gengre">{movie.genre}</div>
        <p></p>
        <div className="movie__year">{movie.year}</div>
      </div>
      <div className="movie__rating">{movie.rating}</div>
      <button
        className={
          isFavorite
            ? "movie__favorite movie__favorite-active"
            : "movie__favorite"
        }
        onClick={() => toggleFavorite(movie.id)}
      >
        <img src={favorite} alt="" />
      </button>
    </div>
  );
}
