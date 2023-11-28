import React, { useState, useEffect } from 'react'
import axios from 'axios';
import BarangForm from '../components/BarangForm.jsx';
import BarangTable from '../components/BarangTable.jsx';

function Barang() {
  return (
    <div>
      <div><BarangForm /></div>
      <div><BarangTable /></div>
    </div>
  )
}

export default Barang