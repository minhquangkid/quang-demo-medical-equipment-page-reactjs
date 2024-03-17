import React, { useEffect, useState } from "react";
import categories from "../../data/category.json";
import { MdKeyboardArrowRight } from "react-icons/md";
import banner1 from "../../asset/image/banner-giuong-sendora.jpg";
import banner2 from "../../asset/image/xe-day-spa-giam-gia-tha-ga.jpg";
import banner3 from "../../asset/image/z5224800525903_785f7c5bf09a8f3b1fe76c61152bc0da.jpg";
import "./menu.css";

const Menu = () => {
  const [isShowMenuDetail, setIsShowMenuDetail] = useState(false);
  const [menuDetail, setMenuDetail] = useState([]);

  useEffect(() => {
    console.log(categories);
  }, []); // Empty dependency array ensures this effect runs only once

  const handleMouseEnter = (e) => {
    console.log(e);
    setIsShowMenuDetail(true);
    setMenuDetail(e.listSubCate);
  };

  const handleMouseLeave = () => {
    console.log("mouse leave");
    setIsShowMenuDetail(false);
  };

  const listCategory = categories.map((e, index) => (
    <div
      className="d-flex justify-content-between align-items-center p-2 main-cate"
      key={index}
      onMouseEnter={() => handleMouseEnter(e)}
      onMouseLeave={() => handleMouseLeave()}
    >
      <div>{e.mainCategory}</div>
      {e.listSubCate.length > 0 ? <MdKeyboardArrowRight /> : <div></div>}
    </div>
  ));

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-3 ">
            <div className="border-menu">{listCategory}</div>
          </div>
          <div className="col-9 mt-2 frame-banner">
            <div
              className={
                "menu-detail " + (isShowMenuDetail ? "detail-visible" : "")
              }
            ></div>
            <div id="demo" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#demo"
                  data-bs-slide-to="0"
                  className="active"
                ></button>
                <button
                  type="button"
                  data-bs-target="#demo"
                  data-bs-slide-to="1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#demo"
                  data-bs-slide-to="2"
                ></button>
              </div>

              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={banner1}
                    alt="Los Angeles"
                    className="d-block w-100"
                  />
                </div>
                <div className="carousel-item">
                  <img src={banner2} alt="Chicago" className="d-block w-100" />
                </div>
                <div className="carousel-item">
                  <img src={banner3} alt="New York" className="d-block w-100" />
                </div>
              </div>

              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#demo"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon"></span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#demo"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Menu;
