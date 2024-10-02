import { lazy, Suspense, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./components/Layout";

const Home = lazy(() => import("./pages/Home"));
const Notfound = lazy(() => import("./pages/Notfound"));
const Login = lazy(() => import("./pages/auth/Login"));

export default function App() {
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, [location.pathname]);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes location={location} key={location.pathname}>
          <Route index element={<Layout>{<Home />}</Layout>} />
          <Route path="/login" element={<Layout>{<Login />}</Layout>} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Suspense>
    </>
  );
}
