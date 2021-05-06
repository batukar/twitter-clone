import React from 'react';
import {SearchIcon} from '../icons/icons'
import { Timeline } from 'react-twitter-widgets'

const Widget = () => {
    return (
        <aside className='w-80'>
            <div className="flex items-center space-x-2 p-3 bg-gray-200 rounded-full
                text-grey-dark focus-within:bg-white focus-within:ring-1 focus-within:ring-primary-base
                focus-within:text-primary-base">
                <SearchIcon className="w-6 h-6"/>
                <input
                    className="placeholder-grey-dark bg-transparent outline-none
                        w-full text-sm"
                    type="text"
                    placeholder="Search"/>
            </div>
            <div className="mt-5">
                <Timeline
                    dataSource={{
                        sourceType: 'profile',
                        screenName: 'batukarr'
                    }}
                    options={{
                        height: '600'
                    }}
                />
            </div>
        </aside>
    );
}

export default Widget;