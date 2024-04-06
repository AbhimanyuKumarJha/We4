import "./App.css";
import Home from "./components/Home/Home";
import Header from "./components/Layout/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Interview from "./components/Interview/Interview";
import Resume from "./components/Resume/Resume";
import Dashboard from "./components/Dashboard/Dashboard";
import CompleteReview from "./components/Interview/CompleteInterview";
import InterviewMEET from "./components/Interview/meet";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Resume" element={<Resume />} />
          <Route exact path="/Interview" element={<Interview />} />
          <Route
            extact
            path="/Interview/Details/:postID/:typeID/Interviewer/:InterviewID"
            element={<InterviewMEET />}
          />
          <Route
            exact
            path="/Complete-Interview"
            element={<CompleteReview />}
          />
          <Route exact path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
