import React from "react";
import CardPicture from "../../cards/CardPicture";

const Dashboard = () => {
  return (
    <div className="container justify-content-center">
      <div className="row justify-content-center">
        <div className="col-lg-3 col-md-12 m-3">
          <CardPicture
            background="light"
            text="dark"
            source="https://cdn.shopify.com/s/files/1/0063/5942/products/Natural_Kraft_5_8018467e-05e8-48eb-aed1-85433e491f5e_2000x.jpg?v=1624533003"
            head=""
            title="Title"
            info="the quick brown fox jumps over the lazy dog"
          />
        </div>
        <div className="col-lg-3 col-md-12 m-3">
          <CardPicture
            background="light"
            text="dark"
            source="https://cdn.shopify.com/s/files/1/0063/5942/products/Natural_Kraft_5_8018467e-05e8-48eb-aed1-85433e491f5e_2000x.jpg?v=1624533003"
            head=""
            title="Title"
            info="the quick brown fox jumps over the lazy dog"
          />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-3 col-md-12 m-3">
          <CardPicture
            background="light"
            text="dark"
            source="https://cdn.shopify.com/s/files/1/0063/5942/products/Natural_Kraft_5_8018467e-05e8-48eb-aed1-85433e491f5e_2000x.jpg?v=1624533003"
            head=""
            title="Title"
            info="the quick brown fox jumps over the lazy dog"
          />
        </div>
        <div className="col-lg-3 col-md-12 m-3">
          <CardPicture
            background="light"
            text="dark"
            source="https://cdn.shopify.com/s/files/1/0063/5942/products/Natural_Kraft_5_8018467e-05e8-48eb-aed1-85433e491f5e_2000x.jpg?v=1624533003"
            head=""
            title="Title"
            info="the quick brown fox jumps over the lazy dog"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
