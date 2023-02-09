import React from 'react';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';

function DetailBanner(props) {
    return (
        <div className='bg-[#72a382]'>
            <div className='flex p-8 items-center'>
                <div className='rounded-full overflow-hidden'>
                    <img src={props.background} alt={props.name} />
                </div>  
                <div className='ml-[40px]'>
                    <h2 className='text-4xl font-bold'>{props.name}</h2>
                    <div className='flex mt-[10px] items-center'>
                        <p className='mr-[20px]'>{props.follower} người quan tâm</p>
                        <div className='border px-2 py-1 rounded-[4px]'>
                            <PersonAddOutlinedIcon className='mr-1'/>
                            <a href="#">QUAN TÂM</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailBanner;