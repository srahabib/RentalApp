import React from 'react'
import ProfileCard1 from '@/components/ProfileCard1/ProfileCard1'
import ProfileCard from '@/components/ProfileCard/ProfileCard'
import { HouseCard } from '@/components'
const profile = () => {
    return (
    <div>
    <ProfileCard1/>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div className="bg-white  rounded ">
        <ProfileCard/>
    </div>
    <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg p-6 h-96 overflow-y-auto">
    <h1 className="text-xl font-semibold mb-4">Recent rented Property</h1>
    <HouseCard />
    </div>

    <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg p-6 h-96 overflow-y-auto">
    <h1 className="text-xl font-semibold mb-4">rented Properties</h1>
    <p className="text-md text-gray-700 font-semibold text-right mt-2">2/2/2023</p>
    <HouseCard />
    <hr/>
    <p className="text-md text-gray-700 font-semibold text-right mt-2">3/8/2022</p>
    <HouseCard />
    <hr/>
    </div>
    </div>
</div>
    )
}

export default profile