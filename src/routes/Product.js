import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Product.css";
import sample_img from "./sample.png";
import sample2_img from "./sample2.png";

const products = [
  { id: 1, name: "상의1", price: 30000, text: "상의1 설명", image: sample_img },
  { id: 2, name: "상의2", price: 30000, text: "상의2 설명", image: sample_img },
  { id: 3, name: "상의3", price: 30000, text: "상의3 설명", image: sample_img },
  { id: 4, name: "하의1", price: 30000, text: "하의1 설명", image: sample2_img },
  { id: 5, name: "하의2", price: 30000, text: "하의2 설명", image: sample2_img },
  { id: 6, name: "하의3", price: 30000, text: "하의3 설명", image: sample2_img }
];

const Product = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  useEffect(() => {
    {/*스크롤 위로*/ }
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    {/*상품 페이지 확인*/ }
    return <h2>상품을 찾을 수 없습니다.</h2>;
  }

  return (
    <div className="product">
      <div className="product-container">
        <div className="product-image-container">
          <img src={product.image} alt={product.name} className="product-image" />
        </div>

        <div className="product-info">
          <h1>{product.name}</h1>
          <h2>{product.price}원</h2>
          <p>{product.text}</p>
          <div className="button-container">
            <button className="add-to-cart">장바구니 추가</button>
            <button className="buy-now">구매하기</button>
          </div>

        </div>
      </div>

      <div className="product-details">
        <h2>상품 상세 정보</h2>
        <p> {/*이 부분 상세 정보, products에 추가 예정*/}
          여기에 상품 상세 설명이 들어감. <br />
          다양한 제품의 특징, 재질, 크기, 세탁 방법 등의 정보를 확인할 수 있게 추가할 예정.
        </p>
      </div>
    </div>
  );
};

export default Product;