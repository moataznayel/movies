import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTv } from "../../getData/getTv";
import { Card, Col, Container, Row } from "react-bootstrap";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import Date from "../../components/date/Date";
import "./tv.css";
import { favoriteTv } from "../../slice/favorite.Slice";
const Tv = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [favoriteID, setFavoriteID] = useState([]);
  const [disabled, setDisabled] = useState(true);
  const allTv = useSelector((state) => state.allTv);
  const favorite = useSelector((state) => state.favorite);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getTv(pageNumber));
  }, [dispatch, pageNumber]);
  // console.log(allTv);
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
    let arrFavoriteID = favorite.tv.map((fav) => fav.id);
    setFavoriteID(arrFavoriteID);
  }, [favorite.tv]);
  // console.log(favorite);
  const addInFavorite = (tv) => {
    if (favoriteID.includes(tv.id)) {
      let filter = favorite.tv.filter((fav) => fav.id !== tv.id);
      dispatch(favoriteTv(filter));
    } else {
      dispatch(favoriteTv([...favorite.tv, tv]));
    }
  };

  return !allTv.isload ? (
    <Container className="movies mt-4">
      <h3>Popular TV Shows</h3>
      <Row>
        <Col lg={2}></Col>
        <Col lg={10}>
          <Row className="row-cols-2 row-cols-md-3 row-cols-lg-5 ">
            {allTv.tv.map((tv) => (
              <Col className="mb-4 " key={tv.id}>
                <Card>
                  {tv.poster_path !== null && (
                    <Card.Img
                      variant="top"
                      src={`https://image.tmdb.org/t/p/w500/${tv.poster_path}`}
                      className="img-fluid"
                    />
                  )}
                  <div className="icons">
                    {favoriteID.includes(tv.id) ? (
                      <FaHeart
                        onClick={() => addInFavorite(tv)}
                        className="favorite-icon"
                      />
                    ) : (
                      <FaRegHeart onClick={() => addInFavorite(tv)} />
                    )}
                  </div>
                  <div style={{ height: "30%" }}>
                    <Card.Body className=" ">
                      <div className="wrap-range">
                        <p className="range">
                          {tv.vote_average * 10}

                          <span className="icon">%</span>
                        </p>
                      </div>
                      <Card.Text className="title mb-0 mt-1">
                        {tv.original_name}
                      </Card.Text>

                      <Date data={tv.first_air_date} />
                    </Card.Body>
                  </div>
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

export default Tv;
