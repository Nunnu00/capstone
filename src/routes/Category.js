import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';  // Link 추가
import axios from 'axios';
import './Category.css';

const Category = () => {
    const { category } = useParams();  // URL에서 카테고리 값을 받아옵니다.
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);  // 로딩 상태 추가

    useEffect(() => {
        setLoading(true);  // 데이터 요청 시작 시 로딩 상태 true로 설정
        axios.get('http://localhost:8080/items/list')
            .then((response) => {
                // 카테고리별로 필터링
                const filteredProducts = response.data.filter((product) => {
                    if (category === '구이류') return product.category === 'ROAST';
                    if (category === '스프류') return product.category === 'SOUP';
                    if (category === '파스타류') return product.category === 'PASTA';
                    return true;  // 아무 카테고리가 아니면 모든 제품
                });
                setProducts(filteredProducts);
                setLoading(false);  // 데이터 로딩 완료 후 로딩 상태 false로 설정
            })
            .catch((error) => {
                console.error("에러", error);
                setLoading(false);
            });
    }, [category]);  // 카테고리가 변경될 때마다 데이터 재요청

    return (
        <div className="Category">
            <h1>상품 목록</h1>
            <h2>{category} 카테고리</h2>
            {loading ? (
                <p>로딩 중...</p>  // 로딩 중일 때 메시지 표시
            ) : (
                <>
                    {products.length === 0 ? (
                        <p className="no-products">해당 카테고리에 속하는 상품이 없습니다.</p>  // 상품이 없을 때 메시지 표시
                    ) : (
                        <ul className="products">
                            {products.map((product) => (
                                <li key={product.id}>
                                    <h2>{product.name}</h2>
                                    <img src={product.image} alt={product.name} />
                                    <p>{product.content}</p>
                                    <p>Price: {product.price}원</p>
                                    <Link to={`/detail/${product.id}`} state={product}>
                                        상품 상세 보기
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </>
            )}
        </div>
    );
};

export default Category;