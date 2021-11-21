import "./App.css";
import { Route, Routes } from "react-router-dom";
import ShowAll from "./pages/ShowAll";
import ShowRejected from "./pages/ShowRejected";
import ShowShortlisted from "./pages/ShowShortlisted";
import Candidate from "./pages/Candidate";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ShowAll />} />
        <Route path="/rejected" element={<ShowRejected />} />
        <Route path="/shortlisted" element={<ShowShortlisted />} />
        <Route path="/candidate" element={<Candidate />} />
        <Route path="/candidate/:id" element={<Candidate />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
