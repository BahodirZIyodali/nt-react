import React from 'react';
import EyeIcon from '../assets/icons/eye_icon.svg'; // Import the eye icon image
import Blog1 from '../assets/images/image_blog1.png';
import Blog2 from '../assets/images/image_blog2.png';
import Blog3 from '../assets/images/image_blog3.png';
import Blog4 from '../assets/images/image_blog_4.png';
import Blog5 from '../assets/images/image_blog5.png';
import Blog6 from '../assets/images/image_blog6.png';
import { Link } from 'react-router-dom';

const Blog = () => {
  const blogData = [
    {
      imgSrc: Blog1,
      title: 'Musobaqa',
      date: '19-aprel, 2023',
      watchedCount: '119',
      link: 'https://najottalim.uz/blog/24',
      description: '«SMM musobaqasi» bo\'lib o\'tdi',
    },
    {
      imgSrc: Blog2,
      title: 'Master-Klass',
      date: '19-aprel, 2023',
      watchedCount: '92',
      link: 'https://najottalim.uz/blog/23',
      description: '«Engineericly» YouTube kanali asoschisi Jahongirmirzo Ibrohimov bilan master-klass',
    },
    {
      imgSrc: Blog3,
      title: 'Musobaqa',
      date: '19-aprel, 2023',
      watchedCount: '109',
      link: 'https://najottalim.uz/blog/22',
      description: '«Marketing Team» musobaqasi g\'oliblari e\'lon qilindi',
    },
    {
      imgSrc: Blog4,
      title: 'Musobaqa',
      date: '19-aprel, 2023',
      watchedCount: '101',
      link: 'https://najottalim.uz/blog/21',
      description: 'Dasturchilar o\'rtasida «Algoritmlash» musobaqasi',
    },
    {
      imgSrc: Blog5,
      title: 'Master-Klass',
      date: '19-aprel, 2023',
      watchedCount: '187',
      link: 'https://najottalim.uz/blog/20',
      description: 'Otabek Jurayev va Behzodbek Shoyunusovlar bilan master-klass',
    },
    {
      imgSrc: Blog6,
      title: 'Musobaqa',
      date: '11-aprel, 2023',
      watchedCount: '270',
      link: 'https://najottalim.uz/blog/19',
      description: '«Marketing Team» jamoaviy musobaqasi',
    },
  ];

  return (
    <section id="blog">
      <div className="container">
        <div className="btns">
          <div className="btns">
            <button className="btn_white">Barchasi</button>
            <button className="btn_white">Bitiruv marosimi</button>
            <button className="btn_white">Master-klass</button>
            <button className="btn_white">Musobaqa</button>
            <button className="btn_white">Dasturlash</button>
         
          </div>
        </div>
        <div className="road">
          <Link  to='/' className="back">Bosh sahifa -&gt;</Link>
          <p className="back">Blog</p>
        </div>
        <div className="blog_wrapper">
          {blogData.map((blog, index) => (
            <div className="blog_card" key={index}>
              <div className="header">
                <img src={blog.imgSrc} alt="" />
                <a href={blog.link}>{blog.title}</a>
              </div>
              <div className="body">
                <div className="date">
                  <p>{blog.date}</p>
                  <div className="watched">
                    <img src={EyeIcon} alt="" />
                    <p>{blog.watchedCount}</p>
                  </div>
                </div>
                <h2>{blog.title}</h2>
                <p className="info">{blog.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="btn_white">Ko'proq ko'rish</button>
      </div>
    </section>
  );
};

export default Blog;
