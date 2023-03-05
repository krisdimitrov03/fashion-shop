import { Route, Routes } from 'react-router-dom';
import styles from './App.module.css';
import Home from './pages/home/Home';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import TopMenu from './components/TopMenu/TopMenu'
import Footer from './components/Footer/Footer';
import Copyrights from './components/Copyrights/Copyrights';

function App() {
  return (
    <div className={styles.App}>
      <TopMenu />
      <Header />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
      <Copyrights />
    </div>
  );
}

export default App;
