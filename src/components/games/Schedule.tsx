import React from "react";
import { ScheduleData, TeamFixture } from "../../utils/helpers";

type Props = {
  data: ScheduleData[];
};

const Schedule = ({ data }: Props) => {
  return (
    <div className="bg-white">
      <div className="flex text-4xl font-bold text-gray-600 px-4 py-10">
        SCHEDULE
      </div>
      <div className="flex flex-col items-center justify-center min-h-20 h-auto w-full bg-white px-2">
        {data.map((d) => (
          <div
            key={d.matchTime}
            className="flex flex-col  h-auto  w-full border-[1px] border-gray-300  my-1"
          >
            <div className=" flex border-b-[1px] w-full border-gray-300  items-center justify-center gap-5 text-[10px] text-gray-400">
              <span>Date / Time: {d.matchTime}</span>
              <span>Venue: {d.matchVenue}</span>
            </div>
            <div className="grid grid-cols-3">
              <div className="flex gap-3 items-center p-2">
                <img className="w-12 h-12" src={d.homeTeam.logo} alt="logo" />
                <div className="text-xl text-gray-600 font-bold">
                  {d.homeTeam.name}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-3xl text-gray-600 font-bold">
                  {d.homeTeam.score}
                </div>
                <div className="text-xl text-gray-600 font-bold">
                  {d.matchStatus}
                </div>
                <div className="text-3xl text-gray-600 font-bold">
                  {d.awayTeam.score}
                </div>
              </div>
              <div className="flex gap-3 items-center justify-end p-2 ">
                <div className="text-xl text-gray-600 font-bold">
                  {d.awayTeam.name}
                </div>
                <img className="w-12 h-12" src={d.awayTeam.logo} alt="logo" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
