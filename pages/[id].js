import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "react-slideshow-image/dist/styles.css";
import { CardImg, Col, Row } from "reactstrap";
import { addProductToCart } from "../features/Cart/cartSlice";

const index = ({ id, product, rInt, yInt }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useDispatch();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const cart = useSelector((state) => state.cart.cart);
  const changeHandler = (title, amount, discount, image) => {
    console.log("her");
    console.log(title);
    dispatch(addProductToCart({ title, amount, discount, image }));
    alert("Ürün Sepete Eklendi");
  };
  return (
    <div>
      <Row>
        <Col xs="12">
          <div
            class="container mt-5 mb-5"
            style={{
              textAlign: "left",
              alignItems: "center",
            }}
          >
            <div class="d-flex justify-content-center row">
              <div class="col-md-10">
                <div class="row p-2 bg-white border rounded">
                  <div class="col-md-3 mt-1">
                    <CardImg
                      class="img-fluid img-responsive rounded product-image"
                      src={`${product.urunFotograflari[0]}`}
                    />
                  </div>
                  <div class="col-md-6 mt-1">
                    <h5>{product.urunAdi}</h5>
                    <div class="d-flex flex-row">
                      <div class="ratings mr-2">{"⭐".repeat(yInt)}</div>
                      <span>{rInt}</span>
                    </div>

                    <p class="text-justify  para mb-0">
                      {product.urunAciklamasi}
                      <br></br>
                    </p>
                    <hr />

                    <div class="mt-1 mb-1 spec-1">
                      <span
                        className="dot"
                        style={{
                          fontWeight: "bolder",
                        }}
                      >
                        Garanti
                        <br />
                      </span>
                      <span
                        class="dot"
                        style={{
                          fontWeight: "revert",
                        }}
                      >
                        {product.garanti.turu} - {product.garanti.sure}
                      </span>
                    </div>
                  </div>
                  <div class="align-items-center align-content-center col-md-3 border-left mt-1">
                    <div class="d-flex flex-row align-items-center">
                      <h4 class="mr-1">
                        {product.urunFiyati - product.urunIndirimTutari}TL
                      </h4>
                    </div>
                    <h6 class="text-success">Free shipping</h6>
                    <span
                      class="dot"
                      style={{
                        fontWeight: "bold",
                      }}
                    >
                      {product.kampanyalar[0]}
                    </span>
                    <div class="d-flex flex-column mt-4">
                      <button class="btn btn-primary btn-sm" type="button">
                        Details
                      </button>
                      <button
                        class="btn btn-outline-primary btn-sm mt-2"
                        type="button"
                        onClick={({ title, amount, discount, image }) => {
                          title = product.urunAdi;
                          amount = product.urunFiyati;
                          discount = product.urunIndirimTutari;
                          image = product.urunFotograflari[0];
                          changeHandler(title, amount, discount, image);
                        }}
                      >
                        Add to wishlist
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <div
        className="container"
        style={{
          textAlign: "center",
        }}
      >
        <label
          htmlFor="comment"
          style={{
            alignItems: "center",
          }}
        >
          Yorum Yap
        </label>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">
              @
            </span>
          </div>
          <input
            type="text"
            class="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <ul
          class="list-group"
          style={{
            textAlign: "left",
            marginBottom: "250px",
          }}
        >
          <li class="list-group-item">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
            veritatis impedit molestiae, explicabo veniam necessitatibus
            accusantium. Dignissimos, ipsa architecto, eos exercitationem
            tempora soluta, in voluptates quaerat vero quod consequuntur!
            Molestiae?
          </li>
          <li class="list-group-item">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </li>
          <li class="list-group-item">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi at
            exercitationem libero magnam explicabo.
          </li>
          <li class="list-group-item">Porta ac consectetur ac</li>
          <li class="list-group-item">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At minima
            voluptatem eius quisquam deserunt mollitia, odio illum quae nobis
            labore amet optio possimus quasi praesentium dolorum quis est
            reprehenderit facilis? Minima sapiente atque modi, sed laboriosam
            fuga soluta natus recusandae, porro quod corrupti itaque nihil. Vel
            nihil reprehenderit ratione, quasi magnam maxime inventore
            consequatur possimus consectetur quae amet accusantium soluta!
          </li>
        </ul>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ params, req }) => {
  const { id } = params;

  const res = await axios.get("http://localhost:5000/urunler", {});

  const product = res.data.find((urun) => urun.urunAdi === id);
  const rInt = Math.floor(Math.random() * 100);
  const yInt = Math.round(rInt / 20);

  return {
    props: { id, product, rInt, yInt },
  };
};

export default index;
