import React from 'react';
import {BsThreeDots} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import PlayMusicContext from '../../Context/PlayMusicContext';
import { Skeleton } from '@mui/material';
import {BsPlayFill} from "react-icons/bs/";
import './ChartHome.scss';

function ChartHome({ data, loading}) {

    const PlayMusic = useContext(PlayMusicContext);
    const {setId} = PlayMusic;
    const handelPlayMusic = (id) => {
      setId(id)
    }

    return (
        loading ? (
            <div className='my-10 flex justify-between'>
                <Skeleton variant="rectangular" animation="wave" width={480} height={90} sx={{ bgcolor: 'grey.900' }} className="rounded-[4px]"/>
                <Skeleton variant="rectangular" animation="wave" width={480} height={90} sx={{ bgcolor: 'grey.900' }} className="rounded-[4px]"/>
                <Skeleton variant="rectangular" animation="wave" width={480} height={90} sx={{ bgcolor: 'grey.900' }} className="rounded-[4px]"/>
            </div>
        ) : (
            <div className='mt-4'>
                <h2 className='text-2xl font-bold'>Mới phát hành</h2>
                <div className="flex flex-wrap">
                {
                    data.slice(0, 12).map((item, index) => (
                    <div 
                        className='flex hover:bg-[hsla(0,0%,100%,0.1)] rounded-[4px] p-2 min-w-[33.33%] hv-show' 
                        key={item?.id}
                    >
                        <div 
                            className='rounded-[4px] overflow-hidden mr-[10px] w-[80px] hover-bg relative'
                            onClick={() => handelPlayMusic(item.encodeId)}
                        >
                            <img src={item?.thumbnailM} alt="image" />
                            <div className="play-icon absolute d-none">
                                <BsPlayFill size={30}/>
                            </div>
                        </div>
                        <div className='mr-10 min-w-[60%]'>
                            <div className='text-[14px] font-bold'>
                                <span>{ item?.title }</span>
                            </div>
                            <div className='text-[12px] py-0.5 text-gray-700 font-[500] cursor-pointer'>
                                {
                                item.artists.map((name, index) => (
                                    <Link to={name.link} className="hover:text-[red] hover:underline">{name.name} </Link> 
                                ))
                                }
                            </div>
                            <div className='text-[12px] text-gray-700 font-[500]'>
                                <span>Hôm nay</span>
                            </div>
                        </div>
                        <div className='justify-center items-center flex'>
                            <div className='hover:bg-[hsla(0,0%,100%,0.2)] p-2.5 rounded-full ease-in-out duration-300 text-white'>
                                <BsThreeDots/>
                            </div>
                        </div>
                    </div>
                    ))
                }
                </div>
            </div>
        )
    );
}

export default ChartHome;