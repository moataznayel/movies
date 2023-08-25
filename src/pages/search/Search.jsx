import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { getMoviesBySearch } from "../../getData/getMoviesBySearch";
import { Badge, Card, Col, Container, Row } from "react-bootstrap";
import "./search.css";
import Date from "../../components/date/Date";
import { getTvBySearch } from "../../getData/getTvBySearch";
import ResultSearch from "../../components/resultSearch/ResultSearch";
const Search = () => {
  const [showtv, setShowTv] = useState(false);

  const { state } = useLocation();

  const allMovies = useSelector((state) => state.allMoviesBySearch);
  const alltv = useSelector((state) => state.allTvBySearch);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMoviesBySearch(state));
    dispatch(getTvBySearch(state));
  }, [dispatch, state]);
  console.log(alltv);
  return (
    allMovies.isload === false && (
      <Container className="page-search mt-5">
        <Row>
          <Col md={4} lg={3}>
            <div className="result mb-5">
              <Card>
                <Card.Header>Search Results</Card.Header>
                <div className="Wrap-button" onClick={() => setShowTv(false)}>
                  <div className="button">
                    <h5>Movies</h5>
                    <h5>
                      <Badge>{allMovies.movies.total}</Badge>
                    </h5>
                  </div>
                </div>
                <div className="Wrap-button " onClick={() => setShowTv(true)}>
                  <div className="button">
                    <h5>TV Shows</h5>
                    <h5>
                      <Badge bg="secondary">{alltv.tv.total}</Badge>
                    </h5>
                  </div>
                </div>
                <div className="Wrap-button">
                  <div className="button">
                    <h5>People</h5>
                    <h5>
                      <Badge bg="secondary">0</Badge>
                    </h5>
                  </div>
                </div>
                <div className="Wrap-button">
                  <div className="button">
                    <h5>Companies</h5>
                    <h5>
                      <Badge bg="secondary">0</Badge>
                    </h5>
                  </div>
                </div>
                <div className="Wrap-button">
                  <div className="button">
                    <h5>Collections</h5>
                    <h5>
                      <Badge bg="secondary">0</Badge>
                    </h5>
                  </div>
                </div>
                <div className="Wrap-button">
                  <div className="button">
                    <h5>Keywords</h5>
                    <h5>
                      <Badge bg="secondary">0</Badge>
                    </h5>
                  </div>
                </div>
                <div className="Wrap-button">
                  <div className="button">
                    <h5>Networks</h5>
                    <h5>
                      <Badge bg="secondary">0</Badge>
                    </h5>
                  </div>
                </div>
              </Card>
            </div>
          </Col>
          <Col md={8} lg={9}>
            {/* {allMovies.movies.movies.length > 0 &&
              allMovies.movies.movies.map((movie) => (
                <Card key={movie.id} className="mb-3 wapper">
                  <Row className="h-100">
                    <Col xs={3} md={2} className="h-100 imges">
                      {movie.poster_path !== null ? (
                        <img
                          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                          alt={movie.title}
                        />
                      ) : (
                        <img alt="notfound" />
                      )}
                    </Col>
                    <Col xs={9} md={10} className="py-3 ">
                      <h3 className="title">{movie.title}</h3>

                      <Date data={movie.release_date} />

                      <p className="overView mt-1">{movie.overview}</p>
                    </Col>
                  </Row>
                </Card>
              ))} */}
            {showtv ? (
              <ResultSearch data={alltv.tv.tv} />
            ) : (
              <ResultSearch data={allMovies.movies.movies} />
            )}
            {/* <ResultSearch /> */}
          </Col>
        </Row>
      </Container>
    )
    // <h1>dd</h1>
    // console.log(allMovies.movies.movies.length)
  );
};

export default Search;
