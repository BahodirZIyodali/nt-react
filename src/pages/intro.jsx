import React from 'react';
import Bg from '../assets/images/div.hero-removebg.png'
const Intro = () => {
  return (
    <section id="intro">
      <div className="intro_text">
        <h1>
          Kasblarni <br />
          <span>onlayn</span> <br />
          o‘rganing
        </h1>

        <p>
          O‘zingizga qulay vaqtda, joyda va uslubda zamonaviy kasblarni
          o‘rganing.
        </p>

        <button className="intro_btn .btn_white">Kurslarni ko‘rish</button>
      </div>

      <img src={Bg} alt="" />
    </section>
  );
};

export default Intro;
