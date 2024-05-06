import { FunctionComponent, useEffect, useState } from "react";
interface VideoModalProps {
  render: any;
  modal: any;
  setModal: Function;
}

const VideoModal: FunctionComponent<VideoModalProps> = ({
  render,
  modal,
  setModal,
}) => {
  let openModal = () => {
    if (modal === "invisible") {
      setModal("visible");
    } else {
      setModal("invisible");
    }
  };

  return (
    <div className={modal}>
      <div className="videoModal" onClick={openModal}>
        <iframe
          className="theVideo"
          width="1427"
          height="612"
          src="https://www.youtube.com/embed/XHOmBV4js_E"
          title="Video Placeholder"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};
export default VideoModal;
