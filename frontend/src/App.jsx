import { lazy, Suspense, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const Notfound = lazy(() => import("./pages/Notfound"));
const Login = lazy(() => import("./pages/auth/Login"));

function App() {
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 1000);
  }, [location.pathname]);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
