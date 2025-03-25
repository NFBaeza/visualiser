import React from 'react';
import ReactDOM from 'react-dom/client'; // <-- IMPORTANTE: usa 'client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './styles.css';

import Home from "./pages/Home";
import DataPage from "./pages/DataPage";
import RecommendationPage from "./pages/RecommendationPage";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
			<Route path="/DataPage" element={<DataPage />} />
      <Route path="/RecommendationPage" element={<RecommendationPage/>} />
    </Routes>
  </Router>
);

