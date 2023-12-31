import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Discover from "./pages/Discover";
import Home from "./pages/Home";
import News from "./pages/News";
import Profile from "./pages/Profile";
import DetailNews from "./pages/DetailNews";
import Data from "./pages/Data";
import SurveyPurpose from "./pages/SurveyPurpose";
import SurveyData from "./pages/SurveyData";
import Subscription from "./pages/Subscription";
import NavBar from "./NavBar";

function GolekFoodsApp() {
  return (
    <BrowserRouter basename="/">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/news" element={<News />} />
        <Route path="/detailnews" element={<DetailNews />} />
        <Route path="/data" element={<Data />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/survey-purpose" element={<SurveyPurpose />} />
        <Route path="/survey-data" element={<SurveyData />} />
        <Route path="/subscription" element={<Subscription />} />
      </Routes>
    </BrowserRouter>
  );
}

export default GolekFoodsApp;
