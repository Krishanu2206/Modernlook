import React, {useState, useEffect} from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData();
    // const [data, setData] = useState(0);
    // useEffect(() =>{
    //     const fetchData = async () => {
    //         const response = await fetch('https://api.github.com/users/Krishanu2206', {
    //             method: 'GET',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //         }});
    //         const data = await response.json();
    //         console.log(data.followers);
    //         setData(data)
    //     }
    //     fetchData();
    // },[data, setData]);
  return (
    <div className='text-center m-4 bg-gray-700 p-4 text-white text-3xl'>
      Github Follwers : {data.followers}
      <img src={data.avatar_url} alt={data.avatar} width={300}/>
    </div>
  )
}

export default Github

export const githubinfoloader = async () => {
    const GITHUB_URL = import.meta.env.VITE_API_GITHUB;
    const response = await fetch(`${GITHUB_URL}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }});
    const data = await response.json();
    return data;
}
