import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Barang from "./views/Barang";
import EditBarangForm from './views/EditBarang';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const Layout = ({ children }) => {
    return (
        <div className="">
          <Navbar />
          <main className="">
            <div className="">{children}</div>
          </main>
        </div>
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/barang" element={<Layout><Barang /></Layout>} />
        <Route path="/editbarang" element={<Layout><EditBarangForm /></Layout>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
