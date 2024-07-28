import React from "react";
import { GAMES } from "../../utils/constants";

type Props = {
  selected?: string;
  onChange: (s: string) => void;
};

const MenuBar = ({ selected = GAMES.SCHEDULE, onChange }: Props) => {
  return (
    <nav className="bg-gray-200 border-gray-200  mt-2">
      <ul className="font-medium w-full  grid grid-cols-6  text-center cursor-pointer">
        <li
          className={`${
            selected === GAMES.SCHEDULE ? "bg-white" : ""
          } text-gray-500 font-bold p-3   border-r-[1px] border-white`}
          onClick={() => onChange(GAMES.SCHEDULE)}
        >
          SCHEDULE
        </li>
        <li
          className={`${
            selected === GAMES.STANDINGS ? "bg-white" : ""
          } text-gray-500 font-bold p-3  border-r-[1px] border-white`}
          onClick={() => onChange(GAMES.STANDINGS)}
        >
          STANDINGS
        </li>
        <li
          className={`${
            selected === GAMES.LEADERS ? "bg-white" : ""
          } text-gray-500 font-bold p-3  border-r-[1px] border-white`}
          onClick={() => onChange(GAMES.LEADERS)}
        >
          LEADERS
        </li>
        <li
          className={`${
            selected === GAMES.STATISTICS ? "bg-white" : ""
          } text-gray-500 font-bold p-3  border-r-[1px] border-white`}
          onClick={() => onChange(GAMES.STATISTICS)}
        >
          STATISTICS
        </li>
        <li
          className={`${
            selected === GAMES.TEAMS ? "bg-white" : ""
          } text-gray-500 font-bold p-3  border-r-[1px] border-white`}
          onClick={() => onChange(GAMES.TEAMS)}
        >
          TEAMS
        </li>
        <li
          className={`${
            selected === GAMES.PLAYERS ? "bg-white" : ""
          } text-gray-500 font-bold p-3 cursor-pointer`}
          onClick={() => onChange(GAMES.PLAYERS)}
        >
          PLAYERS
        </li>
      </ul>
    </nav>
  );
};

export default MenuBar;
