import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './js/main-components/Home';
import Header from "./js/components/head/Header";
import Blog from "./js/pages/Blog";

function App() {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path='' element={<Home />}/>
          <Route path="/portfolio" element={<Blog />} />
        </Routes>
    </Router>
  );
}

export default App;
