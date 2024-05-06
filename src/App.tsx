import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import TrainingPrograms from "./Components/TrainingPrograms";
import { ToastContainer } from "react-toastify";
import About from "./Components/About";
import Pricing from "./Components/Pricing";
import Trainers from "./Components/Trainers";
import Footer from "./Components/Footer";
import LogosCarousel from "./Components/LogosCarousel";
import Video from "./Components/Video";
import VideoModal from "./Components/VideoModal";
import Contact from "./Components/Contact";

function App() {
  const [modal, setModal] = useState("invisible");

  let [dataUpdated, setDataUpdated] = useState<boolean>(false);
  let render = () => setDataUpdated(!dataUpdated);
  return (
    <div className="App">
      <ToastContainer />
      <VideoModal
        render={render}
        modal={modal}
        setModal={setModal}
      ></VideoModal>
      <Navbar></Navbar>
      <Home></Home>
      <TrainingPrograms></TrainingPrograms>
      {/* <About></About> */}

      <LogosCarousel></LogosCarousel>
      <Pricing></Pricing>
      <Video render={render} modal={modal} setModal={setModal}></Video>
      <Trainers></Trainers>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
