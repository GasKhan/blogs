import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux/index';

import './App.css';
import BlogForm from './components/blogForm/BlogForm';
import Blogs from './components/blogs/Blogs';
import Header from './components/header/Header';
import About from './components/about/About';
import BlogPage from './components/blogPage/BlogPage';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Blogs />} />
            <Route path="/blogForm" element={<BlogForm />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog/:id" element={<BlogPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
