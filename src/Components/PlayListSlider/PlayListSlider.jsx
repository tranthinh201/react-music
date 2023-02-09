import React from "react"
import { Skeleton } from "@mui/material"

function PlayListSlider ({data, loading, desc}) {
    return(
        loading ? (
            <div className='my-10 flex justify-between'>
                <Skeleton variant="rectangular" animation="wave" width={260} height={260} sx={{ bgcolor: 'grey.900' }} className="rounded-[4px]"/>
                <Skeleton variant="rectangular" animation="wave" width={260} height={260} sx={{ bgcolor: 'grey.900' }} className="rounded-[4px]"/>
                <Skeleton variant="rectangular" animation="wave" width={260} height={260} sx={{ bgcolor: 'grey.900' }} className="rounded-[4px]"/>
                <Skeleton variant="rectangular" animation="wave" width={260} height={260} sx={{ bgcolor: 'grey.900' }} className="rounded-[4px]"/>
                <Skeleton variant="rectangular" animation="wave" width={260} height={260} sx={{ bgcolor: 'grey.900' }} className="rounded-[4px]"/>
            </div>
        ) : (
            <div className='my-4'>
                <h2 className='text-2xl font-bold mb-4'>{data.title}</h2>
                <div className='flex justify-around'>
                {
                    data.items?.slice(0, 5).map((item) => (
                        <div className='max-w-[20%]' key={item.id}>
                        <div className='pr-10'>
                            <div className='overflow-hidden rounded-[8px]'>
                            <img src={item.thumbnailM} alt="image" className='hover:scale-[1.1] ease-in-out duration-500' />
                            </div>
                        </div>
                        <div className='py-4 pr-4'>
                            <p className='text-white font-bold'>{item.title}</p>
                            {
                                desc ? (
                                    <p className='text-[hsla(0,0%,100%,0.5)]'>{ item.sortDescription.length > 70 ? (`${item?.sortDescription.slice(0, 70)}...`) : item?.sortDescription}</p>
                                ) : (
                                    " "
                                )
                            }
                        </div>
                        </div>
                    ))
                }
                </div>
            </div>
        )
    )
} 

export default PlayListSlider