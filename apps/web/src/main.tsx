import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './redux/store';

import { LoginPage } from './pages/auth/Login';
import { LogoutPage } from './pages/auth/Logout';
import { RegisterPage } from './pages/auth/Register';


import "./assets/css/bootstrap.css"
import "./assets/vendors/iconly/bold.css"
import "./assets/vendors/perfect-scrollbar/perfect-scrollbar.css"
import "./assets/vendors/bootstrap-icons/bootstrap-icons.css"
import "./assets/css/app.css"
import "./assets/vendors/perfect-scrollbar/perfect-scrollbar.min.js"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} /> {/* TODO: create homepage and replace */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/logout" element={<LogoutPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
