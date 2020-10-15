import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import Map from "./Map";
import Search from "./Search";
import Footer from "./Footer";

type ILaunches = { launches: ILaunch[] };
type ILaunch = { id: string; name: string; location: any };

const MapContainer: React.FunctionComponent<any> = () => {
  const initialStartDate: Date = dayjs().toDate();
  const initialEndDate: Date = dayjs().add(3, "month").toDate();
  const initialLaunchApiUrl: string = getLaunchApiUrl(
    initialStartDate,
    initialEndDate
  );

  const searchDates = { startDate: initialStartDate, endDate: initialEndDate };

  const [launchApiUrl, setLaunchApiUrl] = useState(initialLaunchApiUrl);
  const [launches, setLaunches] = useState<ILaunch[]>([]);

  const handleSearch = (startDate: Date, endDate: Date) => {
    setLaunchApiUrl(getLaunchApiUrl(startDate, endDate));
  };

  useEffect(() => {
    async function getLaunches() {
      const response: any = await fetch(launchApiUrl);
      const data: any = await response.json();
      setLaunches(data.launches);
    }
    getLaunches();
  }, [launchApiUrl]);


  return (
    <div className="bg-gray-200 h-screen">
      <Search onSearch={handleSearch} searchDates={searchDates}></Search>
      <Map markerCoordinates={getCoordinatesFromLaunches(launches)} />
      {launches.length > 0 ? (<Footer firstLaunch={launches[0]}></Footer>) : (<div>Loading...</div>)}
    </div>
  );
};

function getLaunchApiUrl(startDate: Date, endDate: Date): string {
  const formattedStartDate: string = dayjs(startDate).format("YYYY-MM-DD");
  const formattedEndDate: string = dayjs(endDate).format("YYYY-MM-DD");
  return `https://launchlibrary.net/1.3/launch/${formattedStartDate}/${formattedEndDate}`;
}

function getCoordinatesFromLaunches(launches: ILaunch[]) {
  // console.log(launches);
  return launches.map((launch) => {
    return {
      id: launch.id,
      coordinates: [
        launch.location.pads[0].longitude,
        launch.location.pads[0].latitude,
      ],
    };
  });
}

export default MapContainer;
