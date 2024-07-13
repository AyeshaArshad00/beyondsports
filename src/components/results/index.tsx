import React from 'react'
import { useQuery } from 'react-query';

async function fetchResultsData() {
    const response = await fetch('https://hosted.dcd.shared.geniussports.com/QBL/en/schedule');
    const data = await response.text();
    return   {__html: data};
  }

type Props = {}


const Results = (props: Props) => {
    const { isLoading, isError, data, error } = useQuery('results', fetchResultsData);
    console.log(data);
  if (isLoading) {
    return <div className='h-32 bg-white flex items-center justify-center'>Loading...</div>;
  }

  if (isError) {
    console.log(error);
  }
  return (
    <div className='h-32 bg-white flex items-center justify-center' >No data found</div>
  )
}

export default Results