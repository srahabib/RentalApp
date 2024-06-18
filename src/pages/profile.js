import React from 'react'
import ProfileCard from '@/components/ProfileCard/ProfileCard'
import Profile from './../components/Profile/Profile';
import HouseCard from '@/components/HouseCard/HouseCard'
import DetailsCard from '@/components/DetailsCard/DetailsCard';

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
        <HouseCard 
            title="Beach House"
            city="Alexandria"
            description="This sunny and spacious room is for those traveling light and looking for a comfy and cosy place to lay their head for a night or two. This beach house sits in a vibrant neighborhood littered with cafes, pubs, restaurants and supermarkets and is close to all the major attractions such as Edinburgh Castle and Arthur's Seat."
            price="100"/>
        <div/>
    </div>
    <div className="bg-white p-4 rounded shadow max-h-screen overflow-y-auto">
    <h1 className="text-xl font-semibold">Rented properties</h1>
    <p className="text-md text-right font-semibold text-gray-700">2/2/2024</p>
    <HouseCard 
            title="Beach House"
            city="Alexandria"
            description="This sunny and spacious room is for those traveling light and looking for a comfy and cosy place to lay their head for a night or two. This beach house sits in a vibrant neighborhood littered with cafes, pubs, restaurants and supermarkets and is close to all the major attractions such as Edinburgh Castle and Arthur's Seat."
            price="100"/>
        <div/>
    <p className="text-md text-right font-semibold text-gray-700">2/3/2023</p>
    <HouseCard 
            title="Beach House"
            city="Alexandria"
            description="This sunny and spacious room is for those traveling light and looking for a comfy and cosy place to lay their head for a night or two. This beach house sits in a vibrant neighborhood littered with cafes, pubs, restaurants and supermarkets and is close to all the major attractions such as Edinburgh Castle and Arthur's Seat."
            price="100"/>
        <div/>
    <p className="text-md text-right font-semibold text-gray-700">1/5/2022</p>
    <HouseCard 
            title="Beach House"
            city="Alexandria"
            description="This sunny and spacious room is for those traveling light and looking for a comfy and cosy place to lay their head for a night or two. This beach house sits in a vibrant neighborhood littered with cafes, pubs, restaurants and supermarkets and is close to all the major attractions such as Edinburgh Castle and Arthur's Seat."
            price="100"/>
        <div/>


    </div>
    </div>


    </div>

)
}

export default profile
