import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import Date from "../date/Date";

const ResultSearch = ({ data }) => {
  console.log(data);
  return data.length > 0 ? (
    data.map((movie) => (
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
            <h3 className="title">{movie.original_name}</h3>
            {movie.release_date !== undefined ? (
              <Date data={movie.release_date} />
            ) : (
              <Date data={movie.first_air_date} />
            )}
            {/* // <Date data={movie.release_date} /> */}
            <p className="overView mt-1">{movie.overview}</p>
          </Col>
        </Row>
      </Card>
    ))
  ) : (
    <h1>dd</h1>
  );
};

export default ResultSearch;
