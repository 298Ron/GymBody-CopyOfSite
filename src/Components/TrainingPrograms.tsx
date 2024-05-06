import { FunctionComponent, useEffect, useState } from "react";
interface TrainingProgramsProps {}

const TrainingPrograms: FunctionComponent<TrainingProgramsProps> = ({}) => {
  let imgGallery = [
    {
      id: 0,
      src: `/gallery/gallery-1.jpg`,
      title: "CARDIO PROGRAM",
      paragraph:
        "There are many variations passages more Ipsum available but majority",
    },
    {
      id: 1,
      src: `/gallery/gallery-2.jpg`,
      title: "PURE STRENGHT",
      paragraph:
        "There are many variations passages more Ipsum available but majority",
    },
    {
      id: 2,
      src: `/gallery/gallery-3.jpg`,
      title: "TRUE CHALLENGE",
      paragraph:
        "There are many variations passages more Ipsum available but majority",
    },
  ];
  return (
    <div>
      <span id="programs" style={{ visibility: "hidden" }}>
        #
      </span>
      {/*  TRAINING PROGRAMS + 3 Pictures */}
      <div className="vh-75 mt-5">
        {/* TITLE & PARAGRAPH */}
        <div className="text-light titleSection">
          <h1 className="h1">TRAINING PROGRAMS</h1>
          <p>
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain will give you a complete account of the
            system and expound teachings.
          </p>
        </div>
        {/* GALLERY */}
        <div
          className="m auto"
          style={{
            textAlign: "center",
            margin: "0 auto",
            width: "90%",
            overflow: "hidden",
          }}
        >
          <div className="row" style={{ maxWidth: "100%", margin: "0 auto" }}>
            {imgGallery.length ? (
              imgGallery.map((index) => (
                <div
                  className="col-md-4 text-light "
                  key={index.id}
                  style={{ maxWidth: "400px", margin: "0 auto" }}
                >
                  {index.id < 3 && (
                    <div className="">
                      <div
                        style={{
                          width: "100%",
                          overflow: "hidden",
                        }}
                        className=""
                      >
                        <img
                          className="my-3 img"
                          src={index.src}
                          alt={index.title}
                          style={{ width: "100%" }}
                        />
                      </div>
                      <h3>{index.title}</h3>
                      <p>{index.paragraph}</p>
                    </div>
                  )}
                </div>
                /*  <div className="col-md-4 text-light" key={index.id}>
                <img src={index.src} alt={index.title} />
                <h3>{index.title}</h3>
                <p>{index.paragraph}</p>
              </div> */
              ))
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
      {/* Big Picture + 4 small icons */}
      <div className="" style={{ marginTop: "100px" }}>
        <div className="row " style={{ width: "80%", margin: "0 auto" }}>
          <div className="col-xl-6 overflow-hidden">
            <img
              src="/gallery/services-img.jpg"
              alt=""
              className="img"
              style={{ width: "100%", maxWidth: "650px" }}
            />
          </div>
          <div className="col-xl-6 mt-2">
            <div className="text-light row p-5">
              <span className="col-md-6 py-2">
                <i className="icon fa-solid fa-clipboard-list"></i>
                <h3 className="pt-3">PROGRESSION</h3>
                <p>There many variations passages Ipsum available majority</p>
              </span>
              <span className="col-md-6 py-2">
                <i className="icon fa-solid fa-dumbbell"></i>
                <h3 className="pt-3">WORKOUT</h3>
                <p>There many variations passages Ipsum available majority</p>
              </span>
              <span className="col-md-6 py-2">
                <i className="icon fa-solid fa-pills"></i>
                <h3 className="pt-3">NUTRITION</h3>
                <p>There many variations passages Ipsum available majority</p>
              </span>
              <span className="col-md-6 py-2">
                <i className="icon fa-solid fa-heart-circle-bolt"></i>
                <h3 className="pt-3">CONFIDENCE</h3>
                <p>There many variations passages Ipsum available majority</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TrainingPrograms;
