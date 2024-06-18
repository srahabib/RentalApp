import { useState, useEffect } from 'react';
import { ProfileCard1 } from '@/components/ProfileCard1/ProfileCard1';

const ProfileCard1 = () => {
const [image, setImage] = useState("");

useEffect(() => {
const storedImage = localStorage.getItem('profileImage');
if (storedImage) {
    setImage(storedImage);
}
}, []); // Empty dependency array ensures this effect runs only once

const handleImageChange = (e) => {
const file = e.target.files[0];
if (file) {
    const reader = new FileReader();
    reader.onloadend = () => {
    const imageDataUrl = reader.result;
    setImage(imageDataUrl);
    localStorage.setItem('profileImage', imageDataUrl); // Store image in local storage
    };
    reader.readAsDataURL(file);
}
};

return (
<section className="mt-10 p-4">
    <div className="w-full md:w-1/2 md:mx-auto flex flex-col md:flex-row items-center justify-center text-center">
    <div className="relative inline-flex object-cover border-4 border-amber-600 rounded-full shadow-[5px_5px_0_0_rgba(0,0,0,1)] shadow-amber-600/100 bg-amber-50 h-24 w-24 mb-4 md:mb-0 ml-0 md:mr-5">
        {image ? (
        <img className="h-full w-full rounded-full" src={image} alt="Profile" />
        ) : (
        <div className="h-full w-full flex items-center justify-center text-gray-400">
            No Image
        </div>
        )}
        <input
        type="file"
        accept="image/*"
        className="absolute inset-0 opacity-0 cursor-pointer"
        onChange={handleImageChange}
        />
    </div>
    </div>
</section>
);
};

export default ProfileCard1;
