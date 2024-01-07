import React from "react";
import logo from "../asset/image/logo_sendora_new-v2023.png";
import "./header.css";
import { LuPhone } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa6";
import { PiShoppingCart } from "react-icons/pi";

const Header = () => {
  return (
    <React.Fragment>
      <div className="content">
        <div className="frame">
          <div className="above d-flex">
            <div className="logo flex-grow-1">
              <img src={logo} className="logo-header" alt="" />
            </div>
            <div className="search-frame d-flex align-items-center">
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
            <div className="call-block d-flex align-items-center">
              <LuPhone style={{ fontSize: 30, margin: 10 }} />
              <div>
                <p>Gọi ngay</p>
                <p style={{ fontWeight: 700 }}>0934267612</p>
              </div>
            </div>
            <div className="favorite-block d-flex align-items-center">
              <div className="inside-favorite">
                <FaRegHeart className="icon-block" />
                <div className="d-flex algin-items-center favorite-count">
                  0
                </div>
              </div>
            </div>
            <div className="cart-block">
              <PiShoppingCart />
            </div>
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
