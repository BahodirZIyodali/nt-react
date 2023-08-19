import React, { useState, useEffect } from 'react';
import Bg from '../assets/images/div.hero-removebg.png';

const Intro = () => {
  const texts = ['onlayn', 'mutaxasislikni', 'Najot Talimda'];
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 4000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="intro">
      <div className="intro_text">
        <h1>
        kasblarni
          {texts.map((text, index) => (
            <span
              key={index}
              className={`animated-text ${
                textIndex === index ? 'show' : 'hide'
              }`}
              style={{ animationDelay: `${index * 0.9}s` }} 
            >
              {text}
            </span>
          ))}
          <br />
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
