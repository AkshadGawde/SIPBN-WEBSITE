import React from "react";
import { useEffect } from "react";
import AOS from "aos";

function HeroInfo() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <>
      <div className="heroContainer">
        <div className="heroContent">
          <div className="agendaBox">
            <div className="logoCutout">
              <h2>SIPBN</h2>
              <hr />
              <h2>2024</h2>
            </div>
            <div>
              <p className="agendaText">
                Organised by SIPBN in major cities across the globe, the World
                Business. #CapTech2024 is your gateway to the forefront of
                innovation offering an unparalleled opportunity to engage
                directly with the luminaries of future-focused industries.
              </p>
              <br />
              <p className="agendaText">
                This premium summit uniquely convenes an elite ensemble of
                business leaders, policymakers, and investors, fostering a rare
                environment for high-level networking and collaborative ventures
                across eight key sectors.
              </p>
            </div>
            <button className="button-primary" style={{ marginTop: "20px" }}>
              Register your Interest
            </button>
          </div>
          <div className="agendaBox">
            <img
              src="https://res.cloudinary.com/dueoon8xe/image/upload/v1726314898/v3nyhcglpafyizkdurcr.png"
              alt=""
              style={{ borderRadius: "10%" }}
              className="agendaImage"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroInfo;
