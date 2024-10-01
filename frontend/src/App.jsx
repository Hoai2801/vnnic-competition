import { lazy, Suspense, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

const Home = lazy(() => "./pages/Home");
const Login = lazy(() => "./pages/auth/Login");
const Notfound = lazy(() => "./pages/Notfound");

function App() {
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 1000);
  }, [location.pathname]);
  return (
    <>
      <Suspense fallback={<div>loading...</div>}>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
