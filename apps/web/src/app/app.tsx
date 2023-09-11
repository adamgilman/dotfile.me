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
// import "../assets/js/bootstrap.bundle.min.js"
// import "../assets/vendors/apexcharts/apexcharts.js"
// import "../assets/js/pages/dashboard.js"
// import "../assets/js/main.js"

export function App() {
  return (
    <div id="main">
      <div className="page-heading">
        <div className="page-title">
          <div className="row">
            <div className="col-12 col-md-6 order-md-1 order-last">
              <h3>DFM - DotFileMe</h3>
              <p className="text-subtitle text-muted">Where dotfiles can be social</p>
            </div>
            <div className="col-12 col-md-6 order-md-2 order-first">
              <nav
                aria-label="breadcrumb"
                className="breadcrumb-header float-start float-lg-end"
              >
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index.html">home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Login
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <Login />

      <footer>
        <div className="footer clearfix mb-0 text-muted">
          <div className="float-start">
            <p>2023 - Terminus City Technologies</p>
          </div>
        </div>
      </footer>
    </div>


  );
}

export default App;
