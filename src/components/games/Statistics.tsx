import React from 'react'
import { GAMES, STATISTICS_SUBMENU } from '../../utils/constants'
import { StatisticsData } from '../../utils/helpers'
import Table from '../../shared/Table'

type Props = {
data: StatisticsData
selected: string | undefined
onMenuChange: (m: string) => void
}

const Statistics = ({ data, selected , onMenuChange}: Props) => {
const averageCols = data && data.average && data?.average.length > 0 ? Object.keys(data.average[0]) : []
const totalsCols = data && data.totals && data?.totals.length > 0 ? Object.keys(data.totals[0]) : []
const subMenus = data && data.subMenuList && data?.subMenuList.length > 0 ? data.subMenuList : []
const selectedMenu = selected ? selected : STATISTICS_SUBMENU.TEAM

return (
<div className="bg-white py-6">
    <div className="flex text-4xl font-bold text-gray-600 px-4 py-10">
        STATISTICS
    </div>

    <div className="flex flex-col justify-start w-full  gap-3 px-6">
        <div className='w-full bg-gray-400 flex items-center gap-4 p-3'>
            {subMenus.map((m) => <button onClick={()=>
                onMenuChange(m.toLocaleLowerCase()) }
                className={`${selectedMenu.toLocaleLowerCase() === m.toLocaleLowerCase() ?
                "bg-white" : "bg-gray-300"} w-32 h-10 flex items-center justify-center text-blue-700
                font-bold`}>{m}</button>)}
        </div>
    </div>
    <div className="flex flex-col justify-start w-full bg-white  gap-3 px-6">
        <div className="text-2xl font-bold text-gray-600">
            Averages
        </div>
        <Table cols={averageCols} data={data.average} />

    </div>

    <div className="flex flex-col justify-start w-full bg-white  gap-3 px-6 mt-10">
        <div className="text-2xl font-bold text-gray-600">
            Totals
        </div>
        <Table cols={totalsCols} data={data.totals} />

    </div>
</div>
)
}

export default Statistics