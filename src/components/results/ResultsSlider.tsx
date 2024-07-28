import React from "react";
import { ScheduleData } from "../../utils/helpers";
import Slider from "react-slick";

type Props = {
  data: ScheduleData[];
};

const ResultsSlider = ({ data }: Props) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div className="slider-container  w-[85%]">
      <Slider {...settings} className="h-full  w-full  float-end  mr-6">
        {data &&
          data.map((d) => (
            <div
              key={d.matchTime}
              className="h-24 mx-3 border-l-2 px-2 text-gray-500 text-xs py-1"
            >
              <div className="flex flex-col items-center justify-between h-full gap-3">
                <div className="text-[10px]">{d.matchTime}</div>
                <div className="w-full font-bold flex flex-col gap-1">
                  <div className="flex w-full justify-between ">
                    <div className="flex gap-1 ">
                      <img
                        className="h-5 w-5"
                        src={d.homeTeam.logo}
                        alt="logo"
                      />
                      <span>{d.homeTeam?.code}</span>
                    </div>
                    <div>{d.homeTeam?.score}</div>
                  </div>
                  <div className="flex w-full justify-between">
                    <div className="flex gap-1 ">
                      <img
                        className="h-5 w-5"
                        src={d.awayTeam.logo}
                        alt="logo"
                      />
                      <span>{d.awayTeam?.code}</span>
                    </div>
                    <div>{d.awayTeam?.score}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default ResultsSlider;
