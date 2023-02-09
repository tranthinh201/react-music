import React, { useEffect, useState } from 'react';
import './Home.scss'
import musicApi from '../../api/musicApi.js'
import Slider from '../../Components/Slider/Slider';
import Label from '../../Components/Label/Label';
import { useContext } from 'react';
import PlayMusicContext from '../../Context/PlayMusicContext';
import ChartHome from '../ChartHome/ChartHome';
import PlayListSlider from '../../Components/PlayListSlider/PlayListSlider';


function Home() {
    const [slider, setSlider] = useState([]);
    const [loading, setLoading] = useState(true)
    const [home, setHome] = useState([]);
    const [newRelease, setNewRelease] = useState([])
    const [loadingTop100, setLoadingTop100] = useState(true)
    const [playList, setPlayList] = useState([]);
    const [playList2, setPlayList2] = useState([]);

    useEffect(() => {
      const getSlider = async () => {
        try {
          const res = await musicApi.getHome();
          setSlider(res.data.items[0].items)
          setNewRelease(res.data.items[3].items.all)
          setPlayList(res.data.items[4])
          setPlayList2(res.data.items[5])
          setLoading(false)
        } catch (error) {
          console.log(error)
        }
      }
      getSlider()
    }, [])

    useEffect(() => {
      const getSlider = async () => {
        try {
          const res = await musicApi.getTop100();
          setHome(res.data[0].items)
          setLoadingTop100(false)
        } catch (error) {
          console.log(error)
        }
      }
      getSlider()
    }, [])

  

  

    return (
        <div className='container mb-[200px]'>
            <Slider data={slider} loading={loading}/>
            <ChartHome data={newRelease} loading={loading}/>
            <PlayListSlider data={playList} loading={loading} desc={true}/>
            <PlayListSlider data={playList2} loading={loading} desc={false}/>
            {/* <Label data={home} loading={loadingTop100}/> */}
        </div>
    );
}

export default Home;