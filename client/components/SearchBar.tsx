import React, { useState, SyntheticEvent } from "react";
import { SetStateAction } from "react";
import { Dispatch } from "react";
import FilterInput from "./FilterInput";

const sectionOptions = ["hot", "top", "user"];
const sortOptions = ["viral", "top", "time", "rising"];
const windowOptions = ["day", "week", "month", " year", " all"];

type Props = {
  section: string;
  changeSection: Dispatch<SetStateAction<string>>;
  sort: string;
  changeSort: Dispatch<SetStateAction<string>>;
  window: string;
  changeWindow: Dispatch<SetStateAction<string>>;
};

export default ({
  section,
  changeSection,
  sort,
  changeSort,
  window,
  changeWindow,
}: Props): JSX.Element => {
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
