import React from 'react'
import ProfileCard from '@/components/ProfileCard/ProfileCard'
import Profile from './../components/Profile/Profile';
import HouseCard from '@/components/HouseCard/HouseCard'

const profile = () => {
    return (
    <div>
    <ProfileCard/>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div className="bg-white p-4 rounded shadow">
        <Profile/>
        </div>
        <div className="bg-white p-4 rounded shadow max-h-screen overflow-y-auto">
        <h1 className="text-xl font-semibold mb-4">Recent rented property</h1>
        <HouseCard />
        <div/>
    </div>
    <div className="bg-white p-4 rounded shadow max-h-screen overflow-y-auto">
    <h1 className="text-xl font-semibold">Rented properties</h1>
    <p className="text-md text-right font-semibold text-gray-700">2/2/2024</p>
    <HouseCard />
    <p className="text-md text-right font-semibold text-gray-700">2/3/2023</p>
    <HouseCard />
    <p className="text-md text-right font-semibold text-gray-700">1/5/2022</p>
    <HouseCard />


    </div>
    </div>


    </div>

)
}

export default profile
