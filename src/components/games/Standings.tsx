import React from "react";
import {  StandingsData } from "../../utils/helpers";
import { log } from "console";
import { STANDINGS_SUBMENU, } from "../../utils/constants";
import Table from "../../shared/Table";

type Props = {
data: StandingsData;
selected: string | undefined
onMenuChange: (m: string) => void
};
const Standings = ({ data, selected , onMenuChange}: Props) => {
  const groupcol:any = data && data.Group && data?.Group.length > 0 ? Object.keys(data.Group[0]) : []
const subMenus = data && data.subMenuList && data?.subMenuList.length > 0 ? data.subMenuList : []
const selectedMenu = selected ? selected : STANDINGS_SUBMENU.GROUP1
  
return(
<div className="bg-white py-6">
  <div className="flex text-4xl font-bold text-gray-600 px-6 py-10">
    Standings
  </div>

  <div className="flex flex-col justify-start w-full  px-6 gap-3">
        <div className='w-full bg-gray-400 flex items-center gap-4 p-3'>
            {subMenus.map((m) => <button onClick={()=>
                onMenuChange(m.toLocaleLowerCase()) }
                className={`${selectedMenu.toLocaleLowerCase() === m.toLocaleLowerCase() ?
                "bg-white" : "bg-gray-300"} w-32 h-10 flex items-center justify-center text-blue-700
                font-bold`}>{m}</button>)}
        </div>
    </div>
  <div className="flex flex-wrap justify-start w-full  text-black  gap-10 px-6">
  <div className="flex flex-col justify-start w-full bg-white  gap-3">
        <Table cols={groupcol} data={data.Group}/>
    </div>
  </div>
</div>


);
};

export default Standings;