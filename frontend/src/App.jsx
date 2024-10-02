import { lazy, Suspense, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import Transition from "./components/Transition";

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
          <Route
            index
            element={<Transition>{<Layout>{<Home />}</Layout>}</Transition>}
          />
          <Route
            path="/login"
            element={<Transition>{<Layout>{<Login />}</Layout>}</Transition>}
          />
          <Route path="*" element={<Transition>{<Notfound />}</Transition>} />
        </Routes>
      </Suspense>
    </>
  );
}
