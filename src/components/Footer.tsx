import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

type SearchDates = { startDate: Date; endDate: Date };

const Footer: React.FunctionComponent<{firstLaunch: any}> = ({ firstLaunch }) => {

  return (
    <div className="bg-white border border-gray-300 p-4 flex flex-row items-center">
      <div className="font-medium mr-2">First launch: </div>{" "}
      <span className="font-medium mr-2 text-indigo-500">{firstLaunch.name}</span>
      at
      <span className="font-medium ml-2 text-indigo-500">
        {firstLaunch.windowstart}
      </span>
    </div>
  );
};

export default Footer;
