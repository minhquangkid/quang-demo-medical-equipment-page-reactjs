import React, { useEffect } from "react";
import categories from "../../data/category.json";
import { MdKeyboardArrowRight } from "react-icons/md";
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
          <div className="col-9">sdsadd</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Menu;
