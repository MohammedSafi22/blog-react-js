import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import ArticleDetailsPage from "./pages/ArticleDetailes/ArticleDetailsPage";

export default function App() {
  return (
    <div className="font-opensans">
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/blog/:id" element={<ArticleDetailsPage />} />
      </Routes>
      
    </div>
  )
}