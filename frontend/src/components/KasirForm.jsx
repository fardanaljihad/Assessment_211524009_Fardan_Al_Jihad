import React, { useState } from 'react';
import axios from 'axios';

export default function KasirForm() {
  const [message, setMessage] = useState('');

  const [formData, setFormData] = useState({
    kodeKasir: '',
    namaKasir: '',
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
        'http://localhost:5000/kasir',
        {
          kodeKasir: formData.kodeKasir,
          namaKasir: formData.namaKasir,
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
          <label htmlFor="kodeKasir" className="form-label">
            Kode Kasir
          </label>
          <input
            type="text"
            className="form-control"
            id="kodeKasir"
            name="kodeKasir"
            value={formData.kodeKasir}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="namaKasir" className="form-label">
            Nama Kasir
          </label>
          <input
            type="text"
            className="form-control"
            id="namaKasir"
            name="namaKasir"
            value={formData.namaKasir}
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
