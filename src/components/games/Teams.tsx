import React from 'react'
import { TeamFixture } from '../../utils/helpers'

type Props = {
    data: TeamFixture[]
}
const Teams = ({ data }: Props) => {
    return (
        <div className="bg-white py-6">
            <div className="flex text-4xl font-bold text-gray-600 px-4 py-10">
                TEAMS
            </div>
            <div className="flex flex-wrap justify-start w-full bg-white  gap-10 px-6">
                {data.map((d) => (
                    <div className="flex  flex-col w-40 gap-3 items-center p-6 border-[1px] border-gray-300">
                        <img className="w-12 h-12" src={d.logo} alt="logo" />
                        <div className="text-xl text-gray-600 font-bold">
                            {d.name}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Teams