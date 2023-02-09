import React, { useEffect, useState } from 'react';
import musicApi from '../../api/musicApi.js'
import { useParams } from 'react-router-dom';
import './Playlist.scss'
import PlaylistBanner from './PlaylistBanner/PlaylistBanner.jsx';
import PlayListSlider from './PlayListSlider/PlayListSLider.jsx';
import PlayListSong from './PlayListSong/PlayListSong.jsx'

function Playlist() {
    const { id } = useParams();
    const [playlist, setPlaylist] = useState({});
    const [playlistSong, setPlaylistSong] = useState([]);
    const [artists, setArtists] = useState([]);
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPlaylist = async () => {
      try {
        const res = await musicApi.getPlaylist(id.split(".")[0]);

        setPlaylist(res?.data);
        setPlaylistSong(res?.data?.song?.items);
        setArtists(res?.data?.artists);

        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getPlaylist();
  }, [id]);

    return (
        <div className="playlist">
      <div className="playlist-container">
        <PlaylistBanner
          playlist={playlist && playlist}
          loading={loading}
        />
        <PlayListSong
          data={playlistSong}
          playlist={playlist}
          loading={loading}
        />
      </div>

      <div className="playlist__artist-slide">
        <h2 className="playlist__artist-title">Nghệ sĩ tham gia</h2>
        <PlayListSlider data={artists} />
      </div>
    </div>
    )
}

export default Playlist;