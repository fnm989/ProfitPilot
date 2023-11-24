// src/App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChoosePage from './ChoosePage';
import UserInfoPage from './UserInfoPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ChoosePage />} />
        <Route path="/user-info/:index" element={<UserInfoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
