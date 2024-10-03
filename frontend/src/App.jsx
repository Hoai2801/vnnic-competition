import { lazy, Suspense, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Transition from "./components/common/Transition";
import Layout from "./components/layout/Layout";
import Loading from "./components/ui/loading/Loading";

const Home = lazy(() => import("./pages/Home"));
const Notfound = lazy(() => import("./pages/notfound/Notfound"));
const Login = lazy(() => import("./pages/auth/Login"));
const Register = lazy(() => import("./pages/auth/Register"));

export default function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Suspense
      fallback={
        <Transition>
          <Loading />
        </Transition>
      }
    >
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
          path="/register"
          element={
            <Transition>
              <Register />
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
  );
}
