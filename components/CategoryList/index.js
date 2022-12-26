import React, { useEffect, useState } from "react";
import { ListGroupItem } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../features/Category/asyncActions";
import { filterProducts } from "../../features/Product/asyncActions";
import styles from "./style.module.css";

const CategoryLists = () => {
  const [categoryData, setCategoryData] = useState("");
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.categories);

  const changeHandler = (title) => {
    setCategoryData(title);
    dispatch(filterProducts({ title }));
    // categories.filter((cat) => cat.urunKategorisi === title);
  };
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div
      style={{
        marginTop: "50px",
        marginLeft: "10px",
      }}
    >
      <ListGroup>
        {categories.map((cat) => (
          <ListGroupItem
            className={`${styles.listgroupitem}`}
            key={cat.kategori_id}
            value={cat.kategori_ismi}
            onClick={({ title }) => {
              title = cat.kategori_ismi;
              changeHandler(title);
            }}
          >
            <p
              style={{
                fontSize: "larger",
                wordWrap: "break-word",
              }}
            >
              {cat.kategori_ismi}
            </p>{" "}
            <hr
              style={{
                borderBottom: "1px solid #DD2C00",
                width: "25%",
              }}
            />
            <p
              style={{
                fontSize: "small",
                fontFamily: "cursive",
                fontStyle: "italic",
                wordWrap: "break-word",
                textAlign: "center",
              }}
            >
              {cat.kategori_aciklamasi}
            </p>
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
};

export default CategoryLists;
