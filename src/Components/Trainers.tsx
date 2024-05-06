import { FunctionComponent, useEffect, useState } from "react";
interface TrainersProps {}

const Trainers: FunctionComponent<TrainersProps> = ({}) => {
  let trainers = [
    {
      id: 0,
      img: "/trainers/team-1.jpg",
      firstName: "Gloria ",
      lastName: "Riccasso",
      specific: "Crossfit Coach",
    },
    {
      id: 1,
      img: "/trainers/team-2.jpg",
      firstName: "Charlie ",
      lastName: "Andrews",
      specific: "Cardio & Conditioning",
    },
    {
      id: 2,
      img: "/trainers/team-3.jpg",
      firstName: "Joshua ",
      lastName: "Franklin",
      specific: "Bodybuilding Coach",
    },
    {
      id: 3,
      img: "/trainers/team-4.jpg",
      firstName: "Daisy ",
      lastName: "Newman",
      specific: "Cardio & Conditioning",
    },
  ];
  return (
    <div
      className="text-light"
      style={{
        minHeight: "70vh",
        maxWidth: "70%",
        margin: "0 auto",
      }}
    >
      <div className="titleSection">
        <h2>MEET OUR TRAINERS</h2>
        <p>
          But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain will give you a complete account of the
          system and expound teachings.
        </p>
      </div>
      <div className="row w-100" style={{ margin: "0 auto" }}>
        {trainers.map((trainer) => (
          <div className="col-md-3 trainer my-3" key={trainer.id}>
            <div className="" style={{ overflow: "hidden", maxWidth: "100%" }}>
              <img
                style={{ width: "100%" }}
                className="image"
                src={trainer.img}
                alt={trainer.firstName}
              />
            </div>
            <div className="mt-3">
              <h3 className="h3">
                {trainer.firstName}
                {trainer.lastName}
              </h3>
              <p>{trainer.specific}</p>
            </div>
          </div>
        ))}
      </div>
      <span id="contact" className="pt-5" style={{ visibility: "hidden" }}>
        a
      </span>
    </div>
  );
};
export default Trainers;
