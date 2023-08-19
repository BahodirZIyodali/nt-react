import React from 'react';
import Group from '../assets/icons/Group.svg'
import Telegram from "../assets/icons/telegram.svg"
import Facebook from "../assets/icons/facebook.svg"
import Linkd from "../assets/icons/linkedin.svg"
import Insta from "../assets/icons/instagram.svg"
import Youtube from "../assets/icons/youtube.svg"



const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="right">
          <div className="footer_wrapper">
            <div className="top_card">
              <img src={Group} alt="Najot Ta'lim Logo" />
              <p>
                Onlayn platformaga tegishli barcha materiallar "NAJOT TA‘LIM
                MARKAZI" MCHJning mulki hisoblanadi. Ushbu materiallardan onlayn
                ta‘lim olishdan tashqari nusxa ko‘chirish, tarqatish va boshqa
                maqsadlarda foydalanish qonunan man etiladi.
              </p>
            </div>

            <div className="footer_card">
              <h1>Ma'lumotlar</h1>
              <a href="https://najottalim.uz/faq" target="_blank" rel="noopener noreferrer">FAQ</a>
              <a href="https://najottalim.uz/blog" target="_blank" rel="noopener noreferrer">Blog</a>
              <a
                href="extension://bfdogplmndidlpjfhoijckpakkdjkkil/pdf/viewer.html?file=https%3A%2F%2Fnajottalim.uz%2Foferta.pdf"
                target="_blank" rel="noopener noreferrer"
              >
                Ommaviy oferta
              </a>
            </div>

            <div className="footer_card">
              <h1>Ommabop kurslar</h1>
              <a href="#kurslar">Dasturlash foundation</a>
              <a href="#kurslar">.NET mutaxassislik kursi</a>
            </div>

            <div className="footer_card">
              <h1>Bizning loyihalar</h1>
              <a href="https://www.youtube.com/channel/UCoE766Za9zRVPbivBAU1obA" target="_blank" rel="noopener noreferrer">Osmondagi bolalar</a>
              <a href="https://www.youtube.com/watch?v=R5CYJ8zpdTY" target="_blank" rel="noopener noreferrer">0 dan 1 gacha</a>
              <a href="https://abutech.uz/" target="_blank" rel="noopener noreferrer">Abutech</a>
              <a href="https://t.me/alohidamavzu" target="_blank" rel="noopener noreferrer">Alohida mavzu</a>
            </div>
          </div>
        </div>

        <hr />

        <div className="bottom_wrapper">
          <div className="footer_card_bottom">
            <p>
              © Najot Ta'lim, 2023 <br />
              Barcha huquqlar himoyalangan.
            </p>
          </div>

          <div className="footer_card_bottom">
            <h1>
              Toshkent shahri, Chilonzor-9, <br />
              Qatortol ko‘chasi
            </h1>
            <p>
              Mo‘ljal: Rayhon milliy taomlari qarshi <br />
              tomoni, 1- va 2-uylar orqa tomoni.
            </p>
          </div>

          <div className="footer_card_bottom">
            <h1>Tarmoqlar:</h1>
            <ul>
              <a href="https://t.me/najottalim" target="_blank" rel="noopener noreferrer">
                <img src={Telegram} alt="telegram-icon" />
              </a>
              <a href="https://m.facebook.com/215690519106811/" target="_blank" rel="noopener noreferrer">
                <img src={Facebook}  alt="facebook-icon" />
              </a>
              <a href="https://www.youtube.com/@najottalim/shorts" target="_blank" rel="noopener noreferrer">
                <img src={Youtube} alt="youtube-icon" />
              </a>
              <a href="https://instagram.com/najottalim?igshid=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer">
                <img src={Insta}  alt="instagram-icon" />
              </a>
              <a href="https://www.linkedin.com/company/najottalim/" target="_blank" rel="noopener noreferrer">
                <img src={Linkd}  alt="linkedin-icon" />
              </a>
            </ul>
          </div>

          <div className="footer_card_bottom">
            <h1>Telefon raqami:</h1>
            <a href="#" className="raqam">+998 (78) 888 9 888</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
