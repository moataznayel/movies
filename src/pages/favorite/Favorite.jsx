import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./favorite.css";
import Date from "../../components/date/Date";

// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
const Favorite = () => {
  const favorite = useSelector((state) => state.favorite);
  const dispatch = useDispatch();
  var settings = {
    dots: true,
    infinite: false,
    speed: 200,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  console.log(favorite);
  return (
    <Container>
      {favorite.tv.length !== 0 || favorite.movies.length !== 0 ? (
        <div className="favorite mt-4">
          <div>
            <h3>Favorite Movies</h3>
          </div>
          <Slider {...settings}>
            {favorite.movies.map((movie) => (
              <div className="wrap-card p-2 " key={movie.id}>
                <Card>
                  {movie.poster_path !== null && (
                    <Card.Img
                      variant="top"
                      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      className="img-fluid"
                    />
                  )}

                  <div style={{ height: "30%" }}>
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
                  </div>
                </Card>
              </div>
            ))}
          </Slider>
          <div>
            <h3>Favorite TV shows</h3>
          </div>
          <Slider {...settings}>
            {favorite.tv.map((tv) => (
              <div className="wrap-card p-2 " key={tv.id}>
                <Card className="">
                  {tv.poster_path !== null && (
                    <Card.Img
                      variant="top"
                      src={`https://image.tmdb.org/t/p/w500/${tv.poster_path}`}
                      className="img-fluid"
                    />
                  )}

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
              </div>
            ))}
          </Slider>
        </div>
      ) : (
        <h1>load</h1>
      )}
    </Container>
  );
};

export default Favorite;
