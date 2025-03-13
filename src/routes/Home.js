import React from 'react';
import './Home.css';
import sample_img from "./sample.png";
import sample2_img from "./sample2.png";

import { Link } from 'react-router-dom'; // 제품 상세 페이지로 이동

const products = [ // 제품 정보(이름, 가격, 설명, 사진)
  { id: 1, name: "상의1", price: 30000, text: "상의1 설명", image: sample_img },
  { id: 2, name: "상의2", price: 30000, text: "상의2 설명", image: sample_img },
  { id: 3, name: "상의3", price: 30000, text: "상의3 설명", image: sample_img },
  { id: 4, name: "하의1", price: 30000, text: "하의1 설명", image: sample2_img },
  { id: 5, name: "하의2", price: 30000, text: "하의2 설명", image: sample2_img },
  { id: 6, name: "하의3", price: 30000, text: "하의3 설명", image: sample2_img }
];

const Home = () => {
  return (
    <div className="home">
      <div className="home-text">상의</div>

      <div className="product-container">

        {products.slice(0, 3).map((product) => (
          <div className="product-item" key={product.id}>

            <Link to={`/Product/${product.id}`}>
              <img src={product.image} alt={product.name} className="product-image" />
            </Link>

            <div className="product-text">
              <h3>{product.name}</h3>
              <h3>{product.price}원</h3>
              <p>{product.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="home-text">하의</div>

      <div className="product-container">

        {products.slice(3).map((product) => (
          <div className="product-item" key={product.id}>

            <Link to={`/Product/${product.id}`}>
              <img src={product.image} alt={product.name} className="product-image" />
            </Link>

            <div className="product-text">
              <h3>{product.name}</h3>
              <h3>{product.price}원</h3>
              <p>{product.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;