import React, { useState } from 'react';
import axios from 'axios';

export default function EditBarangForm() {
  const [message, setMessage] = useState('');
  let kodeBarang = 'BRG21152400901';

  const [formData, setFormData] = useState({
    kodeBarang: '',
    namaBarang: '',
    satuan: '',
    hargaSatuan: '',
    stok: '',
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
      const response = await axios.put(
        `http://localhost:5000/barang/${kodeBarang}`,
        {
          kodeBarang: formData.kodeBarang,
          namaBarang: formData.namaBarang,
          satuan: formData.satuan,
          hargaSatuan: formData.hargaSatuan,
          stok: formData.stok,
        }
      );

      if (response.status === 200) {
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
          <label htmlFor="kodeBarang" className="form-label">
            Kode Barang
          </label>
          <input
            type="text"
            className="form-control"
            id="kodeBarang"
            name="kodeBarang"
            value={formData.kodeBarang}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="namaBarang" className="form-label">
            Nama Barang
          </label>
          <input
            type="text"
            className="form-control"
            id="namaBarang"
            name="namaBarang"
            value={formData.namaBarang}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="satuan" className="form-label">
            Satuan
          </label>
          <input
            type="text"
            className="form-control"
            id="satuan"
            name="satuan"
            value={formData.satuan}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="hargaSatuan" className="form-label">
            Harga Satuan
          </label>
          <input
            type="number"
            className="form-control"
            id="hargaSatuan"
            name="hargaSatuan"
            value={formData.hargaSatuan}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="stok" className="form-label">
            Stok
          </label>
          <input
            type="number"
            className="form-control"
            id="stok"
            name="stok"
            value={formData.stok}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
}
