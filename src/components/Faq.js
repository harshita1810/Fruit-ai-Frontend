import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Faq.css';  
import { Link } from 'react-router-dom';

const Faq = () => {
  const [faqs, setFaqs] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const [newFaq, setNewFaq] = useState({ title: '', description: '', image: '' });

  useEffect(() => {
    fetchFAQs();
  }, []);

  const fetchFAQs = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/faqs`);
      setFaqs(response.data);
      setLoading(false);
    } catch (error) {
      setError('Failed to fetch FAQs');
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewFaq((prev) => ({ ...prev, [name]: value }));
  };

  const createFaq = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/faqs`, newFaq);
      setFaqs([...faqs, response.data]);  
      setNewFaq({ title: '', description: '', image: '' });  
    } catch (error) {
      setError('Failed to create FAQ');
    }
  };

  
  const updateFaq = async (id) => {
    const updatedFaq = prompt("Update the FAQ title and description (comma separated):", "Title, Description");
    if (!updatedFaq) return;

    const [title, description] = updatedFaq.split(',');

    try {
      const response = await axios.put(`${process.env.REACT_APP_API_URL}/faqs/${id}`, {
        title: title.trim(),
        description: description.trim(),
      });

      const updatedFaqs = faqs.map((faq) => (faq.id === id ? response.data : faq));
      setFaqs(updatedFaqs);
    } catch (error) {
      setError('Failed to update FAQ');
    }
  };

  const deleteFaq = async (id) => {
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/faqs/${id}`);
      setFaqs(faqs.filter((faq) => faq.id !== id));
    } catch (error) {
      setError('Failed to delete FAQ');
    }
  };

  if (loading) return <p>Loading FAQs...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="faq-section">
    <div className='aro-f'>
    <Link to="/home">
    <i className="fa-solid fa-arrow-left" style={{color: "#fff",}} />
    </Link>
    </div>
      <h2>FaQ Section</h2>

      <form onSubmit={createFaq} className='form'>
      
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={newFaq.title}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={newFaq.description}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={newFaq.image}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Add FAQ</button>
      </form>

      <div className="faq-container">
        {faqs.map((faq) => (
          <div key={faq.id} className="faq-cd">
            <img src={faq.image} alt={faq.title} />
            <div className="faq-content">
              <h3>{faq.title}</h3>
              <p>{faq.description}</p>
              <button onClick={() => updateFaq(faq.id)}>Update</button>
              <button onClick={() => deleteFaq(faq.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
