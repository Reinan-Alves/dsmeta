import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./components/Header";
import SalesCard from "./components/SalesCard";
import Top3 from './components/Top3';


function App() {
  return (
    <>
    <ToastContainer />
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <SalesCard/>
            <Top3 />
          </div>
        </section>
      </main>
    </>
  )
}

export default App
