import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loading from "./components/common/loading/Loading";
import { ToastProvider } from "./components/ui/toast/ToastContext";

const Blog = lazy(() => import("./pages/Blog"));
const Layout = lazy(() => import("./components/layout/Layout"));
const AdminLayout = lazy(() => import("./pages/admin/AdminLayout"));
const UploadBlog = lazy(() => import("./pages/admin/UploadBlog"));
const BlogLayout = lazy(() => import("./pages/detail/BlogLayout"));
const Home = lazy(() => import("./pages/Home"));
const Notfound = lazy(() => import("./pages/notfound/Notfound"));
const Login = lazy(() => import("./pages/auth/Login"));
const Register = lazy(() => import("./pages/auth/Register"));

export default function App() {
  (function () {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.classList.add(savedTheme);
  })();

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
      path: "/blog",
      element: (
        <Layout>
          <Blog />
        </Layout>
      ),
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
        <RouterProvider router={router}></RouterProvider>
      </Suspense>
    </ToastProvider>
  );
}
