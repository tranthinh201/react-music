import React, { useEffect, useState } from 'react';
import musicApi from '../../api/musicApi';
import PlayMusicContext from '../../Context/PlayMusicContext';
import {BiPlay} from "react-icons/bi"
import {AiOutlinePause} from "react-icons/ai"
import { useContext } from 'react';
import { useRef } from 'react';
import './Song.scss'

function Song() {
    const [song, setSong] = useState()
    const [loading, setLoading] = useState(true)
    const PlayMusic = useContext(PlayMusicContext);
    const [play, setPlay] = useState(true)
    const [data, setData] = useState([])
    const {id} = PlayMusic;
    const baseLink = "https://vnno-vn-5-tf-mp3-s1-zmp3.zmdcdn.me";
    const audio = useRef('')

    useEffect(() => {
        const getSong = async () => {
                const respone = await musicApi.getSong(id)
                if(respone.err === -1110) {
                    alert(respone.msg)
                } else {
                    setSong( baseLink + respone.data[Object.keys(respone.data)[0]].split("https://mp3-s1-zmp3.zmdcdn.me")[1])
                    setLoading(false)
                }
        }
        getSong();
    }, [id])

    useEffect(() => {
       try {
            const getSong = async () => {
                const respone = await musicApi.getInfoSong(id)
                console.log(respone)
            }
            getSong();  
       } catch(err) {
        console.log(err)
       }
    }, [id])
    
    function formatDuration(value) {
        const minute = Math.floor(value / 60);
        const secondLeft = value - minute * 60;
        return `${minute <= 9 ? `0${minute}` : minute}:${
          secondLeft <= 9 ? `0${secondLeft}` : secondLeft
        }`;
    }



    
    const handelControl = () => {
        if(audio.current.paused) {
            audio.current.play()
            setPlay(false)
        } else {
            audio.current.pause();
            setPlay(true)
        }
    }



    const progressBar = useRef('');
    function rangebar(e) {
        const seekTime = (audio.current.duration / 100) * e.target.value;
        audio.current.currentTime = seekTime;
    }

    useEffect(()=> {
        if (audio.current.duration) {
            audio.current.ontimeupdate = () => {
                const progressPercent = Math.floor(
                    (audio.current.currentTime / audio.current.duration) * 100
                );
                progressBar.current.value = progressPercent;
            }
        }      
    }, [])

    return (
        <div className='fixed bottom-0 right-0 left-0 flex justify-center p-6 bg-[#130c1c] song'>
            <figure>
                {
                    loading ? (
                        <label>Loading...</label>
                    ) : 
                    (
                        <div className='flex justify-center flex-col items-center'>
                            <audio ref={audio} controls src={song} className='d-none'></audio>
                            <button onClick={handelControl} className='text-white border rounded-full p-2 text-2xl mb-2'>{
                                play ? <BiPlay/> : <AiOutlinePause/>
                            }</button>
                            <div className="progressCenter">
                                <input type="range" value="0" className='progress' step="1" min="0" max="100" ref={progressBar} onChange={rangebar}/>   
                            </div>
                            
                        </div>
                    )
                }
            </figure>
        </div>
    );
}

export default Song;