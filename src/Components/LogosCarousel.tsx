import { FunctionComponent, useEffect, useState } from "react";
interface LogosCarouselProps {}

const LogosCarousel: FunctionComponent<LogosCarouselProps> = ({}) => {
  let logos = [
    { id: 1, img: "logos/1.png", alt: "logo1" },
    { id: 2, img: "logos/3.png", alt: "logo2" },
    { id: 3, img: "logos/4.png", alt: "logo3" },
    { id: 4, img: "logos/1.png", alt: "logo1" },
    { id: 5, img: "logos/3.png", alt: "logo2" },
    { id: 6, img: "logos/4.png", alt: "logo3" },
    { id: 7, img: "logos/1.png", alt: "logo3" },
    { id: 8, img: "logos/3.png", alt: "logo3" },
    { id: 9, img: "logos/4.png", alt: "logo3" },
    { id: 10, img: "logos/1.png", alt: "logo3" },
  ];

  return (
    <div
      className="text-light "
      style={{
        marginBlock: "100px",
        minHeight: "200px",
        backgroundColor: "#deef0b",
        maxHeight: "200px",
        overflow: "scroll",
        overflowY: "hidden",
        overflowX: "hidden",
      }}
    >
      <div className="">
        {logos.length ? (
          logos.map((logo) => (
            <img
              key={logo.id}
              className=""
              style={{
                width: "auto",
                margin: "0 auto",
                marginTop: "70px",
              }}
              src={logo.img}
              alt={logo.alt}
            />
          ))
        ) : (
          <></>
        )}
      </div>
      <span id="pricing"></span>
    </div>
  );
};

export default LogosCarousel;
