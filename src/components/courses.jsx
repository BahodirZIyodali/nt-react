import React from 'react';

const Courses = () => {
  const courses = [
    {
      title: 'Dasturlash foundation',
      description: 'Foundation dasturlash kursida',
    },
    {
      title: '.NET mutaxassislik kursi',
      description: '.NET mutaxassislik kursi',
    },
    {
      title: 'Web dizayn kursi',
      description: 'Web dizayn kursida zamonaviy web sahifalarni...',
    },
    {
      title: 'Mobil ilovalar yaratish',
      description: 'Mobil ilovalar yaratish kursida mobil...',
    }
  ];

  return (
    <section id="kurslar">
      <div className="container">
        <div className="kurslar_elements">
          <h1>Yo‘nalishlar bo‘yicha kurslar</h1>

          <p className="kurslar_text">
            Zamonaviy sohalardan birini o‘rganing va talabgir kasb egasi
            bo‘ling!
          </p>

          <div className="kurslar_wrapper">
            {courses.map((course, index) => (
              <div className="kurslar_card" key={index}>
                <h2>{course.title}</h2>
                <p>{course.description}</p>
              </div>
            ))}
          </div>
        </div>

        <a href="#">Barcha kurslarni ko‘rish</a>
      </div>
    </section>
  );
};

export default Courses;
