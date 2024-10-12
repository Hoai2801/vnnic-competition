import { lazy, Suspense, useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import Loading from "./components/common/loading/Loading";
import Layout from "./components/layout/Layout";
import { ToastProvider } from "./components/ui/toast/ToastContext";
import AdminLayout from "./pages/admin/AdminLayout";
import UploadBlog from "./pages/admin/UploadBlog";
import BlogLayout from "./pages/detail/BlogLayout";

const Home = lazy(() => import("./pages/Home"));
const Notfound = lazy(() => import("./pages/notfound/Notfound"));
const Login = lazy(() => import("./pages/auth/Login"));
const Register = lazy(() => import("./pages/auth/Register"));

export default function App() {
  (function () {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.classList.add(savedTheme);
  })();

  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout>
          <Home />
        </Layout>
      ),
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/blog/:slug",
      element: (
        <Layout>
          <BlogLayout />
        </Layout>
      ),
    },
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        {
          path: "upload",
          element: <UploadBlog />,
        },
      ],
    },
    {
      path: "*",
      element: <Notfound />,
    },
  ]);

  return (
    <ToastProvider>
      <Suspense fallback={<Loading />}>
        <RouterProvider router={router}>
          <ScrollToTop />
        </RouterProvider>
      </Suspense>
    </ToastProvider>
  );
}
