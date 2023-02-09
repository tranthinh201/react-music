import React, { useEffect, useState } from 'react';
import musicApi from '../../api/musicApi';
import PlayMusicContext from '../../Context/PlayMusicContext';
import { useContext } from 'react';
import { useRef } from 'react';
import './Song.css'

function Song() {
    const [song, setSong] = useState()
    const [loading, setLoading] = useState(true)
    const PlayMusic = useContext(PlayMusicContext);
    const {id} = PlayMusic;
    const baseLink = "https://vnno-vn-5-tf-mp3-s1-zmp3.zmdcdn.me";
    const audio = useRef('')

    useEffect(() => {
        const getSong = async () => {
            try {
                const respone = await musicApi.getSong(id)
                setSong( baseLink + respone.data[Object.keys(respone.data)[0]].split("https://mp3-s1-zmp3.zmdcdn.me")[1])
                setLoading(false)
                console.log(respone)
            }
            catch (error) {
                console.log("Đây là bài hát VIP")
            }
        }
        getSong();
    }, [id])

    function formatDuration(value) {
        const minute = Math.floor(value / 60);
        const secondLeft = value - minute * 60;
        return `${minute <= 9 ? `0${minute}` : minute}:${
          secondLeft <= 9 ? `0${secondLeft}` : secondLeft
        }`;
      }
    
    const handelPlay = () => {
        audio.current.play();
    }

    const handelPause = () => {
        audio.current.pause();
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
        <div className='fixed bottom-0 right-0 left-0 flex justify-center p-6 bg-red-100 song'>
            <figure>
                {
                    loading ? (
                        <label>Loading...</label>
                    ) : 
                    (
                        <div>
                            <audio ref={audio} controls autoPlay src={song}></audio>
                            <button onClick={handelPlay}>Chay nhac</button>
                            <div className="progressCenter">
                                <input type="range" value="0" step="1" min="0" max="100" ref={progressBar} onChange={rangebar}/>   
                            </div>
                        </div>
                    )
                }
            </figure>
        </div>
    );
}

export default Song;