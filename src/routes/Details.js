import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import './Details.css';
import { useLogin } from "../context/LoginContext";
import { useCart } from "../context/CartContext";

const Detail = () => {
  const location = useLocation();
  const { state } = location;
  const product = state;
  const navigate = useNavigate();

  // LoginContext에서 로그인 상태를 가져옵니다.
  const { isLoggedIn } = useLogin();
  const { addToCart } = useCart();

  const handleOrderClick = () => {
    // 로그인이 되어 있지 않으면 경고문을 띄운 후 로그인 페이지로 이동
    if (!isLoggedIn) {
      alert("로그인 후 이용해주세요.");
      navigate("/login"); // 로그인 페이지로 이동
    } else {
      // 상품 정보를 state로 주문 페이지로 넘기기
      navigate("/order", { state: { product } });
    }
  };

  const handleAddToCart = () => {
    addToCart(product);
    alert("장바구니에 추가되었습니다!");
  };

  return (
    <div className="product">
      <div className="product-container">
        <div className="product-image-container">
          <img src={product.image} alt={product.name} className="product-image" />
        </div>

        <div className="product-info">
          <h1>{product.title}</h1>
          <h2>{product.price}원</h2>
          <p>{product.content}</p>
          <div className="button-container">
            <button className="add-to-cart" onClick={handleAddToCart}>
              장바구니 추가
            </button>
            <button className="buy-now" onClick={handleOrderClick}>구매하기</button>
          </div>
        </div>
      </div>

      <div className="product-details">
        <h2>상품 상세 정보</h2>
        <p>
          여기에 상품 상세 설명이 들어감. <br />
          다양한 제품의 특징, 재질, 크기, 세탁 방법 등의 정보를 확인할 수 있게 추가할 예정.
        </p>
      </div>
    </div>
  );
}

export default Detail;
