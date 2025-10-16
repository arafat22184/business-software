import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import HomeLayout from "./layout/HomeLayout.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import ContactUs from "./layout/ContactUs.jsx";
import { ToastContainer } from "react-toastify";
import DataProvider from "./provider/DataProvider.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
  },
  {
    path: "/contact",
    Component: ContactUs,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DataProvider>
      <RouterProvider router={router}></RouterProvider>
    </DataProvider>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
    />
  </StrictMode>
);
