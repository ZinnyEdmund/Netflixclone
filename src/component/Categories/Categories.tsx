import { useState } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { LiaTimesSolid } from "react-icons/lia";
import { IoIosArrowForward } from "react-icons/io";
import "./Categories.css";

// Images
import squidgame1 from "../../Images/squidgame1.webp";
import straw1 from "../../Images/straw1.jpg";
import untildawn3 from "../../Images/untildawn3.jpg";
import ginny1 from "../../Images/ginny1.jpg";
import territorial from "../../Images/territorial.jpg";
import madea from "../../Images/madea.jpg";
import havoc1 from "../../Images/havoc1.webp";
import sandman from "../../Images/sandman.jpg";
import stranger from "../../Images/stranger.jpg";
import kraven from "../../Images/kraven.jpg";
import wednesday from "../../Images/wednesday.jpg";

type Movie = {
  id: number;
  title: string;
  ageRating: string;
  year: string;
  type: string;
  genres: string;
  description: string;
  img: string;
};

const Categories = () => {
  const [position, setPosition] = useState(0);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const visibleSlides = 5;
  const slideWidth = 175; // px

  const movieList: Movie[] = [
    {
      id: 1,
      title: "Squid Game",
      ageRating: "+17",
      year: "2025",
      type: "TV Series",
      genres: "Survival drama",
      description:
        "Hundreds of cash-strapped players accept a strange invitation to compete in deadly children’s games for a massive prize, but only one can survive.",
      img: squidgame1,
    },
    {
      id: 2,
      title: "Straw",
      ageRating: "+15",
      year: "2025",
      type: "Netflix",
      genres: "Drama",
      description:
        "A struggling single Black mother’s day spirals out of control, forcing impossible choices as she fights to protect her ill daughter.",
      img: straw1,
    },
    {
      id: 3,
      title: "Untildawn",
      ageRating: "+16",
      year: "2025",
      type: "TV Series",
      genres: "Horror",
      description: "Hundreds risk lives for survival and a massive prize.",
      img: untildawn3,
    },
    {
      id: 4,
      title: "Ginny and Georgina",
      ageRating: "+16",
      year: "2025",
      type: "TV Series",
      genres: "Drama",
      description:
        "A university crew revisits a cursed mountain cabin, confronting death, and themselves, when they come back to life.",
      img: ginny1,
    },
    {
      id: 5,
      title: "Ex-territorial",
      ageRating: "+16",
      year: "2025",
      type: "TV Series",
      genres: "Action",
      description:
        "A survival specialist ventures into remote wilderness, only to encounter malevolent forces—nature and poachers—on a deadly trek.",
      img: territorial,
    },
    {
      id: 6,
      title: "Lovestory",
      ageRating: "+16",
      year: "2025",
      type: "TV Series",
      genres: "Drama",
      description:
        "A director explores modern relationships through the eyes of 2000s-born friends running a wedding business.",
      img: madea,
    },
    {
      id: 7,
      title: "Havoc",
      ageRating: "+16",
      year: "2025",
      type: "TV Series",
      genres: "Action",
      description:
        "Detective Walker dives into a criminal underworld to rescue a politician’s son after a drug deal collapses.",
      img: havoc1,
    },
    {
      id: 8,
      title: "Sandman",
      ageRating: "+18",
      year: "2025",
      type: "TV Series",
      genres: "Sci‑Fi",
      description:
        "Morpheus, King of Dreams, journeys through realms to reclaim his stolen power.",
      img: sandman,
    },
    {
      id: 9,
      title: "Stranger Things",
      ageRating: "+16",
      year: "2025",
      type: "TV Series",
      genres: "Mystery",
      description:
        "In 1980s Hawkins, a missing boy triggers supernatural mysteries and secret experiments.",
      img: stranger,
    },
    {
      id: 10,
      title: "Kraven",
      ageRating: "+16",
      year: "2025",
      type: "TV Series",
      genres: "Action",
      description:
        "After surviving a lion attack, Sergei Kravinoff becomes the animal-powered vigilante Kraven.",
      img: kraven,
    },
    {
      id: 11,
      title: "Wednesday",
      ageRating: "+16",
      year: "2025",
      type: "TV Series",
      genres: "Supernatural",
      description:
        "Wednesday Addams navigates life at Nevermore Academy while unraveling a dark mystery.",
      img: wednesday,
    },
  ];

  const maxPosition = movieList.length - visibleSlides;

  const moveSlide = (direction: number) => {
    let newPosition = position + direction;
    if (newPosition < 0) newPosition = 0;
    if (newPosition > maxPosition) newPosition = maxPosition;
    setPosition(newPosition);
  };

  return (
    <section className="category_section">
      <div className="trending-header">
        <h1>Trending Now</h1>
      </div>

      {selectedMovie ? (
        <div className="movie-details">
          <img src={selectedMovie.img} alt={selectedMovie.title} />
          <h3>{selectedMovie.title}</h3>
          <div>
            <p>{selectedMovie.year}</p>
            <p>{selectedMovie.ageRating}</p>
            <p>{selectedMovie.type}</p>
            <p>{selectedMovie.genres}</p>
          </div>
          <p>{selectedMovie.description}</p>
          <button className="Movie_Button1">
            Get Started{" "}
            <span className="span">
              <IoIosArrowForward />
            </span>
          </button>
          <button onClick={() => setSelectedMovie(null)} className="Movie_button">
            <span>
              <LiaTimesSolid size={25} />{" "}
            </span>
          </button>
        </div>
      ) : (
        <div className="slider-container">
          {position > 0 && (
            <button className="slider-btn left" onClick={() => moveSlide(-2)}>
              <MdArrowBackIos color="white" size={20} />
            </button>
          )}

          <div className="slider">
            <div
              className="slide-track"
              style={{ transform: `translateX(${-position * slideWidth}px)` }}
            >
              {movieList.map((src, index) => (
                <img
                  key={index}
                  src={src.img}
                  alt={`Slide ${index + 1}`}
                  className="slide"
                  onClick={() => setSelectedMovie(src)}
                />
              ))}
            </div>
          </div>

          {position < maxPosition && (
            <button className="slider-btn right" onClick={() => moveSlide(2)}>
              <MdArrowForwardIos color="white" size={20} />
            </button>
          )}
        </div>
      )}
    </section>
  );
};

export default Categories;
