import React, { useState, SyntheticEvent } from "react";
import FilterInput from "./FilterInput";

const sectionOptions = ["hot", "top", "user"];
const sortOptions = ["viral", "top", "time", "rising"];
const windowOptions = ["day", "week", "month", " year", " all"];

export default (): JSX.Element => {
  const [section, changeSection] = useState("hot");
  const [sort, changeSort] = useState("viral");
  const [window, changeWindow] = useState("day");

  const changeSection2 = (event) => {
    console.log({ event });
  };
  return (
    <div className="d-flex justify-content-around w-100">
      <FilterInput
        options={sectionOptions}
        title="section"
        onChange={(event: SyntheticEvent) =>
          changeSection((event.target as HTMLInputElement).value)
        }
        value={section}
      />
      <FilterInput
        options={sortOptions}
        title="sort"
        onChange={(event: SyntheticEvent) =>
          changeSort((event.target as HTMLInputElement).value)
        }
        value={sort}
      />
      <FilterInput
        options={windowOptions}
        title="window"
        onChange={(event: SyntheticEvent) =>
          changeWindow((event.target as HTMLInputElement).value)
        }
        value={window}
      />
    </div>
  );
};
