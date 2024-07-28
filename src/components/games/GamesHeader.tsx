import React from "react";

type Props = {};

const GamesHeader = (props: Props) => {
  return (
    <div className="min-h-20 bg-white flex gap-3 items-center p-5 my-5">
      <img
        className="h-20 w-20"
        src="https://se-img.dcd-production.i.geniussports.com/6ac2addd14b526602371ca1fc78e2dc2S1.png"
        alt="logo"
      />
      <div className="text-3xl text-gray-600 font-bold ‚">
        QATAR BASKETBALL LEAGUE
      </div>
    </div>
  );
};

export default GamesHeader;
