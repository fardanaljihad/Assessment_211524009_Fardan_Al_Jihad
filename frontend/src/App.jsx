import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Barang from "./views/Barang";
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
      </Routes>
    </BrowserRouter>
  )
}

export default App
