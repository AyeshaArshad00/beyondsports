import { PlayersData } from '../../utils/helpers'

type Props = {
    data: PlayersData[]
}
const Players = ({ data }: Props) => {

    return (
        <div className="bg-white py-6 ">
        <div className="flex text-4xl font-bold text-gray-600 px-4 py-10">
            Players
        </div>
        <div className="flex flex-wrap justify-center w-full bg-white  gap-15 px-6 text-center">
            {data.map((d) => (
                <div className="flex  flex-col w-60 gap-3 items-center p-3 mr-1 mb-2 border-[1px] border-gray-300">
                    <img className="w-12 h-12" src={d.logo} alt="logo" />
                    <div className="text-s text-blue-800 font-bold">
                        {d.name}
                    </div>
                </div>
            ))}
        </div>
    </div>
    )
}

export default Players