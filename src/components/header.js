import React from "react";
import logo from "../asset/image/logo_sendora_new-v2023.png";
import "./header.css";
import { LuPhone } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa6";
import { PiShoppingCart } from "react-icons/pi";
import { SlUser } from "react-icons/sl";
import { AiOutlineSearch } from "react-icons/ai";
const Header = () => {
  return (
    <React.Fragment>
      <div className="content">
        <div className="frame">
          <div className="above d-flex">
            <div className="logo d-flex align-items-center justify-content-center">
              <img src={logo} className="logo-header" alt="" />
            </div>
            <div className="search-frame d-flex align-items-center">
              <select className="select-block">
                <option value="0" selected="selected">
                  Sản phẩm
                </option>
                <option class="level-0" value="ban-ghe-van-phong">
                  Bàn ghế văn phòng
                </option>
                <option class="level-1" value="ban-van-phong">
                  &nbsp;&nbsp;&nbsp;Bàn văn phòng
                </option>
                <option class="level-1" value="ghe-van-phong">
                  &nbsp;&nbsp;&nbsp;Ghế văn phòng
                </option>
                <option class="level-0" value="dung-cu-phun-xam">
                  Dụng cụ phun xăm
                </option>
                <option class="level-1" value="dung-cu-dieu-khac">
                  &nbsp;&nbsp;&nbsp;Dụng cụ điêu khắc
                </option>
                <option class="level-1" value="dung-cu-ho-tro">
                  &nbsp;&nbsp;&nbsp;Dụng cụ hỗ trợ
                </option>
              </select>
              <input
                type="text"
                placeholder="bạn tìm sản phẩm gì..."
                id="search-header"
              />
              <button className="btn-search">
                <AiOutlineSearch style={{ fontSize: 20 }} />
              </button>
            </div>
            <div className="contact-block d-flex align-items-center">
              <LuPhone style={{ fontSize: 30, margin: 10 }} />
              <div>
                <p>Gọi ngay</p>
                <p style={{ fontWeight: 700 }}>0934267612</p>
              </div>
            </div>
            <div className="figure-block d-flex align-items-center">
              <div className="inside-figure">
                <FaRegHeart className="icon-block" />
                <div className="d-flex justify-content-center align-items-center figure-count">
                  0
                </div>
              </div>
            </div>
            <div className="figure-block d-flex align-items-center">
              <div className="inside-figure">
                <PiShoppingCart className="icon-block" />
                <div className="d-flex justify-content-center align-items-center figure-count">
                  0
                </div>
              </div>
            </div>
            <div
              className="contact-block d-flex align-items-center"
              style={{ width: 200 }}
            >
              <SlUser style={{ fontSize: 30, margin: 10 }} />
              <div>
                <p style={{ fontWeight: 700 }}>Đăng nhập</p>
                <p style={{ fontWeight: 700 }}>Đăng ký</p>
              </div>
            </div>
          </div>
          <hr></hr>
          <div className="bottom"></div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
