import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useGlobalContext } from "./components/Context/Context";
import {
  Blog,
  FAQs,
  OurServices,
  PlantsPots,
  Tools,
  OurStory,
  PageNotFound,
} from "./Pages/index";
import { Header, Modal, ThankyouPage } from "./components/index";
function App() {
  const { isOpen, isThankyou } = useGlobalContext();
  return (
    <div>
      {isOpen && <Modal />}
      {isThankyou && <ThankyouPage />}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/plantspots" />} />
          <Route path="/plantspots" element={<PlantsPots />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/ourservices" element={<OurServices />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/ourstory" element={<OurStory />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
