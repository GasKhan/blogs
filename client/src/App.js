import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import BlogForm from './components/blogForm/BlogForm';
import Blogs from './components/blogs/Blogs';
import Header from './components/header/Header';
import About from './components/about/About';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Blogs />} />
          <Route path="/blogForm" element={<BlogForm />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
