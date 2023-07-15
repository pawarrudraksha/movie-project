import React, { useEffect } from "react";
import "./MovieDetail.scss";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  fetchAsyncMovieOrShowDetail,
  getSelectedMovieOrShow,
  removeSelectedMovieOrShow,
} from "../../features/movies/MovieSlice";
import { AiFillStar } from "react-icons/ai";
import { BsCalendarEvent } from "react-icons/bs";
import { FcFilmReel } from "react-icons/fc";
import { FiThumbsUp } from "react-icons/fi";

const MovieDetail = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedMovieOrShow);
  console.log(data);
  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetail(imdbID));
    return () => {
      dispatch(removeSelectedMovieOrShow());
    };
  }, [dispatch, imdbID]);

  if (Object.keys(data).length === 0) {
    return <div>...Loading</div>;
  }
  return (
    <div className="movie-section">
      <div className="section-left">
        <div className="movie-title">{data.Title}</div>
        <div className="movie-rating">
          <span className="AiFillStar">
            IMDB Rating : {data.imdbRating}
            <span>
              <AiFillStar />
            </span>
          </span>
          <span className="thumbsUp">
            IMDB Votes : {data.imdbVotes}
            <span>
              <FiThumbsUp />
            </span>
          </span>
          <span className="filmReel">
            Runtime
            <span>
              <FcFilmReel />
            </span>
            : {data.Runtime}
          </span>
          <span className="calender">
            Year
            <span>
              <BsCalendarEvent />
            </span>
            : {data.Year}
          </span>
        </div>
        <div className="movie-plot">{data.Plot}</div>
        <div className="movie-info">
          <div>
            <span>Director</span>
            <span>{data.Director}</span>
          </div>
          <div>
            <span>Stars</span>
            <span>{data.Actors}</span>
          </div>
          <div>
            <span>Genre</span>
            <span>{data.Genre}</span>
          </div>
          <div>
            <span>Languages</span>
            <span>{data.Language}</span>
          </div>
          <div>
            <span>Awards</span>
            <span>{data.Awards}</span>
          </div>
        </div>
      </div>
      <div className="section-right">
        <img src={data.Poster} alt={data.Title} />
      </div>
    </div>
  );
};

export default MovieDetail;
