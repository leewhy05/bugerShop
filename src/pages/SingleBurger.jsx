import React from "react";
import { useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { Card } from "react-bootstrap";
import useFetch from "../customHook/UseFetch";

const SingleBurger = () => {
  const { _id } = useParams();
  const { data, loading } = useFetch(
    `https://eggys.onrender.com/jazzyburger/all${_id}`
  );
  const { title, price, image, description } = data;
  return (
    <div>
      <div className="container">
        <h2>{loading && <ClipLoader color={"red"} size={50} />}</h2>

        <div className="row justify-content-between align-items-center mt-4">
          <div className="col-sm-12 text-center col-md-4">
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={image} className="img-fluid " />
            </Card>
          </div>

          <div className="col-sm-12 col-md-7">
            <h1 className="text-danger fw-bold">{title}</h1>
            <h4 className="text-success lh-base">{description}</h4>
            <h3>{price}</h3>
            <button
              className="btn btn-primary btn-lg w-50 fs-5"
            >
              Add Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBurger;
