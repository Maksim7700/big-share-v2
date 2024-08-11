import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './js/main-components/Home';
import Header from "./js/components/head/Header";
import Blog from "./js/pages/Blog";
import LoginPage from "./js/admin/auth/LoginPage";
import Dashboard from "./js/admin/userpage/Dashboard";
import RequireAuth from "./js/RequireAuth";

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        />
        <Route path="/portfolio" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;
