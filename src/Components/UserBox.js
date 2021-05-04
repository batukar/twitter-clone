import React from 'react';

const UserBox = () => {
    return (
        <div className='flex justify-between items-center mb-6 hover:bg-primary-light
                    cursor-pointer rounded-full py-2 px-4 transform transition-colors duration-200'>
            <img src="https://pbs.twimg.com/profile_images/1148597447758876676/hcMOPceG_400x400.jpg"
                 className='w-12 h-12 rounded-full'
                 alt="Profile-pic"/>
            <div className='flex flex-col'>
                <span className='font-bold text-md text-black'>Batuhan Karadağ</span>
                <span className='text-sm text-grey-dark'>@batukar</span>
            </div>
            <div className='flex space-x-1'>
                <div className='w-1 h-1 bg-gray-900 rounded-full' />
                <div className='w-1 h-1 bg-gray-900 rounded-full' />
                <div className='w-1 h-1 bg-gray-900 rounded-full' />
            </div>
        </div>
    );
};

export default UserBox;
