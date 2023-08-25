import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Instance from "../../instanceAxios/Instance";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovies } from "../../getData/getMovies";
import "./movies.css";
import UseDate from "../../customHook/useDate";
import Date from "../../components/date/Date";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { getMoviesBySearch } from "../../getData/getMoviesBySearch";
import { favoriteMovies } from "../../slice/favorite.Slice";

const Movies = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [favoriteID, setFavoriteID] = useState([]);
  const [disabled, setDisabled] = useState(true);
  const allMovies = useSelector((state) => state.allMovies);
  const favorite = useSelector((state) => state.favorite);
  const dispatch = useDispatch();
  // console.log(favorite);
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getAllMovies(pageNumber));
  }, [dispatch, pageNumber]);
  const incremant = () => {
    setPageNumber((n) => n + 1);
    setDisabled(false);
  };
  const decremant = () => {
    if (pageNumber > 1) {
      setPageNumber((n) => n - 1);
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
  useEffect(() => {
    let arrFavoriteID = favorite.movies.map((fav) => fav.id);
    setFavoriteID(arrFavoriteID);
  }, [favorite]);
  // console.log(favorite);
  const addInFavorite = (movie) => {
    if (favoriteID.includes(movie.id)) {
      let filter = favorite.movies.filter((fav) => fav.id !== movie.id);
      dispatch(favoriteMovies(filter));
    } else {
      dispatch(favoriteMovies([...favorite.movies, movie]));
    }
  };

  return !allMovies.isload ? (
    <Container className="movies mt-4">
      <h3>Popular Movies</h3>
      <Row>
        <Col lg={2}></Col>
        <Col lg={10}>
          <Row className="row-cols-2 row-cols-md-3 row-cols-lg-5 ">
            {allMovies.movies.map((movie) => (
              <Col className="mb-4 " key={movie.id}>
                <Card>
                  <Card.Img
                    variant="top"
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    className="img-fluid"
                  />
                  <div className="icons">
                    {favoriteID.includes(movie.id) ? (
                      <FaHeart
                        onClick={() => addInFavorite(movie)}
                        className="favorite-icon"
                      />
                    ) : (
                      <FaRegHeart onClick={() => addInFavorite(movie)} />
                    )}
                  </div>
                  <Card.Body className=" ">
                    <div className="wrap-range">
                      <p className="range">
                        {movie.vote_average * 10}

                        <span className="icon">%</span>
                      </p>
                    </div>
                    <Card.Text className="title mb-0 mt-1">
                      {movie.title}
                    </Card.Text>

                    <Date data={movie.release_date} />
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <div className="pagination mb-5 d-flex justify-content-center">
            <div>
              <button
                disabled={disabled}
                style={{ opacity: pageNumber === 1 && ".5" }}
                className=" me-3"
                onClick={decremant}
              >
                Previous
              </button>
              <button onClick={incremant}>Next</button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  ) : (
    <h1>dd</h1>
  );
};

export default Movies;
