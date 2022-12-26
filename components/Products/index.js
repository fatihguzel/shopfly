import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Button,
  Image,
  CardImg,
  Label,
} from "reactstrap";
import { addProductToCart } from "../../features/Cart/cartSlice";
import { getProducts } from "../../features/Product/asyncActions";

const ProductList = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const filterProducts = useSelector((state) => state.products.filterProducts);
  const allProducts = useSelector((state) => state.products.products);

  const changeHandler = (title, amount, discount, image) => {
    console.log("here");
    dispatch(addProductToCart({ title, amount, discount, image }));
  };
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (filterProducts.length === 0) {
    return (
      <div
        className="container"
        style={{
          marginTop: "50px",
        }}
      >
        <div className="row">
          {allProducts.map((product) => (
            <Card
              key={product.urunId}
              color=""
              outline
              style={{
                width: "18rem",
                marginRight: "40px",
                marginBottom: "50px",
              }}
            >
              <CardImg
                src={`${product.urunFotograflari[0]}`}
                style={{
                  height: "150px",
                  objectFit: "fill",
                }}
              />
              <CardBody>
                <CardTitle tag="h5">{product.urunAdi}</CardTitle>

                <CardText>{product.urunAciklamasi}</CardText>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  {product.urunFiyati}TL
                </CardSubtitle>
                <Link
                  className="btn btn-dark"
                  style={{
                    position: "absolute",
                    bottom: 5,
                  }}
                  href={`/${product.urunAdi}`}
                >
                  Ürünü incele
                </Link>
                <Button
                  className="btn btn-warning"
                  style={{
                    position: "absolute",
                    bottom: 5,
                    right: "30px",
                  }}
                  onClick={({ title, amount, discount, image }) => {
                    title = product.urunAdi;
                    amount = product.urunFiyati;
                    discount = product.urunIndirimTutari;
                    image = product.urunFotograflari[0];
                    changeHandler(title, amount, discount, image);
                  }}
                >
                  Sepete Ekle
                </Button>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div
      className="container"
      style={{
        marginTop: "50px",
      }}
    >
      <h4>Seçili Kategori: {filterProducts[0].urunKategorisi}</h4>
      <hr />
      <div className="row">
        {filterProducts.map((product) => (
          <Card
            key={product.urunId}
            color=""
            outline
            style={{
              width: "18rem",
              marginLeft: "10px",
              marginRight: "30px",
              marginBottom: "50px",
            }}
          >
            <CardImg
              src={`${product.urunFotograflari[0]}`}
              style={{
                height: "150px",
              }}
            />
            <CardBody>
              <CardTitle tag="h5">{product.urunAdi}</CardTitle>

              <CardText>{product.urunAciklamasi}</CardText>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                {product.urunFiyati}TL
              </CardSubtitle>
              <Link
                className="btn btn-dark"
                style={{
                  position: "absolute",
                  bottom: 5,
                }}
                href={`/${product.urunAdi}`}
              >
                Ürünü incele
              </Link>
              <Button
                className="btn btn-warning"
                style={{
                  position: "absolute",
                  bottom: 5,
                  right: "30px",
                }}
                onClick={({ title, amount, discount, image }) => {
                  title = product.urunAdi;
                  amount = product.urunFiyati;
                  discount = product.urunIndirimTutari;
                  image = product.urunFotograflari[0];
                  changeHandler(title, amount, discount, image);
                }}
              >
                Sepete Ekle
              </Button>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
