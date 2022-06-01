import './App.css';
import LoginPage from './pages/LoginPage';
import FindPage from './pages/FindPage';
import SignUpPage from './pages/SignUpPage';
import { Route, BrowserRouter, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/find" element={<FindPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;