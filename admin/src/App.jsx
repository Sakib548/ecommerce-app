import { Route, Routes } from "react-router-dom";

import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Add from "./pages/Add";
import List from "./pages/List";
import Orders from "./pages/Orders";

export const backendUrl = import.meta.env.VITE_BACKEND_URL;

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);
  return (
    <div className="bg-gray-50 min-h-screen">
      <ToastContainer />
      {token !== "" ? (
        <>
          <Navbar setToken={setToken} />
          <hr />
          <div className="flex w-full">
            <Sidebar />
            <div className="w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base">
              <Routes>
                <Route path="/add" element={<Add setToken={setToken} />} />
                <Route path="/list" element={<List setToken={setToken} />} />
                <Route
                  path="/orders"
                  element={<Orders setToken={setToken} />}
                />
              </Routes>
            </div>
          </div>
        </>
      ) : (
        <Login setToken={setToken} />
      )}
    </div>
  );
};
export default App;
