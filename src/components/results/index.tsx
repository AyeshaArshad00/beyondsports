import { useQuery } from "react-query";
import { fetchResultsData, ScheduleData } from "../../utils/helpers";
import { useEffect, useState } from "react";
import ResultsSlider from "./ResultsSlider";
import LeagueSelector from "./GameSelector";
import { GAMES } from "../../utils/constants";

type Props = {};

const Results = (props: Props) => {
  const [currentLeague, setCurrentLeague] = useState("QBL");
  const [url, setUrl] = useState(
    `https://hosted.dcd.shared.geniussports.com/${currentLeague}/en/schedule`
  );
  const {
    isLoading,
    isError,
    data = [],
    refetch,
    error,
  } = useQuery("results", () => fetchResultsData(url, GAMES.SCHEDULE));

  useEffect(() => {
    if (url && url !== "" && url !== null) {
      refetch();
    }
  }, [url, refetch]);

  const handleSelectChange = (v: string) => {
    setCurrentLeague(v);
    setUrl(`https://hosted.dcd.shared.geniussports.com/${v}/en/schedule`);
  };

  if (isLoading) {
    return (
      <div className="h-32 bg-white flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (isError) {
    console.log(error);
  }

  return (
    <div className=" w-full h-24 mb-2 flex justify-between">
      <LeagueSelector
        currentLeague={currentLeague}
        onSelectionChange={handleSelectChange}
      />

      {!isLoading &&  !data && (
        <div className="h-full  w-[85%]  flex items-center justify-center">
          No data found!
        </div>
      )}
      {!isLoading && data && <ResultsSlider data={data as ScheduleData[]} />}
    </div>
  );
};

export default Results;
