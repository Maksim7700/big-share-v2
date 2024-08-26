import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './js/main-components/Home';
import Header from "./js/components/head/Header";
import LoginPage from "./js/admin/auth/LoginPage";
import RequireAuth from "./js/RequireAuth";
import Siderbar from "./js/admin/userpage/sidebar/Sidebar";
import BlogAuthor from "./js/admin/userpage/pages/author/AuthorPage";
import './index.css';
import BlogPage from "./js/admin/userpage/pages/blog/BlogPage";
import Blog from "./js/admin/userpage/tables/blog/Blog";

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/dashboard/main"
          element={
            <>
            <RequireAuth>
              <div className="admin-panel">
                <Siderbar />
              </div>
            </RequireAuth>
            </>
          }
        />
        <Route
          path="/dashboard/blog"
          element={
            <>
            <RequireAuth>
              <div className="admin-panel">
                <Siderbar />
                <BlogPage />
              </div>
            </RequireAuth>
            </>
          }
        />
        <Route
          path="/dashboard/blog/:id"
          element={
            <>
              <RequireAuth>
                <div className="admin-panel">
                  <Siderbar />
                  <Blog />
                </div>
              </RequireAuth>
            </>
          }
        />
        <Route
          path="/dashboard/author"
          element={
            <>
            <RequireAuth>
              <div className="admin-panel">
                <Siderbar />
                <BlogAuthor />
              </div>
            </RequireAuth>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
