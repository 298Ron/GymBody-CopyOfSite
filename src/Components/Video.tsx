import { FunctionComponent, useEffect, useState } from "react";
interface VideoProps {
  render: any;
  modal: any;
  setModal: Function;
}

const Video: FunctionComponent<VideoProps> = ({ render, modal, setModal }) => {
  let openModal = () => {
    if (modal === "invisible") {
      setModal("visible");
    } else {
      setModal("invisible");
    }
  };
  return (
    <div
      className="text-light my-5"
      style={{
        position: "relative",
        width: "100%",
        textAlign: "center",
        cursor: "pointer",
      }}
      onClick={openModal}
    >
      <img
        className=""
        style={{
          width: "100%",
          minHeight: "30vh",
          objectFit: "cover",
          objectPosition: "70%",
          zIndex: "1",
        }}
        src="videoSection/video-img.jpg"
        alt=""
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <button className=" btnPlay">
          <i className="fa-solid fa-play"></i>
        </button>
        <h1 className="mt-3">FREE WORKOUT NOW</h1>
      </div>
      <span id="trainers" style={{ visibility: "hidden" }}>
        s
      </span>
    </div>
  );
};
export default Video;
