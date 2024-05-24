import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [genre, setGenre] = useState('');
  const [note, setNote] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear,
      genre,
      note
    };
    setLoading(true);
    axios.post('http://localhost:5555/books', data)
      .then(() => {
        setLoading(false);
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        alert('An error happened. Please Check console');
      });
  };

  return (
    <div style={{ 
      padding: '1rem', 
      backgroundImage: 'url(book.jpg)', // Corrected path to the background image
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat' 
    }}>
      <BackButton />
      <h1 style={{ fontSize: '30px', marginTop: '1rem', marginBottom: '1rem', color:'blue', fontFamily: 'sans-serif' }}>Create Book</h1>
      {loading ? <Spinner /> : null}
      <div style={{ border: '2px solid #e53e3e', borderRadius: '0.75rem', width: '600px', padding: '1rem', margin: '0 auto', fontFamily: 'sans-serif' }}>
        <div style={{ marginTop: '1rem', marginBottom: '1rem' }}>
          <label style={{ fontSize: '1.5rem', color: 'black', marginRight: '0.5rem', fontFamily: 'sans-serif' }}>Title</label>
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ border: '2px solid #000', padding: '0.5rem', width: '100%', fontFamily: 'sans-serif' }}
          />
        </div>
        <div style={{ marginTop: '1rem', marginBottom: '1rem' }}>
          <label style={{ fontSize: '1.5rem', color: 'black', marginRight: '0.5rem', fontFamily: 'sans-serif' }}>Author</label>
          <input
            type='text'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            style={{ border: '2px solid #000', padding: '0.5rem', width: '100%', fontFamily: 'sans-serif' }}
          />
        </div>
        <div style={{ marginTop: '1rem', marginBottom: '1rem' }}>
          <label style={{ fontSize: '1.5rem', color: 'black', marginRight: '0.5rem', fontFamily: 'sans-serif' }}>Genre</label>
          <input
            type='text'
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            style={{ border: '2px solid #000', padding: '0.5rem', width: '100%', fontFamily: 'sans-serif' }}
          />
        </div>
        <div style={{ marginTop: '1rem', marginBottom: '1rem' }}>
          <label style={{ fontSize: '1.5rem', color: 'black', marginRight: '0.5rem', fontFamily: 'sans-serif' }}>Publish Year</label>
          <input
            type='number'
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            style={{ border: '2px solid #000', padding: '0.5rem', width: '100%', fontFamily: 'sans-serif' }}
          />
        </div>
        <div style={{ marginTop: '1rem', marginBottom: '1rem' }}>
          <label style={{ fontSize: '1.5rem', color: 'black', marginRight: '0.5rem', fontFamily: 'sans-serif' }}>My Note</label>
          <input
            type='text'
            value={note}
            onChange={(e) => setNote(e.target.value)}
            style={{ border: '2px solid #000', padding: '0.5rem', width: '100%', fontFamily: 'sans-serif' }}
          />
        </div>
        <button
          style={{ padding: '0.5rem', backgroundColor: '#90cdf4', margin: '0.5rem',marginLeft:'250px', fontFamily: 'sans-serif' }}
          onClick={handleSaveBook}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateBook;
