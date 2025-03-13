import './Signup.css';
import React, { useState } from 'react';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    id: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //서버로 데이터 이동하는 부분
    if (formData.password !== formData.confirmPassword) { //비밀번호 확인
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    alert('회원가입이 완료되었습니다!');
  };

  return (
    <div className="Signup">
      <div className="Signup-text">회원가입</div>
      <form onSubmit={handleSubmit} className="Signup-form">

        <div className="form-group">
          회원 정보 입력
        </div>
        <div className="form-group">
          <label htmlFor="username">닉네임</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="닉네임을 입력하세요"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="id">아이디</label>
          <input
            type="id"
            id="id"
            name="id"
            value={formData.id}
            onChange={handleChange}
            placeholder="아이디를 입력하세요"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="비밀번호를 입력하세요"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">비밀번호 확인</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="비밀번호를 다시 입력하세요"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">이메일</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="이메일을 입력하세요"
            required
          />
        </div>

        <button type="submit" className="Signup-button">
          회원가입
        </button>
      </form>
    </div>
  );
};

export default Signup;