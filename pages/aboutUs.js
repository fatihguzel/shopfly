import Link from "next/link";
import React from "react";
import { Button, CardImg } from "reactstrap";

const aboutUs = () => {
  return (
    <div
      class="container"
      style={{
        marginBottom: "270px",
        marginTop: "50px",
        textAlign: "center",
        alignItems: "center",
      }}
    >
      <div class="row">
        <div class="col-lg-12">
          <hr />
          <h2>Güvenilir alışveriş için doğru nokta ShopFly</h2>
          <CardImg
            class="img-responsive"
            src="http://mobilebusinessinsights.com/wp-content/uploads/2016/03/IBM_MobileFirst_SXSWBlog_0321_v2.jpg"
            alt=""
          />
          <hr />

          <p class="lead">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus,
            vero, obcaecati, aut, error quam sapiente nemo saepe quibusdam sit
            excepturi nam quia corporis eligendi eos magni recusandae laborum
            minus inventore?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut,
            tenetur natus doloremque laborum quos iste ipsum rerum obcaecati
            impedit odit illo dolorum ab tempora nihil dicta earum fugiat.
            Temporibus, voluptatibus.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos,
            doloribus, dolorem iusto blanditiis unde eius illum consequuntur
            neque dicta incidunt ullam ea hic porro optio ratione repellat
            perspiciatis. Enim, iure!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error,
            nostrum, aliquid, animi, ut quas placeat totam sunt tempora commodi
            nihil ullam alias modi dicta saepe minima ab quo voluptatem
            obcaecati?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum,
            dolor quis. Sunt, ut, explicabo, aliquam tenetur ratione tempore
            quidem voluptates cupiditate voluptas illo saepe quaerat numquam
            recusandae? Qui, necessitatibus, est!
          </p>

          <hr />
          <Link
            className="btn btn-success"
            style={{
              width: "250px",
              height: "50px",
            }}
            href="/"
          >
            GET STARTED
          </Link>
        </div>
      </div>
    </div>
  );
};

export default aboutUs;
