import React, { useState, useEffect } from 'react';
import axios from 'axios';

const apiUrl = 'http://localhost:4000'; // Replace with your API URL

const CourseForm = () => {
  const initialFormData = {
    id: null,
    category: 'Dasturlash',
    davomiylik: '2 oy',
    darslarSoni: '10 dona',
    title: 'React Najot talimda organing',
    description: 'juda juda zor kors',
    image: 'https://static.javatpoint.com/images/javascript/javascript_logo.png',
    admin_id: '12'
  };

  const [formData, setFormData] = useState(initialFormData);
  const [courses, setCourses] = useState([]);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axios.get(`${apiUrl}/get`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      setCourses(response.data);
    } catch (error) {
      console.error('Error fetching courses:', error.response.data);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEdit = (course) => {
    setFormData({ ...course });
    setEditingId(course.id);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = editingId
        ? await axios.put(`${apiUrl}/put/${editingId}`, formData, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`
            }
          })
        : await axios.post(`${apiUrl}/create`, formData, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`
            }
          });

      console.log('Course operation successful:', response.data);
      fetchCourses();
      setEditingId(null);
      resetForm();
    } catch (error) {
      console.error('Error performing course operation:', error.response.data);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`${apiUrl}/delete/${id}`);
      console.log('Course deleted successfully:', response.data);
      fetchCourses();
    } catch (error) {
      console.error('Error deleting course:', error.response.data);
    }
  };

  const resetForm = () => {
    setFormData(initialFormData);
  };

  return (
    <div className="course-form">
      <h2>Course Management</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="category" placeholder="Category" onChange={handleChange} value={formData.category} />
        <input type="text" name="davomiylik" placeholder="Duration" onChange={handleChange} value={formData.davomiylik} />
        <input type="text" name="darslarSoni" placeholder="Number of Lessons" onChange={handleChange} value={formData.darslarSoni} />
        <input type="text" name="title" placeholder="Title" onChange={handleChange} value={formData.title} />
        <textarea name="description" placeholder="Description" onChange={handleChange} value={formData.description} />
        <input type="text" name="image" placeholder="Image URL" onChange={handleChange} value={formData.image} />
        <input type="text" name="admin_id" placeholder="Admin Id" onChange={handleChange} value={formData.admin_id} />
        <button type="submit">{editingId ? 'Update Course' : 'Add Course'}</button>
      </form>

      <div className="course-list">
        {courses.map((course) => (
          <div key={course.id} className="course-item">
            {editingId === course.id ? (
              <div>
                <input
                  type="text"
                  name="title"
                  placeholder="Title"
                  onChange={handleChange}
                  value={formData.title}
                />
                <textarea
                  name="description"
                  placeholder="Description"
                  onChange={handleChange}
                  value={formData.description}
                />
                <form onSubmit={handleEdit}>
        <input type="text" name="category" placeholder="Category" onChange={handleChange} value={formData.category} />
        <input type="text" name="davomiylik" placeholder="Duration" onChange={handleChange} value={formData.davomiylik} />
        <input type="text" name="darslarSoni" placeholder="Number of Lessons" onChange={handleChange} value={formData.darslarSoni} />
        <input type="text" name="title" placeholder="Title" onChange={handleChange} value={formData.title} />
        <textarea name="description" placeholder="Description" onChange={handleChange} value={formData.description} />
        <input type="text" name="image" placeholder="Image URL" onChange={handleChange} value={formData.image} />
        <input type="text" name="admin_id" placeholder="Admin Id" onChange={handleChange} value={formData.admin_id} />
        <button type="submit">{editingId ? 'Update Course' : 'Add Course'}</button>
      </form>

                <button onClick={() => handleSubmit()}>Save</button>
                <button onClick={() => setEditingId(null)}>Cancel</button>
              </div>
            ) : (
              <div>
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                <p>Category: {course.category}</p>
                <p>Duration: {course.davomiylik}</p>
                <p>Number of Lessons: {course.darslarSoni}</p>
                <img src={course.image} alt={course.title} className="course-image" />
                <p>Admin Id: {course.admin_id}</p>
                <div className="course-actions">
                  <button onClick={() => handleEdit(course)}>Edit</button>
                  <button onClick={() => handleDelete(course.id)}>Delete</button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseForm;
