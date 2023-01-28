import React, { useState } from "react";
import FilterInput from "./FilterInput";

const fakeData = [
  {
    imgurl: "https://www.w3schools.com/css/img_5terre.jpg",
    desc: "going to ace it",
  },
  {
    imgurl: "https://www.w3schools.com/css/img_5terre.jpg",
    desc: "going to ace it",
  },
  {
    imgurl: "https://www.w3schools.com/css/img_5terre.jpg",
    desc: "going to ace it",
  },
  {
    imgurl: "https://www.w3schools.com/css/img_5terre.jpg",
    desc: "going to ace it",
  },
  {
    imgurl: "https://www.w3schools.com/css/img_5terre.jpg",
    desc: "going to ace it",
  },
];
export default ({data}:{data:[]}): JSX.Element => {
  return (<div>
      {data.map(({images,description }) => (
        <div key={images&& images[0].link} className="gallery">
          <a href="">
            <img src={images && images[0].link} alt="Cinque Terre" width="600" height="400" />
          </a>
          <div className="desc">{description}</div>
        </div>
      ))}
    </div>
  );
};
