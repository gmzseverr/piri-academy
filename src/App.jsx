import React from "react";
import { Routes, Route } from "react-router-dom"; // Router için
import Header from "./components/Header";

import "./index.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Blog from "./components/Blog";
import ContentDetail from "./components/ContentDetail";
import HomePage from "./components/HomePage";
import Privacy from "./components/Privacy";
import DeleteAccount from "./components/DeleteAccount";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/posts/:slug" element={<ContentDetail />} />
        <Route path="/privacy" element={<Privacy />}/>
        <Route path="/delete-account" element={<DeleteAccount/>}/>
      </Routes>
    </>
  );
}

export default App;
