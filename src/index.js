import React from 'react';
import ReactDOM from 'react-dom/client'; // <-- IMPORTANTE: usa 'client'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css"; //cambio general
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from "./pages/home";
import DataPage from "./pages/DataPage";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
			<Route path="/DataPage" element={<DataPage />} />
    </Routes>
  </Router>
);

