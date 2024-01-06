import React from "react";
import logo from "../asset/image/logo_sendora_new-v2023.png";
import "./header.css";

const Header = () => {
  return (
    <React.Fragment>
      <div className="content">
        <div className="frame">
          <div className="above">
            <div className="logo">
              <img src={logo} className="logo-header" alt="" />
            </div>
            <div className="search-frame">
              <select>
                <option>Sản phẩm</option>
                <option>Bàn ghế</option>
              </select>
              <input
                type="text"
                placeholder="bạn tìm sản phẩm gì..."
                id="search-header"
              />
              <button>Search</button>
            </div>
            <div className="call-block">Gọi ngay</div>
            <div className="favorite-block">Trái tim</div>
            <div className="cart-block">Giỏ hàng</div>
            <div className="register-block">Đăng ký</div>
          </div>
          <hr></hr>
          <div className="bottom"></div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
