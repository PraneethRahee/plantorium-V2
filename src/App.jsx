import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import "lenis/dist/lenis.css";
import { useLenisSmoothScroll } from "./hooks/useLenisSmoothScroll";
import HomePage from "./pages/HomePage";

const ContactUsPage = lazy(() => import("./pages/ContactUsPage"));

function App() {
  useLenisSmoothScroll()

  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contactus" element={<ContactUsPage />} />
      </Routes>
    </Suspense>
  )
}

export default App
