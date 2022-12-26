import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, CardImg } from "reactstrap";
import {
  removeAllProduct,
  removeOneProductToCart,
} from "../features/Cart/cartSlice";
import alertify from "alertifyjs";

const cart = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useDispatch();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);

  const removeProducts = () => {
    dispatch(removeAllProduct());
    alert("Alışveriş Tamamlandı...");
  };

  const changeHandler = (title) => {
    console.log("her");
    console.log(title);
    dispatch(removeOneProductToCart({ title }));
    alert("Ürün kaldırıldı");
  };
  return (
    <section
      class="h-100 h-custom"
      style={{ backgroundColor: "#eee", marginBottom: "1000px" }}
    >
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col">
            <div class="card">
              <div class="card-body p-4">
                <div class="row">
                  <div class="col-lg-7">
                    <h5 class="mb-3">
                      <a href="#!" class="text-body">
                        <i class="fas fa-long-arrow-alt-left me-2"></i>Continue
                        shopping
                      </a>
                    </h5>
                    <hr />

                    <div class="d-flex justify-content-between align-items-center mb-4">
                      <div>
                        <p class="mb-1">Shopping cart</p>
                        <p class="mb-0">
                          You have {`${cart.length}`} items in your cart
                        </p>
                      </div>
                      <div>
                        <p class="mb-0">
                          <span class="text-muted">Sort by:</span>{" "}
                          <a href="#!" class="text-body">
                            price <i class="fas fa-angle-down mt-1"></i>
                          </a>
                        </p>
                      </div>
                    </div>

                    <div class="card mb-3">
                      {cart.map((c) => (
                        <div class="card-body" key={c.title}>
                          <div class="d-flex justify-content-between">
                            <div class="d-flex flex-row align-items-center">
                              <div>
                                <CardImg
                                  class="img-fluid img-responsive rounded product-image"
                                  src={`${c.image}`}
                                  style={{
                                    width: "100px",
                                  }}
                                />
                              </div>
                              <div class="ms-3">
                                <h5>{c.title}</h5>
                              </div>
                            </div>
                            <div class="d-flex flex-row align-items-center">
                              <div style={{ width: "49px" }}>
                                <h5 class="fw-normal mb-0"></h5>
                              </div>
                              <div style={{ width: "80px" }}>
                                <h5 class="mb-0">{c.amount}TL</h5>
                              </div>
                              <a href="#!" style={{ color: "#cecece" }}>
                                <i class="fas fa-trash-alt"></i>
                              </a>
                            </div>
                          </div>
                          <Button
                            className="btn btn-warning"
                            style={{
                              bottom: 0,
                              right: "30px",
                            }}
                            onClick={({ title }) => {
                              title = c.title;

                              changeHandler(title);
                            }}
                          >
                            Sepetten Sil
                          </Button>
                        </div>
                      ))}
                    </div>
                    <Button onClick={removeProducts}>Alışverişi Tamamla</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default cart;
