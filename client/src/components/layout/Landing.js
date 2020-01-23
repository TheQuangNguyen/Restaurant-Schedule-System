import React from "react";
import landingBackground from "../../img/restaurant_background.jpg";

const Landing = () => {
  return (
    <section className="landing">
      <div className="landing-info">Welcome to Zapverr!</div>
      <div className="landing-background">
        <img src={landingBackground} alt="Logo Background" />
      </div>
    </section>
  );
};

export default Landing;
