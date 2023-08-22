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
const Movies = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [disabled, setDisabled] = useState(true);
  const [search, setSearch] = useState("");
  const allMovies = useSelector((state) => state.allMovies);
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getAllMovies(pageNumber));
    search !== "" && dispatch(getMoviesBySearch(search));
  }, [dispatch, pageNumber, search]);

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

  return (
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
                    {/* <FaRegHeart /> */}
                    <FaHeart />
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
  );
};

export default Movies;
