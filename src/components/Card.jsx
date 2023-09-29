import React from "react";
import "./Card.css";

const Card = ({data}) => {
  return (
    <div className="cards">
      <div className="my-card">
        <div className="upper-card">
          <p className="primary-text">Amount Per Serving</p>
          <p className="sec-text">{data.amountPerServing.value}</p>
        </div>
        <div className="lower-card">
          <p className="low-text">{data.amountPerServing.percentage}</p>
        </div>
      </div>
      <div className="my-card">
        <div className="upper-card">
          <p className="primary-text">Total Fat</p>
          <p className="sec-text">{data.totalFat.value}</p>
        </div>
        <div className="lower-card">
          <p className="low-text">{data.totalFat.percentage}</p>
        </div>
      </div>
      <div className="my-card">
        <div className="upper-card">
          <p className="primary-text">Sodium</p>
          <p className="sec-text">{data.sodium.value}</p>
        </div>
        <div className="lower-card">
          <p className="low-text">{data.sodium.percentage}</p>
        </div>
      </div>
      <div className="my-card">
        <div className="upper-card">
          <p className="primary-text">Total Carbohydrate</p>
          <p className="sec-text">{data.totalCarbs.value}</p>
        </div>
        <div className="lower-card">
          <p className="low-text">{data.totalCarbs.percentage}</p>
        </div>
      </div>
      <div className="my-card">
        <div className="upper-card">
          <p className="primary-text">Protein</p>
          <p className="sec-text">{data.protein.value}</p>
        </div>
        <div className="lower-card">
          <p className="low-text">{data.protein.percentage}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
