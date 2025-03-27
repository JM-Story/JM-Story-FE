import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import PostPage from "./pages/PostPage";
import PostCreate from "./pages/PostCreate";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PostPage />} />
        <Route path="/create" element={<PostCreate />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);