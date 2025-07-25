import { Route, Routes } from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact"; // Ensure you import the Contact page here
import ValuesPage from "./Pages/Values";
import Menu from "./Pages/Menu";
import AdminUpload from "./Pages/AdminUpload";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/values" element={<ValuesPage />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/admin-upload" element={<AdminUpload />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
