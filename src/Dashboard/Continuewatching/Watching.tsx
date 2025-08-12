import './watching.css'
import { useEffect, useState } from "react";
import { fetchPopularMovies } from "../../Tmdb";

const TMDB_IMAGE_URL = "https://image.tmdb.org/t/p/w500";

type Item = {
  id: string;
  title: string;
  poster_path: string;
  release_date?: string; // Add this if available
};

const PopularMovies = () => {
  const [movies, setMovies] = useState<Item[]>([]);

  useEffect(() => {
    const getMovies = async () => {
      const popular = await fetchPopularMovies();
      setMovies(popular);
    };
    getMovies();
  }, []);

  const handleMovieClick = (movie: Item) => {
    // Create YouTube search URL
    const year = movie.release_date ? new Date(movie.release_date).getFullYear() : '';
    const searchQuery = encodeURIComponent(`${movie.title} ${year} trailer`);
    const youtubeUrl = `https://www.youtube.com/results?search_query=${searchQuery}`;
    
    // Open in new tab
    window.open(youtubeUrl, '_blank');
  };

  return (
    <section className="watching_cont">
      <div className="De_movieheader">
        <h1>Continue watching</h1>
      </div>
      <div className="movies-container">
        {movies.length === 0 ? (
          <p>No movies found.</p>
        ) : (
          movies.map((movie) => (
            <div 
              key={movie.id} 
              className="movie-card"
              onClick={() => handleMovieClick(movie)}
              style={{ cursor: 'pointer' }}
            >
              <img
                src={`${TMDB_IMAGE_URL}${movie.poster_path}`}
                alt={movie.title}
              />
              <h3>{movie.title}</h3>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default PopularMovies;