import React from "react";

type Props = {
  currentLeague: string;
  onSelectionChange: (l: string) => void;
};

const LeagueSelector = ({ currentLeague, onSelectionChange }: Props) => {
  return (
    <div className="w-[10%] flex items-center justify-center text-gray-500 font-bold  text-xs bg-transparent">
      <select
        name="games"
        id="games"
        className="bg-transparent w-24 outline-none"
        value={currentLeague}
        onChange={(e) => onSelectionChange(e.target.value)}
      >
        <option value="QBL">QBL</option>
        <option value="Padal">Padal</option>
        <option value="Tennis">Tennis</option>
        <option value="Table Tennis">Table Tennis</option>
        <option value="Boxing">Boxing</option>
      </select>
    </div>
  );
};

export default LeagueSelector;
