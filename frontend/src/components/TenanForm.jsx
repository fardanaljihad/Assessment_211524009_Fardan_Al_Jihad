import React, { useState } from 'react';
import axios from 'axios';

export default function TenanForm() {
  const [message, setMessage] = useState('');

  const [formData, setFormData] = useState({
    kodeTenan: '',
    namaTenan: '',
    hp: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:5000/tenan',
        {
          kodeTenan: formData.kodeTenan,
          namaTenan: formData.namaTenan,
          hp: formData.hp,
        }
      );

      if (response.status === 201) {
        setMessage(response.data.message);
      }
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <p className="text-center text-success">{message}</p>
        <div className="mb-3">
          <label htmlFor="kodeTenan" className="form-label">
            Kode Tenan
          </label>
          <input
            type="text"
            className="form-control"
            id="kodeTenan"
            name="kodeTenan"
            value={formData.kodeTenan}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="namaTenan" className="form-label">
            Nama Tenan
          </label>
          <input
            type="text"
            className="form-control"
            id="namaTenan"
            name="namaTenan"
            value={formData.namaTenan}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="hp" className="form-label">
            Nomor HP
          </label>
          <input
            type="text"
            className="form-control"
            id="hp"
            name="hp"
            value={formData.hp}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
