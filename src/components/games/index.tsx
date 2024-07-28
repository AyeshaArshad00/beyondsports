import React, { useEffect, useRef, useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import { fetchResultsData, LeadersData, PlayersData, ScheduleData, StandingsData, StatisticsData, TeamFixture } from "../../utils/helpers";
import MenuBar from "./MenuBar";
import GamesHeader from "./GamesHeader";
import Schedule from "./Schedule";
import Standings from "./Standings";
import Teams from "./Teams";
import Statistics from "./Statistics";
import Leaders from "./Leaders";
import Players from "./Players";
import { GAMES } from "../../utils/constants";

type Props = {};

const Games = (props: Props) => {
  const defaultMenu = useRef(GAMES.SCHEDULE);
  const subMenu = useRef<string | undefined>(undefined);
  const queryClient = useQueryClient()

  const [url, setUrl] = useState(
    `https://hosted.dcd.shared.geniussports.com/QBL/en/${defaultMenu.current}`
  );
  const { isLoading, data, refetch } = useQuery("data", () =>
    fetchResultsData(url, defaultMenu.current, subMenu.current)
  );
  useEffect(() => {
    if (url && url !== "" && url !== null) {
      refetch();
    }
  }, [url]);
  const onSubMenuChange = (s: string) => {

    queryClient.setQueryData("data", []);
    subMenu.current = s;
    setUrl(`https://hosted.dcd.shared.geniussports.com/QBL/en/statistics/${s}`);
  }

  const onSubMenuChanges = (s: string) => {
    queryClient.setQueryData("data", []);
    subMenu.current = s;
    if (s == "group 2") {
      setUrl(`https://hosted.dcd.shared.geniussports.com/QBL/en/competition/38076/standings?phaseName=Group%20Phase&poolNumber=2&`);
    }
    else if (s == "group 1") {

      setUrl(`https://hosted.dcd.shared.geniussports.com/QBL/en/competition/38076/standings?phaseName=Group%20Phase&poolNumber=1&`);
    }
  }

  const handleLinkClick = (s: string) => {
    defaultMenu.current = s;
    subMenu.current = undefined;
    queryClient.setQueryData("data", []);
    setUrl(`https://hosted.dcd.shared.geniussports.com/QBL/en/${s}`);
  };


  if (isLoading || !data) {
    return (<>
      <div className="flex items-center justify-center min-h-20 w-full bg-white text-gray-400 text-l">
        Loading...
      </div>
    </>)
  }

  if (!isLoading && !data) {
    return (<>
      <div className="flex items-center justify-center min-h-20 w-full bg-white text-gray-400 text-xl">
        No data available
      </div>
    </>)
  }

  return (
    <>
      <GamesHeader />
      <MenuBar onChange={(s) => handleLinkClick(s)} selected={defaultMenu.current} />
      {data && !isLoading && (
        <>
          {defaultMenu.current === GAMES.SCHEDULE && <Schedule data={data as ScheduleData[]} />}
          {defaultMenu.current === GAMES.STANDINGS && <Standings data={data as StandingsData} selected={subMenu.current} onMenuChange={(s: any) => onSubMenuChanges(s)} />}
          {defaultMenu.current === GAMES.TEAMS && <Teams data={data as TeamFixture[]} />}
          {defaultMenu.current === GAMES.LEADERS && <Leaders data={data as LeadersData[]} />}
          {defaultMenu.current === GAMES.STATISTICS && <Statistics data={data as StatisticsData} selected={subMenu.current} onMenuChange={(s) => onSubMenuChange(s)} />}
          {defaultMenu.current === GAMES.PLAYERS && <Players data={data as PlayersData[]} />}
        </>
      )}
    </>
  );
};


export default Games;