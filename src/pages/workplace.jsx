import React from "react";
import Epam from "../assets/icons/epam.svg";
import ItachArt from "../assets/icons/itechArt.svg";
import Humo from "../assets/icons/humo.svg";
import Arg from "../assets/icons/agrobank.svg";
import Davr from "../assets/icons/davr_bank.svg";
import Texno from "../assets/icons/texnomart.svg";
import Soliq from "../assets/icons/soliq.svg";
import Uzcard from "../assets/icons/uzcard.svg";
import Mytax from "../assets/icons/mytaxt.svg";
import Mfactor from "../assets/icons/mFaktor.svg";
import Jaftor from "../assets/icons/jafton.svg";
import Fido from "../assets/icons/fido_studio.svg";
import Ob from "../assets/icons/osmondagi_bolalar.svg";
import Islomuz from "../assets/icons/islom_uz.svg";
import Camb from "../assets/icons/cambridge.svg";
import Kunuz from "../assets/icons/kun_uz.svg";
import Ish from "../assets/icons/yoshlar_ishlari.svg";
import Psc from "../assets/icons/pcg.svg";

const Workplaces = () => {
  const workplaces = [
    Epam,
    ItachArt,
    Humo,
    Arg,
    Davr,
    Texno,
    Soliq,
    Uzcard,
    Mytax,
    Mfactor,
    Jaftor,
    Fido,
    Ob,
    Islomuz,
    Camb,
    Kunuz,
    Ish,
    Psc,
  ];

  return (
    <section id="ish_joylari">
      <div className="container">
        <h1>Bitiruvchilarimizning ish joylari:</h1>

        <p>
          Eng yaxshi bitiruvchilarimiz nufuzli tashkilot va kompaniyalarda
          faoliyat yuritadi. Zamonaviy kasb egalariga doim va har yerda talab
          yuqori bo‘ladi.
        </p>

        <div className="ish_joylari_wrapper">
          {workplaces.map((workplace, index) => (
            <div className="ish_joylari_card" key={index}>
              <img src={workplace} alt={`Workplace ${index}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workplaces;
