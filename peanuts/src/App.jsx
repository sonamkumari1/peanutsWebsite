import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProcessingPage from "./pages/ProcessingPage";
import ContactPage from "./pages/ContactPage";
import ProductsPage from "./pages/ProductsPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          {/* <Route path="processing" element={<ProcessingPage />}/> */}
          <Route path="products" element={<ProductsPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
