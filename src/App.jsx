import React from "react";
import { Routes, Route } from "react-router-dom"; // Router için
import Header from "./components/Header";

import "./App.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Blog from "./components/Blog";
import ContentDetail from "./components/ContentDetail";
import HomePage from "./components/HomePage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/posts/:slug" element={<ContentDetail />} />
      </Routes>
    </>
  );
}

export default App;
