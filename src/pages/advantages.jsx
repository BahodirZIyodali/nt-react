import Icon1 from '../assets/icons/icon1.svg'
import Icon2 from '../assets/icons/icon2.svg'
import Icon3 from '../assets/icons/icon3.svg'
import Icon4 from '../assets/icons/icon4.svg'
import arDown from '../assets/icons/arrow_down.svg'

const Advantages = () => {
  const advantages = [
    {
      icon: Icon1,
      title: 'Onlayn akademiya',
      description: '«Najot Ta’lim» digital academy...',
    },
    {
      icon: Icon2,
      title: 'O‘z ishining ustalari',
      description: 'Darslar katta tajribaga ega malakali...',
    },
    {
      icon: Icon3,
      title: 'Shunchaki kurs emas',
      description: 'Har bir o‘quv kursi shunday ishlab chiqilganki...',
    },
    {
      icon: Icon4,
      title: 'Interaktiv darslar',
      description: 'Darslarni o‘zlashtirish davrida sizda savollar...',
    },
  ];

  return (
    <section id="advantages">
      <div className="container">
        <h1>Bizning afzalliklarimiz</h1>
        <div className="advantages_wrapper">
          {advantages.map((advantage, index) => (
            <div className="advantages_card" key={index}>
              <img src={advantage.icon} alt="" />

              <div className="advantages_text">
                <h2>{advantage.title}</h2>
                <p>{advantage.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="more">
          <h3>Ko‘proq</h3>
          <img src={arDown} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Advantages;
