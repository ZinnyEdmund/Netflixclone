import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const fetchPopularMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    return response.data.results || [];
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error fetching popular movies:", error.message);
    } else {
      console.error("Error fetching popular movies:", error);
    }
    return [];
  }
};

// New function to get movie trailers
export const fetchMovieTrailer = async (movieId: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}`);
    const videos = response.data.results || [];

    // Define a type for the video object
    type Video = {
      id: string;
      key: string;
      name: string;
      site: string;
      type: string;
      [key: string]: unknown;
    };

    // Find the first YouTube trailer
    const trailer = (videos as Video[]).find((video: Video) =>
      video.type === 'Trailer' && video.site === 'YouTube'
    );

    return trailer ? `https://www.youtube.com/watch?v=${trailer.key}` : null;
  } catch (error) {
    console.error("Error fetching movie trailer:", error);
    return null;
  }
};

// import axios from 'axios';

// const BASE_URL = 'https://imdbapi.com/en/API';
// const API_KEY = import.meta.env.VITE_IMDB_API_KEY;

// export const fetchPopularMovies = async () => {
//   try {
//     const response = await axios.get(`${BASE_URL}/Top250Movies/${API_KEY}`);
//     return response.data.items || [];
//   } catch (error) {
//     if (error instanceof Error) {
//       console.error("Error fetching popular movies:", error.message);
//     } else {
//       console.error("Error fetching popular movies:", error);
//     }
//     return [];
//   }
// };