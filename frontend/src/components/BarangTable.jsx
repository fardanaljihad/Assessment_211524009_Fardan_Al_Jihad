import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { BiEdit, BiTrash } from 'react-icons/bi';
import { Link } from 'react-router-dom';

export default function BarangList() {
  const [budgetRules, setBudgetRules] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/barang');
        setBudgetRules(response.data);
      } catch (error) {
        setMessage('Error fetching data');
      }
    };

    fetchData();
  }, []);

  return (
    <section className="col-md-12 mt-5 p-5">
      <div className="box">
        <p className="text-center text-danger">{message}</p>
        <table className="table table-hover table-striped border">
          <thead>
            <tr>
              <th style={{ width: '5%' }}>No.</th>
              <th style={{ width: '30%' }}>Nama Barang</th>
              <th style={{ width: '10%' }}>Satuan</th>
              <th style={{ width: '20%' }}>Harga Satuan</th>
              <th style={{ width: '20%' }}>Stok</th>
              <th className="text-center" style={{ width: '15%' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {budgetRules.map((barang, index) => (
              <tr key={barang.kodeBarang}>
                <td>{index + 1}</td>
                <td>{barang.namaBarang}</td>
                <td>{barang.satuan}</td>
                <td>{barang.hargaSatuan}</td>
                <td>{barang.stok}</td>
                <td className="text-center">
                  <div className="btn-group">
                    {/* Add your edit and delete actions here */}
                    {/* Example using React Router for edit action */}
                    <Link to={`edit-barang/${barang.kodeBarang}`} className="btn btn-sm btn-info me-2">
                      <BiEdit style={{ fontSize: '20px', verticalAlign: 'middle' }} />
                    </Link>
                    <button onClick={() => deleteBudgetRule(barang.kodeBarang)} className="btn btn-sm btn-danger">
                      <BiTrash style={{ fontSize: '20px', verticalAlign: 'middle' }} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
