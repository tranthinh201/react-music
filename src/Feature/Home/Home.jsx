import React, { useEffect, useState } from 'react';
import './Home.scss'
import Label from '../Playlist/Label/Label';
import musicApi from '../../api/musicApi.js'
import NewSong from '../NewSong/NewSong';
import Slider from '../../Components/Slider/Slider';

function Home() {
    const [top100, setTop100] = useState([])
    const [charHome, setCharHome] = useState([])
    const [slider, setSlider] = useState([]);
    const [loading, setLoading] = useState(true)
    const [loadingSlider, setLoadingSlider] = useState(true)
    const [home, setHome] = useState([]);


    useEffect(() => {
      const getSlider = async () => {
        try {
          setLoadingSlider(false)
          const res = await musicApi.getHome();
          setSlider(res.data.items[0].items)
        } catch (error) {
          console.log(error)
        }
      }
      getSlider()
    }, [])

    useEffect(() => {
      const getTop100 = async () => {
        try {
          const res = await musicApi.getTop100();
          setTop100(res.data[0].items);
          setLoading(false)
        } catch (error) {
          console.log(error)
        }
      }
      getTop100()
    }, [])

    console.log(top100)

    useEffect(() => {
      const getHome = async () => {
        try {
          const res = await musicApi.getHome(); 
          setHome(res.data);
        } catch(err) {
          console.log(err)
        }

        getHome()
      }
    })

    console.log(home)


  


    useEffect(() => {
      const getCharHome = async () => {
        try {
          const respone = await musicApi.getCharthome();
          setCharHome(respone.data.newRelease)
        } catch(error) {
          console.log(error)
        }
      }
      getCharHome()
    }, [])
    return (
        <div className='container'>
            <Slider data={slider} loading={loadingSlider}/>
            <div className="col-8">
                <h2 className="col-8__title">Spotify Playlists</h2>
                <div className="col-8__item">
                    <Label data={top100} loading={loading}/>
                </div>
            </div>
            <div className="col-8">
              <h2 className='col-8__title'>Bài hát mới ra mắt</h2>
              <div className="col-8__item">
                <NewSong data={charHome}/> 
              </div>
            </div>
        </div>
    );
}

export default Home;