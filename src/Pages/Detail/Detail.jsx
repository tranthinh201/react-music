import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import musicApi from '../../api/musicApi.js'
import DetailBanner from './DetailBanner/DetailBanner.jsx';
import { Link } from 'react-router-dom';
import PlayMusicContext from '../../Context/PlayMusicContext.jsx';

function Detail() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [section, setSection] = useState([]);
    const [topAlbum, setTopAlbum] = useState([]);
    const PlayMusic = useContext(PlayMusicContext);
    const {setId} = PlayMusic;
    const handelPlayMusic = (id) => {
      setId(id)
    }

    useEffect(() => {
        const getArtise = async () => {
            try {
                const res = await musicApi.getArtist(id)
                setData(res.data)
                setSection(res.data.sections[0].items)
                setTopAlbum(res.data.topAlbum)
                setLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        getArtise()
    }, [id])

    function formatDuration(value) {
        const minute = Math.floor(value / 60);
        const secondLeft = value - minute * 60;
        return `${minute <= 9 ? `0${minute}` : minute}:${
          secondLeft <= 9 ? `0${secondLeft}` : secondLeft
        }`;
      }
    return (
        <div className='float-right w-[84%] mt-[80px] mb-[100px] text-white'>
            {
                loading ? (
                    "Loading..."
                ) : (
                    <>
                        <DetailBanner name={data.name} coverImage={data.cover} background={data.thumbnail} follower={data.totalFollow}/>
                        <div className='flex p-10 '>
                            <Link to={topAlbum?.link} className='w-[30%]'>
                                <h3 className='mb-3 font-bold text-3xl'>Mới phát hành</h3>
                                <div className='flex bg-[#636e72] ease-linear duration-200 p-8 rounded-[16px]'>
                                    <div className='mr-4'>
                                        <img src={topAlbum.thumbnail} alt="image" />
                                    </div>
                                    <div>
                                        <p>{topAlbum.textType}</p>
                                        <p>{topAlbum.title}</p>
                                        <div className='text-[12px] py-0.5 text-gray-400 font-bold cursor-pointer'>
                                            {
                                                topAlbum?.artists?.map((name, index) => (
                                                    <Link to={name.link} className="hover:text-[red] hover:underline">{name.name} </Link> 
                                                ))
                                            }
                                        </div>
                                        <div>
                                            <p>{topAlbum.releaseDate}</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <div className='px-[40px] w-[70%]'>
                                <h3 className='mb-3 font-bold text-3xl'>Bài hát nổi bật</h3>
                                <div className="flex flex-wrap justify-between">
                                {
                                    section.slice(0, 6).map((item) => (
                                    <div 
                                        className='flex hover:bg-[hsla(0,0%,100%,0.1)] rounded-[4px] p-2 min-w-[50%] ' 
                                        key={item?.id}
                                        onClick={() => handelPlayMusic(item.encodeId)}
                                    >
                                        <div className='overflow-hidden mr-[10px] w-[80px]'>
                                            <img src={item?.thumbnailM} alt="image" className='rounded-[4px] w-[60px]' />
                                        </div>
                                        <div className='mr-10 min-w-[60%]'>
                                        <div className='text-[14px] font-bold'>
                                            <span>{ item.title.length > 20 ? (`${item?.title.slice(0, 20)}...`) : item?.title}</span>
                                        </div>
                                        <div className='text-[12px] py-0.5 text-gray-700 font-[500] cursor-pointer'>
                                            {
                                                item.artists.map((name, index) => (
                                                    <Link to={name.link} className="hover:text-[red] hover:underline">{name.name} </Link> 
                                                ))
                                            }
                                        </div>
                                        </div>
                                        <div className='justify-center items-center flex'>
                                            <p className='text-[14px] font-bold text-gray-600 '>{formatDuration(item.duration)}</p>
                                        </div>
                                    </div>
                                    ))
                                }
                                </div>
                            </div>
                        </div>
                        <div className='p-10'>
                            <h2 className='font-bold text-3xl'>Về {data.name}</h2>
                            <div className='flex w-[80%] py-10'>
                                <div className='h-[360px] overflow-hidden rounded-[20px] w-[30%]'>
                                    <img src={data.thumbnailM} alt="image" className='bg-center rounded-[20px] w-[100%]'/>
                                </div>
                                <div className='w-[70%] p-10'>
                                    <p className='text-[hsla(0,0%,100%,0.5)] font-400 text-[16px]'>{data.biography.replaceAll('<br>', "")}</p>
                                    <div className='mt-4'>
                                        <h2 className='text-4xl font-bold'>{data.totalFollow}</h2>
                                        <p className='font-400 text-[hsla(0,0%,100%,0.5)]'>Follower</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
        </div>
    );
}
export default Detail;