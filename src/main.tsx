import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

import App from "./App.tsx";
import About from "./About.tsx";
import Stayforlong from "./Stayforlong.tsx";
import Huru from "./Huru.tsx";
import Clubberize from "./Clubberize.tsx";
import Lowtaux from "./Lowtaux.tsx";
import Hypo from "./Hypo.tsx";
import Private from "./Private.tsx";
import Mango from "./Mango.tsx";


import "./index.css";

// PrivateRoute component
const PrivateRoute = ({ children }: { children: JSX.Element }) => {
	const isAuthenticated = localStorage.getItem("authenticated") === "true";
	return isAuthenticated ? children : <Navigate to="/private" />;
 };

 
ReactDOM.createRoot(document.getElementById("root")!).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/stayforlong" element={<Stayforlong />} />
      <Route path="/huru" element={<Huru />} />
      <Route path="/clubberize" element={<Clubberize />} />
      <Route path="/lowtaux" element={<Lowtaux />} />
      <Route path="/hypo" element={<Hypo />} />
      <Route path="/private" element={<Private />} />
      <Route path="/mango" element={<PrivateRoute><Mango /></PrivateRoute>} />
    </Routes>
  </HashRouter>
);
