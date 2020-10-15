import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

type SearchDates = { startDate: Date; endDate: Date };

const Search: React.FunctionComponent<{
  searchDates: SearchDates;
  onSearch: Function;
}> = ({ searchDates, onSearch }) => {
  const [startDate, setStartDate] = useState(searchDates.startDate);
  const [endDate, setEndDate] = useState(searchDates.endDate);

  const onSearchHandler = () => {
    onSearch(startDate, endDate);
  };

  return (
    <div className="bg-white border border-gray-300 p-4 flex flex-row items-center justify-between">
      <div className="inline-flex">
        <div className="font-medium mr-2">Start date</div>
        <DatePicker
          className="cursor-pointer"
          dateFormat="yyyy-MM-dd"
          selected={startDate}
          onChange={(date: Date) => setStartDate(date)}
        />

        <div className="font-medium mr-2">End date</div>
        <DatePicker
          className="cursor-pointer"
          dateFormat="yyyy-MM-dd"
          selected={endDate}
          onChange={(date: Date) => setEndDate(date)}
        />
      </div>

      <button
        onClick={onSearchHandler}
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
      >
        Search launches
      </button>
    </div>
  );
};

export default Search;
