import React from "react";

function HeroParts() {
  return (
    <div className="heroContainer" style={{height:"100%"}}>
      <div
        className="heroContent"
        style={{ padding: "10px", justifyContent: "space-evenly" }}
      >
        <div className="box">
          <h1 className="partHeader">
            20+ YEARS OF <br /> INSPIRING THE <br /> GLOBAL <br /> EXECUTIVE{" "}
            <br /> COMMUNITY
          </h1>
        </div>
        <div className="box">
          <img
            src="https://res.cloudinary.com/dueoon8xe/image/upload/v1726314898/v3nyhcglpafyizkdurcr.png"
            className="partImage"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default HeroParts;
