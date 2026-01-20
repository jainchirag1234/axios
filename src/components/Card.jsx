import { NavLink } from "react-router-dom";
import "./Card.css";
export const Card = ({ movieData }) => {
  const { Poster, imdbID } = movieData;
  return (
    <>
      <li className="hero-container">
        <div className="main-container">
          <div className="poster-container">
            <img src={Poster} className="poster" alt={imdbID} />
          </div>
          <div className="ticket-container">
            <div className="ticket__content">
              <NavLink to={`/movie/${imdbID}`}>
                <div className="ticket__buy-btn">Watch now</div>
              </NavLink>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};
