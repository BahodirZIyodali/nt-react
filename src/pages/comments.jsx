import React from 'react';
import Play from '../assets/icons/paly_icon.svg'
const Comments = () => {
  return (
    <section id="izohlar">
      <div className="container">
        <h1>Bitiruvchilarimizdan izohlar</h1>
        <p className="commets_about">
          Oʻquv kurslarimiz, ustozlar, qoʻlga kiritilgan bilim va koʻnikmalar,
          olingan natijalar haqida bitiruvchilarimizdan eshiting hamda ulardan
          kerakli tavsiyalar oling.
        </p>
        <div className="izohlar_wrapper">
          <div className="comments_card1">
            <div className="watch">
              <a
                href="https://cdn.najottalim.uz/najottalim/short-videos/60a6ad55-4ca3-4d0f-8007-470b9cc39a88.mp4"
                className="video_link"
              >
                <span><img src={Play} alt="Play icon" /></span>
                <p>Videoni ko‘rish</p>
              </a>
            </div>
            <div className="izohlar_text">
              <p className="date">25.01.2023</p>
              <p className="job">SMM-menejer</p>
              <h4>Abdumannof Tursunov</h4>
            </div>
          </div>
          <div className="comments_card2">
            <div className="watch">
              <a
                href="https://cdn.najottalim.uz/najottalim/short-videos/d7ccc165-8afc-4294-92ed-02d9f1a6f7a2.mp4"
                className="video_link"
              >
                <span><img src={Play} alt="Play icon" /></span>
                <p>Videoni ko‘rish</p>
              </a>
            </div>
            <div className="izohlar_text">
              <p className="date">25.01.2023</p>
              <p className="job">Frontend dasturchi</p>
              <h4>Salohiddin Dilmatov</h4>
            </div>
          </div>
          <div className="comments_card3">
            <div className="watch">
              <a
                href="https://cdn.najottalim.uz/najottalim/short-videos/6468a330-6e3e-4a85-a6fe-8c5a066ce6bc.mp4"
                className="video_link"
              >
                <span><img src={Play} alt="Play icon" /></span>
                <p>Videoni ko‘rish</p>
              </a>
            </div>
            <div className="izohlar_text">
              <p className="date">25.01.2023</p>
              <p className="job">Grafik dizayner</p>
              <h4>Shahzoda Sunnatillayeva</h4>
            </div>
          </div>
          <div className="comments_card4">
            <div className="watch">
              <a
                href="https://cdn.najottalim.uz/najottalim/short-videos/3c5a9b58-5822-43aa-9603-87762de32bf9.mp4"
                className="video_link"
              >
                <span><img src={Play} alt="Play icon" /></span>
                <p>Videoni ko‘rish</p>
              </a>
            </div>
            <div className="izohlar_text">
              <p className="date">25.01.2023</p>
              <p className="job">Art-direktor</p>
              <h4>Sayfulloh Asadullayev</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comments;
