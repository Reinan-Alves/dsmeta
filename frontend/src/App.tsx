import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./components/Header";
import SalesCard from "./components/SalesCard";
import Top3 from './components/Top3';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
      <ToastContainer />
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <Router>
              <Routes>
                <Route path="/" element={<SalesCard />} />
                <Route path="/top3" element={<Top3 />} />
              </Routes>
            </Router>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
