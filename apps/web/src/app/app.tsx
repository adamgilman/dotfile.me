// eslint-disable-next-line @typescript-eslint/no-unused-vars
// import styles from './app.module.css';

import { Route, Routes, Link } from 'react-router-dom';
import "../assets/css/bootstrap.css"
import "../assets/vendors/iconly/bold.css"
import "../assets/vendors/perfect-scrollbar/perfect-scrollbar.css"
import "../assets/vendors/bootstrap-icons/bootstrap-icons.css"
import "../assets/css/app.css"

import { Login } from '../components/auth/Login'

import "../assets/vendors/perfect-scrollbar/perfect-scrollbar.min.js"
import { Header } from '../components/base/Header';
import { Footer } from '../components/base/Footer';
// import "../assets/js/bootstrap.bundle.min.js"
// import "../assets/vendors/apexcharts/apexcharts.js"
// import "../assets/js/pages/dashboard.js"
// import "../assets/js/main.js"

export function App() {
  return (
    <div id="main">
      <Header />

      {/* <Login /> */}

      <Footer />
    </div>


  );
}

export default App;
