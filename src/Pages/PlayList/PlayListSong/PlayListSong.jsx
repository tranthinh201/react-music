import React from "react";
import PlayMusicContext from "../../../Context/PlayMusicContext";
import { useContext } from "react";
import {BsPlayFill} from "react-icons/bs/"
import { Link } from "react-router-dom";
import './playlistsong.scss';

function PlayListSong({ data, playlist, loading }) {
  function formatDuration(value) {
    const minute = Math.floor(value / 60);
    const secondLeft = value - minute * 60;
    return `${minute <= 9 ? `0${minute}` : minute}:${
      secondLeft <= 9 ? `0${secondLeft}` : secondLeft
    }`;
  }

  const PlayMusic = useContext(PlayMusicContext);
  const {setId} = PlayMusic;
  const handelPlayMusic = (id) => {
    setId(id)
  }

  return (
    <div className="playlist__song">
      <div className="playlist__sort-description">
        {playlist?.sortDescription && (
          <div className="text-[18px]">
            <span>Lời tựa </span>
            <span className="text-white">{playlist.description}</span>
          </div>
        )}
      </div>
      <div className="flex text-[hsla(0,0%,100%,0.5)] p-4 pr-3 justify-between border-b-[1px] border-b-[hsla(0,0%,100%,0.05)]">
        <div><p>Bài Hát</p></div>
        <div><p>Album</p></div>
        <div><p>Thời Gian</p></div>
      </div>
      {data && data.length > 0 ? (
          data.map((item) => (
            <div key={item.id} className="text-white flex justify-between p-4 border-b-[1px] border-b-[hsla(0,0%,100%,0.05)] hover:bg-[hsla(0,0%,100%,0.1)] hv-show">
              <div className="flex items-center w-[30%]">
                <div 
                  className="w-14 rounded-[4px] overflow-hidden mr-3 hover-bg relative"
                  onClick={() => handelPlayMusic(item.encodeId)}
                >
                  <img src={ item.thumbnail } alt="image" />
                  <div className="play-icon absolute d-none">
                    <BsPlayFill size={30}/>
                  </div>
                </div>
                <div>
                  <p>{ item.title}</p>
                  <div className='text-[hsla(0,0%,100%,0.5)]  text-[14px] cursor-pointer'>
                      {
                          item.artists?.map((name, index) => (
                              <Link to={name.link} className="hover:text-[red] hover:underline">{name.name} </Link> 
                          ))
                      }
                  </div>
                </div>
              </div>
              <div className="w-[30%]">
                <span>{item.title}(Single)</span>
              </div>
              <div className="w-30%">
                {formatDuration(item.duration)}
              </div>
            </div>
          ))
      ) : (
        "NULL"
      )}
    </div>
  );
}

export default PlayListSong;
