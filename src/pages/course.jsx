import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import laptopBlueImage from '../assets/images/laptop_blue.png';
import laptopOrangeImage from '../assets/images/laptop_orange.png';

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axios.get('http://localhost:4000/get'); // Adjust the URL based on your API endpoints
      setCourses(response.data);
    } catch (error) {
      console.error('Error fetching courses:', error.response.data);
    }
  };

  return (
    <section id="hamma_kurslar">
      <div className="container">
        <div className="road">
          <Link to="/" className="back">Bosh sahifa -&gt;</Link>
          <p className="kurslar">Kurlar</p>
        </div>

        <div className="title_input">
          <h1>Barcha o‘quv kurslari</h1>
          <div className="search">
            <input type="search" placeholder="Izlash" />
            <img src="/assets/icons/search.svg" alt="" />
          </div>
        </div>

        <div className="btns">
          <button className="btn_white">Barchasi</button>
          <button className="btn_white">Dasturlash</button>
        </div>

        <div className="kurslar_wrapper1">
          {courses.map((course, index) => (
            <div className="kurslar_card1" key={index}>
              <div className="kurslar_card-top">
                <span className="category">{course.category}</span>
                <p><span>Davomiylik:</span> {course.davomiylik}</p>
                <p><span>Darslar soni:</span> {course.darslarSoni}</p>
              </div>

              <div className="kurslar_card_bottom">
                <div className="kurslar_card-text">
                  <h2>{course.title}</h2>
                  <p>{course.description}</p>
                </div>
                <img src={course.imageSrc} alt="laptop" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesPage;
