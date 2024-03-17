import React, { useEffect } from "react";
import categories from "../../data/category.json";
import { MdKeyboardArrowRight } from "react-icons/md";
import banner1 from "../../asset/image/banner-giuong-sendora.jpg";
import banner2 from "../../asset/image/xe-day-spa-giam-gia-tha-ga.jpg";
import banner3 from "../../asset/image/z5224800525903_785f7c5bf09a8f3b1fe76c61152bc0da.jpg";
import "./menu.css";

const Menu = () => {
  useEffect(() => {
    console.log(categories);
  }, []); // Empty dependency array ensures this effect runs only once

  const listCategory = categories.map((e, index) => (
    <div
      className="d-flex justify-content-between align-items-center p-2 main-cate"
      key={index}
    >
      <div>{e.mainCategory}</div>
      {e.listSubCate.length > 0 ? <MdKeyboardArrowRight /> : <div></div>}
    </div>
  ));

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <div className="border-menu">{listCategory}</div>
          </div>
          <div className="col-9 mt-2">
            {/* <img src={banner} alt="banner" className="banner-img" /> */}
            <div id="demo" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#demo"
                  data-bs-slide-to="0"
                  class="active"
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

              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src={banner1} alt="Los Angeles" class="d-block w-100" />
                </div>
                <div class="carousel-item">
                  <img src={banner2} alt="Chicago" class="d-block w-100" />
                </div>
                <div class="carousel-item">
                  <img src={banner3} alt="New York" class="d-block w-100" />
                </div>
              </div>

              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#demo"
                data-bs-slide="prev"
              >
                <span class="carousel-control-prev-icon"></span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#demo"
                data-bs-slide="next"
              >
                <span class="carousel-control-next-icon"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Menu;
