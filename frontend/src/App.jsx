import { lazy, Suspense, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Transition from "./components/common/Transition";
import Layout from "./components/layout/Layout";

const Home = lazy(() => import("./pages/Home"));
const Notfound = lazy(() => import("./pages/notfound/Notfound"));
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
            element={
              <Transition>
                <Layout>
                  <Home />
                </Layout>
              </Transition>
            }
          />
          <Route
            path="/login"
            element={
              <Transition>
                <Login />
              </Transition>
            }
          />
          <Route
            path="*"
            element={
              <Transition>
                <Notfound />
              </Transition>
            }
          />
        </Routes>
      </Suspense>
    </>
  );
}
