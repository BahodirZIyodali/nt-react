import React from 'react';
import emailjs from 'emailjs-com';
import HelpImg from '../assets/images/help.png'
import { toast,  ToastContainer 
} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Help = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_077vcwv',
        'template_2vzvres',
        e.target,
        'email_80ac38bdd65138961605a3ec'
      )
      .then(
        (result) => {
          toast.success('Email sent successfully:', result.text);
        },
        (error) => {
          toast.error('Error sending email:', error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="help">
      <div className="container">
        <div className="help_wrapper">
        <ToastContainer />
           <img src={HelpImg} id='help-img'  alt="image" />
          <div className="card_right">
            <div className="form">
              <h1>Yordam kerakmi?</h1>

              <p className="form_text">
                <span>FAQ</span> boʻlimi ham sizga yordam bera olmadimi?
                Telefon raqamingizni yozib qoldiring, biz sizga qoʻngʻiroq
                qilamiz va birorta ham savolingiz javobsiz qolmasligiga harakat
                qilamiz.
              </p>

              <div className="name">
                <p>Ismingizni kiriting</p>
                <input type="text" className="forms" placeholder="Ism" />
              </div>

              <div className="pn">
                <p className="phone_n-input_t">Telefon raqamingizni kiriting</p>
                <input
                  type="tel"
                  className="forms"
                  placeholder="+998 00 000 00 00"
                />
              </div>

              <p className="request_text">
                "So‘rov yuborish" tugmasini bosish orqali <br />
                <span>Platformadan foydalanish qoidalari</span> ga rozilik
                bildirasiz.
              </p>

              <button className="request" onClick={sendEmail}>
                So‘rov yuborish
              </button>

              <p></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Help;
