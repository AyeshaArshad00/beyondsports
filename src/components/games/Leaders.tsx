import React from 'react'
import { LeadersData } from '../../utils/helpers'

type Props = {
data: LeadersData[];

}
const Leaders = ({ data }: Props) => {
return (
<div className="bg-white ">
    <div className="flex text-4xl font-bold text-gray-600 px-4 py-10">
        Leaders
    </div>
    <div className="flex flex-wrap justify-start w-full bg-white  gap-10 px-6">
        <div className="flex flex-col items-center justify-center w-full bg-white px-2">
        {data.map((d) => (<div className="flex flex-col  w-full border-[1px] border-gray-300  my-1">
              
                <>
                    <>
                        <div key={d.heading_name}
                            className=" flex border-b-[1px] w-full border-gray-400 er justify-start text-black "
                            style={{ background: '#eee', fontFamily: ' "BebasNeue", Helvetica, Arial, sans-serif', fontSize: '1.3em', padding: '10px', height: '50px !important' }}>
                            <h2>{d.heading_name}</h2>
                        </div>
                        <div className="flex flex-row border-b-[1px]"  >
                            <div className="flex items-center justify-between"
                                style={{ position: 'relative', borderRight: '1px solid  gray' }}>
                                <img src={d.ld_img}  alt="logo" />
                            </div>
                            <div className="flex justify-start gap-3 p-2 w-full">
                                <div className="" style={{ background: ' transparent' }}>
                                    <div className="text-blue-800 font-bold text-xl">
                                        {d.ld_name}
                                    </div>
                                    <div className="text-gray-400">
                                        {d.ld_team}
                                    </div>
                                </div>
                            </div>
                            <div className="flex  gap-3 justify-end  border-l-1px" style={{
                       borderLeft: '1px solid #d1d5d8',
                       height: ' 80px',
                       width: ' 120px',
                       padding: '15px 10px',
                       fontFamily: '"BebasNeue", Helvetica, Arial, sans-serif',
                       color: '#000',
                       fontSize: '1.8em',
                   }}>
                                <div className="text-xl font-bold">
                                    <div className="font-bold">
                                        0.55
                                        <div className="ld-statname text-gray-600 ">{d.ld_state}</div>


                                    </div>

                                </div>
                            </div>
                        </div>
                    </>
                    <table className="tableClass w-full m-1" >
                        <tbody>
                            <tr>
                                <th>Player</th>
                                <th>Team</th>
                                <th title="Average assists">APG</th>
                            </tr>
                            {d?.table_data?.slice().map((item?:any) => (
                            <tr key={item}>
                                <td style={{maxWidth:"100px"}}> {item.players}</td>
                                <td className="team" style={{maxWidth:"100px"}}>
                                    {item.bb}</td>
                                <td style={{maxWidth:"50px"}}> {item.cc}</td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            </div>
                ))}
        </div>

    </div>

</div>
)
}

export default Leaders