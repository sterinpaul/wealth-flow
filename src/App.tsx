import { lazy, Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Loader from "./components/Loader.tsx";

const Home = lazy(() => import("./pages/Home.tsx"));
const Terms = lazy(() => import("./pages/Terms.tsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader/>}>
        <Home />
      </Suspense>
    ),
  },
  {
    path: "/terms",
    element: (
      <Suspense fallback={<Loader/>}>
        <Terms />
      </Suspense>
    ),
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
