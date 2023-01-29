import React, { useState } from "react";
import FilterInput from "./FilterInput";

const getImage = (images): string => {
  if (!images || !images[0]) return "";
  if (images[0].type === "video/mp4") return images[0].gifv.slice(0, -1);
  return images[0].link;
};
export default ({ data }: { data: [] }): JSX.Element => {
  return (
    <div>
      {data.map(({ images, description, title, id }) => (
        <div key={images && images[0].link} className="gallery">
          <a href={`/${id}`}>
            <img class="image-gallery"
                src={getImage(images)}
              alt="Cinque Terre"
            />
          </a>
          <div className="desc">{description || title}</div>
        </div>
      ))}
    </div>
  );
};
