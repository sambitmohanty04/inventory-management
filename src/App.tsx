
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Login";
import Layout from "./components/Layout"
import Dashboard from "./pages/Dashboard";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Layout />}>

            <Route
              index
              element={<Dashboard />}
            />

            <Route
              path="/login"
              element={<Login />}
            />

          </Route>

        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
        toastStyle={{
          background: "rgba(41, 215, 173, 0.9)",
          backdropFilter: "blur(12px)",
          color: "#111827",
          border: "1px solid rgba(255,255,255,0.25)",
          borderRadius: "10px",
          paddingTop:"20px",
          paddingBottom:"20px"
        }}
      />
    </>
  )
}

export default App
