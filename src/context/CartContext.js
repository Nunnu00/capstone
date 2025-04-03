import React, { createContext, useContext, useState, useEffect } from "react";

// 장바구니 Context 생성
const CartContext = createContext();

// Context Provider 컴포넌트
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        // 초기 상태를 localStorage에서 불러오기
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        // 장바구니 데이터를 localStorage에 저장
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }, [cartItems]);

    // 상품 추가
    const addToCart = (product) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((item) => item.id === product.id);
            if (existingItem) {
                return prevItems.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevItems, { ...product, quantity: 1 }];
        });
    };

    // 상품 삭제
    const removeFromCart = (id) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    // 수량 조절
    const updateQuantity = (id, quantity) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
            )
        );
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity }}>
            {children}
        </CartContext.Provider>
    );
};

// 장바구니 컨텍스트 사용 훅
export const useCart = () => useContext(CartContext);